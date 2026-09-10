// {import { fetchWebsite } from "./services/websiteService.js";

// const result = await fetchWebsite("https://example.com");

// console.log(result);}

//seoService

// import { fetchWebsite } from "./services/websiteService.js";
// import { analyzeSEO } from "./services/seoService.js";

// const websiteResult = await fetchWebsite("https://example.com");

// const seoResult = analyzeSEO(websiteResult.html);

// console.log("SEO RESULT:");
// console.log(seoResult);

//technicalService

// import { fetchWebsite } from "./services/websiteService.js";
// import { analyzeSEO } from "./services/seoService.js";
// import { checkTechnicalSEO } from "./services/technicalService.js";

// const websiteResult = await fetchWebsite("https://example.com");

// const seoResult = analyzeSEO(websiteResult.html);

// const technicalResult =
//     await checkTechnicalSEO(websiteResult.website);

// console.log("SEO RESULT:");
// console.log(seoResult);

// console.log("TECHNICAL RESULT:");
// console.log(technicalResult);


//pgspeecService

// import { analyzeWebsite } from "./services/analysisService.js";

// const result =
//     await analyzeWebsite("https://example.com");

// console.log(
//     JSON.stringify(result, null, 2)
// );

//socialservice

// import { analyzeSocialMedia } from "./services/socialService.js";

// const result = analyzeSocialMedia({
//     facebook: "https://facebook.com/example",
//     instagram: "https://instagram.com/example",
//     linkedin: "",
//     youtube: ""
// });

// console.log("SOCIAL RESULT:");
// console.log(result);

//google

// import { analyzeGoogleBusiness } from "./services/googleBusinessService.js";

// const result = analyzeGoogleBusiness();

// console.log("GOOGLE BUSINESS RESULT:");
// console.log(result);

//score

// import {
//     calculateSEOScore,
//     calculateOverallScore
// } from "./utils/scoreCalculator.js";

// const seo = {
//     pageTitle: true,
//     metaDescription: false,
//     canonicalTag: false,
//     structuredData: false,
//     h1Heading: true,
//     altTextCoverage: 100
// };

// const technical = {
//     robots: false,
//     sitemap: false
// };

// const pageSpeed = {
//     available: false,
//     performance: null,
//     accessibility: null,
//     seo: null,
//     bestPractices: null
// };

// const seoScore =
//     calculateSEOScore(
//         seo,
//         technical,
//         pageSpeed
//     );

// const socialScore = 50;

// const overallScore =
//     calculateOverallScore({
//         seoScore,
//         performance: pageSpeed.performance,
//         accessibility: pageSpeed.accessibility,
//         bestPractices: pageSpeed.bestPractices,
//         socialScore,
//         googleBusinessScore: null
//     });

// console.log("SEO SCORE:", seoScore);
// console.log("SOCIAL SCORE:", socialScore);
// console.log("OVERALL SCORE:", overallScore);

import { analyzeWebsite } from "./services/analysisService.js";

const result = await analyzeWebsite({

    websiteUrl: "https://example.com",

    facebook: "https://facebook.com/example",

    instagram: "https://instagram.com/example",

    linkedin: "",

    youtube: ""

});

console.log(
    JSON.stringify(
        result,
        null,
        2
    )
);