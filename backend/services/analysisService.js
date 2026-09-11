import { fetchWebsite } from "./websiteService.js";
import { analyzeSEO } from "./seoService.js";
import { checkTechnicalSEO } from "./technicalService.js";
import { analyzePageSpeed } from "./pageSpeedService.js";
import { analyzeSocialMedia } from "./socialService.js";
import { analyzeGoogleBusiness } from "./googleBusinessService.js";
import { crawlWebsite } from "./crawlerService.js";

import {
    calculateSEOScore,
    calculateOverallScore
} from "../utils/scoreCalculator.js";

import { generateRecommendations } from "../utils/recommendationEngine.js";


export async function analyzeWebsite({
    websiteUrl,
    facebook,
    instagram,
    linkedin,
    youtube
}) {

    // 1. Fetch website
    const websiteResult =
        await fetchWebsite(websiteUrl);

    // Stop if website cannot be reached
    if (!websiteResult.reachable) {
        return {
            website: websiteResult,
            crawl: null,
            seo: null,
            technical: null,
            pageSpeed: null,
            social: null,
            googleBusiness: null,
            scores: null,
            recommendations: []
        };
    }


    // 2. Crawl website
    const crawlResult =
        await crawlWebsite(
            websiteResult.finalUrl,
            10
        );


    // 3. Analyze SEO
    const seoResult =
        analyzeSEO(websiteResult.html);


    // 4. Technical SEO
    const technicalResult =
        await checkTechnicalSEO(
            websiteResult.website
        );


    // 5. PageSpeed
    const pageSpeedResult =
        await analyzePageSpeed(
            websiteResult.website
        );


    // 6. Social media
    const socialResult =
        analyzeSocialMedia({
            facebook,
            instagram,
            linkedin,
            youtube
        });


    // 7. Google Business
    const googleBusinessResult =
        analyzeGoogleBusiness();


    // 8. Calculate SEO score
    const seoScore =
        calculateSEOScore(
            seoResult,
            technicalResult,
            pageSpeedResult
        );


    // 9. Social score
    const socialScore =
        socialResult.activePlatforms * 25;


    // 10. Overall score
    const overallScore =
        calculateOverallScore({
            seoScore,
            performance:
                pageSpeedResult.performance,
            accessibility:
                pageSpeedResult.accessibility,
            bestPractices:
                pageSpeedResult.bestPractices,
            socialScore,
            googleBusinessScore: null
        });


    // 11. Generate recommendations
    const recommendations =
        generateRecommendations({
            seo: seoResult,
            technical: technicalResult,
            pageSpeed: pageSpeedResult,
            social: socialResult
        });


    // 12. Return everything
    return {

        website: {
            url: websiteResult.website,
            reachable: websiteResult.reachable,
            statusCode: websiteResult.statusCode,
            finalUrl: websiteResult.finalUrl,
            httpsEnabled: websiteResult.httpsEnabled
        },

        crawl: crawlResult,

        seo: seoResult,

        technical: technicalResult,

        pageSpeed: pageSpeedResult,

        social: socialResult,

        googleBusiness: googleBusinessResult,

        scores: {
            seo: seoScore,
            social: socialScore,
            overall: overallScore
        },

        recommendations
    };
}