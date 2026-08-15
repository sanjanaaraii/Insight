import express from "express";
import { analyzeController } from "../controllers/analyticsController.js";

const router=express.Router(); //creates a router

//Happens when we go to analytics
router.get("/", (req, res) => {
    res.json({
        businessName: "Nike",
        overallScore: 84,
        status: "Good",
        summary: "Nike has a strong digital presence with excellent website performance and social media reach. SEO can be improved by increasing structured data coverage and image alt text.",
        websitePerformance: {
            score: 91,
            performance: "Excellent",
            pageSpeed: "1.8s",
            mobileOptimized: true,
            httpsEnabled: true
        },
        seo: {
            score: 78,
            pageTitle: true,
            metaDescription: true,
            canonicalTag: true,
            xmlSitemap: true,
            structuredData: false,
            h1Heading: true,
            altTextCoverage: 82
        },
        socialMedia: {
            score: 95,
            activePlatforms: 6,
            engagementRate: "5.4%",
            followers: {
                instagram: 305000000,
                facebook: 38000000,
                youtube: 1900000
            }
        },
        googleBusinessProfile: {
            score: 89,
            rating: 4.7,
            reviews: 12876,
            photos: 432,
            completeness: 98,
            verified: true
        }
    });
});

router.post("/", analyzeController);

export default router;