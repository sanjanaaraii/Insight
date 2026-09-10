import * as cheerio from "cheerio";

export function analyzeSEO(html) {
    const $ = cheerio.load(html);

    // 1. Page Title
    const title = $("title").text().trim();
    const pageTitle = title.length > 0;

    // 2. Meta Description
    const metaDescription =
        $('meta[name="description"]').attr("content")?.trim();

    const hasMetaDescription = !!metaDescription;

    // 3. Canonical Tag
    const canonical =
        $('link[rel="canonical"]').attr("href");

    const canonicalTag = !!canonical;

    // 4. Structured Data
    const structuredData =
        $('script[type="application/ld+json"]').length > 0;

    // 5. H1 Heading
    const h1Count = $("h1").length;
    const h1Heading = h1Count > 0;

    // 6. Image Alt Text Coverage
    const images = $("img");

    const totalImages = images.length;
    let imagesWithAlt = 0;

    images.each((index, element) => {
        const alt = $(element).attr("alt");

        if (alt && alt.trim() !== "") {
            imagesWithAlt++;
        }
    });

    const altTextCoverage =
        totalImages === 0
            ? 100
            : (imagesWithAlt / totalImages) * 100;

    return {
        pageTitle,
        metaDescription: hasMetaDescription,
        canonicalTag,
        structuredData,
        h1Heading,
        altTextCoverage
    };
}