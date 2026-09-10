export async function analyzePageSpeed(url) {
    const apiUrl =
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed` +
        `?url=${encodeURIComponent(url)}` +
        `&category=performance` +
        `&category=accessibility` +
        `&category=seo` +
        `&category=best-practices`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.log("PageSpeed unavailable:", response.status);

            return {
                available: false,
                performance: null,
                accessibility: null,
                seo: null,
                bestPractices: null
            };
        }

        const data = await response.json();

        const categories = data.lighthouseResult.categories;

        return {
            available: true,
            performance: Math.round(categories.performance.score * 100),
            accessibility: Math.round(categories.accessibility.score * 100),
            seo: Math.round(categories.seo.score * 100),
            bestPractices: Math.round(
                categories["best-practices"].score * 100
            )
        };

    } catch (error) {
        console.log("PageSpeed error:", error.message);

        return {
            available: false,
            performance: null,
            accessibility: null,
            seo: null,
            bestPractices: null
        };
    }
}