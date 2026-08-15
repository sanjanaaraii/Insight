import { fetchWebsite } from "../services/websiteService.js";

export async function analyzeController(req, res) {
    //console.log("CONTROLLER CALLED");

    try {
        const result = await fetchWebsite(req.body.url);

        res.json(result);

    } catch (error) {
        console.log("ERROR:", error);

        res.status(400).json({
            error: "Invalid URL or website unreachable"
        });
    }
}