export function calculateSEOScore(seo, technical, pageSpeed) {

    let score = 0;

    // Basic SEO checks
    if (seo.pageTitle) score += 10;

    if (seo.metaDescription) score += 10;

    if (seo.canonicalTag) score += 10;

    if (seo.h1Heading) score += 10;

    if (seo.structuredData) score += 10;

    // Image alt text
    if (seo.altTextCoverage >= 80) {
        score += 10;
    }

    // Technical SEO
    if (technical.robots) score += 10;

    if (technical.sitemap) score += 10;

    // PageSpeed SEO score
    if (pageSpeed.available && pageSpeed.seo !== null) {
        score += (pageSpeed.seo / 100) * 20;
    }

    return Math.round(score);
}

export function calculateOverallScore({
    seoScore,
    performance,
    accessibility,
    bestPractices,
    socialScore,
    googleBusinessScore
}) {

    const categories = [
        {
            name: "seo",
            score: seoScore,
            weight: 25
        },
        {
            name: "performance",
            score: performance,
            weight: 25
        },
        {
            name: "accessibility",
            score: accessibility,
            weight: 15
        },
        {
            name: "bestPractices",
            score: bestPractices,
            weight: 10
        },
        {
            name: "social",
            score: socialScore,
            weight: 15
        },
        {
            name: "googleBusiness",
            score: googleBusinessScore,
            weight: 10
        }
    ];

    let weightedScore = 0;
    let totalWeight = 0;

    for (const category of categories) {

        if (category.score !== null) {

            weightedScore +=
                category.score * category.weight;

            totalWeight += category.weight;
        }
    }

    if (totalWeight === 0) {
        return 0;
    }

    return Math.round(
        weightedScore / totalWeight
    );
}