export function generateRecommendations({
    seo,
    technical,
    pageSpeed,
    social
}) {

    const recommendations = [];

    // SEO recommendations
    if (!seo.pageTitle) {
        recommendations.push({
            category: "SEO",
            priority: "High",
            message: "Add a descriptive page title."
        });
    }

    if (!seo.metaDescription) {
        recommendations.push({
            category: "SEO",
            priority: "High",
            message: "Add a meta description to improve search visibility."
        });
    }

    if (!seo.canonicalTag) {
        recommendations.push({
            category: "SEO",
            priority: "Medium",
            message: "Add a canonical URL to prevent duplicate URL issues."
        });
    }

    if (!seo.h1Heading) {
        recommendations.push({
            category: "SEO",
            priority: "High",
            message: "Add an H1 heading describing the main page content."
        });
    }

    if (!seo.structuredData) {
        recommendations.push({
            category: "SEO",
            priority: "Medium",
            message: "Add structured data to help search engines understand the page."
        });
    }

    if (seo.altTextCoverage < 80) {
        recommendations.push({
            category: "SEO",
            priority: "Medium",
            message: "Add descriptive alt text to more images."
        });
    }

    // Technical recommendations
    if (!technical.robots) {
        recommendations.push({
            category: "Technical",
            priority: "Medium",
            message: "Add a robots.txt file."
        });
    }

    if (!technical.sitemap) {
        recommendations.push({
            category: "Technical",
            priority: "Medium",
            message: "Add a sitemap.xml file."
        });
    }

    // PageSpeed recommendations
    if (pageSpeed.available) {

        if (pageSpeed.performance < 50) {
            recommendations.push({
                category: "Performance",
                priority: "High",
                message: "Improve page performance and loading speed."
            });
        }

        if (pageSpeed.accessibility < 80) {
            recommendations.push({
                category: "Accessibility",
                priority: "Medium",
                message: "Improve website accessibility."
            });
        }
    }

    // Social media recommendation
    if (social && social.activePlatforms === 0) {
        recommendations.push({
            category: "Social",
            priority: "Medium",
            message: "Add social media profiles to strengthen your digital presence."
        });
    }

    return recommendations;
}