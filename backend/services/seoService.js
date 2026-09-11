import * as cheerio from "cheerio";

export function analyzeSEO(html, websiteUrl) {
    const $ = cheerio.load(html);

    // TITLE
   

    const title = $("title").first().text().trim();

    const titleExists = title.length > 0;
    const titleLength = title.length;

    const titleLengthGood =
        titleLength >= 30 && titleLength <= 60;


    // META DESCRIPTION

    const metaDescription =
        $('meta[name="description"]').attr("content")?.trim() || "";

    const metaDescriptionExists =
        metaDescription.length > 0;

    const metaDescriptionLength =
        metaDescription.length;

    const metaDescriptionLengthGood =
        metaDescriptionLength >= 120 &&
        metaDescriptionLength <= 160;


    // CANONICAL

    const canonical =
        $('link[rel="canonical"]').attr("href") || null;

    const canonicalTag =
        canonical !== null;


    // H1

    const h1Count = $("h1").length;

    const h1Heading = h1Count === 1;


    // H2 / H3

    const h2Count = $("h2").length;
    const h3Count = $("h3").length;


    // STRUCTURED DATA

    const structuredDataCount =
        $('script[type="application/ld+json"]').length;

    const structuredData =
        structuredDataCount > 0;


    // IMAGES / ALT TEXT

    const images = $("img").length;

    let imagesWithAlt = 0;

    $("img").each((_, element) => {

        const alt = $(element).attr("alt");

        if (
            alt !== undefined &&
            alt.trim().length > 0
        ) {
            imagesWithAlt++;
        }

    });

    const imagesWithoutAlt =
        images - imagesWithAlt;

    const altTextCoverage =
        images === 0
            ? 100
            : Number(
                ((imagesWithAlt / images) * 100).toFixed(1)
            );


    // LINKS

    let internalLinks = 0;
let externalLinks = 0;

const baseUrl = new URL(websiteUrl);

$("a[href]").each((_, element) => {

    const href = $(element).attr("href");

    if (!href) return;

    if (
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:")
    ) {
        return;
    }

    try {

        const link = new URL(
            href,
            baseUrl.href
        );

        if (
            link.hostname ===
            baseUrl.hostname
        ) {
            internalLinks++;
        } else {
            externalLinks++;
        }

    } catch {
        // Ignore invalid URLs
    }

});


    // SEO SCORE

    let score = 0;

    // Title
    if (titleExists) {
        score += 10;

        if (titleLengthGood) {
            score += 5;
        }
    }

    // Meta description
    if (metaDescriptionExists) {
        score += 10;

        if (metaDescriptionLengthGood) {
            score += 5;
        }
    }

    // Canonical
    if (canonicalTag) {
        score += 10;
    }

    // H1
    if (h1Heading) {
        score += 10;
    }

    // Structured data
    if (structuredData) {
        score += 10;
    }

    // Alt text
    score += Math.round(
        altTextCoverage * 0.10
    );

    // Heading structure
    if (h2Count > 0) {
        score += 5;
    }

    // Internal linking
    if (internalLinks > 0) {
        score += 5;
    }

    // Maximum should be 100
    score = Math.min(score, 100);

    return {

        score,

        pageTitle: titleExists,
        title,

        titleLength,
        titleLengthGood,

        metaDescription:
            metaDescriptionExists,

        metaDescriptionLength,
        metaDescriptionLengthGood,

        canonicalTag,
        canonical,

        h1Heading,
        h1Count,

        h2Count,
        h3Count,

        structuredData,
        structuredDataCount,

        images,
        imagesWithAlt,
        imagesWithoutAlt,
        altTextCoverage,

        internalLinks,
        externalLinks
    };
}