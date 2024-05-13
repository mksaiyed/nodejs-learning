const shortId = require("shortid");
const Url = require("../models/url");

async function generateNewShortURL(req, res) {
    if (!req.body.url)
        return res.status(400).json({
            message: "URL is required",
        });
    const customShortId = shortId.generate();
    await Url.create({
        shortId: customShortId,
        redirectURL: req.body.url,
        visiteHistory: [],
    });
    return res.status(201).json({
        message: "URL created successfully",
        id: customShortId,
    });
}

async function redirectToUrl(req, res) {
    if (!req.params.shortId)
        return res.status(404).json({
            message: "Invalid URL",
        });

    // TODO: We can collect more information of the user like his IP etc.
    const url = await Url.findOneAndUpdate(
        { shortId: req.params.shortId },
        {
            $push: {
                visiteHistory: {
                    timestamp: new Date(),
                },
            },
        }
    );
    return res.redirect(url.redirectURL);
}

async function getAnalytics(req, res) {
    if (!req.params.shortId)
        return res.status(404).json({
            message: "Invalid URL",
        });
    const result = await Url.findOne({ shortId: req.params.shortId });

    return res.json({
        totalClicks: result.visiteHistory.length,
        analytics: result.visiteHistory,
    });
}

module.exports = {
    generateNewShortURL,
    redirectToUrl,
    getAnalytics,
};
