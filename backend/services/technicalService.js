export async function checkTechnicalSEO(url) {
    const website = new URL(url);

    const robotsUrl = new URL("/robots.txt", website.origin);
    const sitemapUrl = new URL("/sitemap.xml", website.origin);

    const robotsResponse = await fetch(robotsUrl.href);
    const sitemapResponse = await fetch(sitemapUrl.href);

    console.log("ROBOTS URL:", robotsUrl.href);
    console.log("ROBOTS STATUS:", robotsResponse.status);

    console.log("SITEMAP URL:", sitemapUrl.href);
    console.log("SITEMAP STATUS:", sitemapResponse.status);

    return {
        robots: robotsResponse.ok,
        sitemap: sitemapResponse.ok
    };
}