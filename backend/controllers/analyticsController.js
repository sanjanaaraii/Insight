import { analyzeWebsite } from "../services/analysisService.js";

export async function analyzeController(req, res) {

    try {

        const {
            websiteUrl,
            facebook,
            instagram,
            linkedin,
            youtube
        } = req.body;

        if (!websiteUrl) {
            return res.status(400).json({
                error: "Website URL is required"
            });
        }

        const result = await analyzeWebsite({
            websiteUrl,
            facebook,
            instagram,
            linkedin,
            youtube
        });

        return res.status(200).json(result);

    } catch (error) {

        console.error("ANALYSIS ERROR:", error);

        return res.status(500).json({
            error: "Failed to analyze website"
        });
    }
}