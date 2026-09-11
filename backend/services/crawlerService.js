import * as cheerio from "cheerio";

export async function crawlWebsite(startUrl, maxPages = 10) {
    const start = new URL(startUrl);

    const queue = [start.href];
    const visited = new Set();

    const pages = [];

    while (queue.length > 0 && pages.length < maxPages) {
        const currentUrl = queue.shift();

        // Prevent duplicate URLs
        if (visited.has(currentUrl)) {
            continue;
        }

        visited.add(currentUrl);

        try {
            const startTime = Date.now();

            const response = await fetch(currentUrl, {
                signal: AbortSignal.timeout(10000)
            });

            const responseTime = Date.now() - startTime;

            console.log(
                `CRAWLED: ${currentUrl} → ${response.status}`
            );

            pages.push({
                url: currentUrl,
                statusCode: response.status,
                reachable: response.ok,
                responseTime
            });

            // Only parse HTML pages
            const contentType =
                response.headers.get("content-type") || "";

            if (!contentType.includes("text/html")) {
                continue;
            }

            const html = await response.text();
            const $ = cheerio.load(html);

            $("a[href]").each((index, element) => {
                const href = $(element).attr("href");

                try {
                    const link = new URL(href, currentUrl);

                    // Only crawl pages on the same domain
                    if (link.hostname !== start.hostname) {
                        return;
                    }

                    // Only HTTP/HTTPS
                    if (
                        link.protocol !== "http:" &&
                        link.protocol !== "https:"
                    ) {
                        return;
                    }

                    // Remove hash
                    link.hash = "";

                    const normalizedUrl = link.href;

                    if (
                        !visited.has(normalizedUrl) &&
                        !queue.includes(normalizedUrl)
                    ) {
                        queue.push(normalizedUrl);
                    }

                } catch {
                    // Ignore invalid URLs
                }
            });

        } catch (error) {
            console.log(
                `CRAWL ERROR: ${currentUrl} → ${error.message}`
            );

            pages.push({
                url: currentUrl,
                statusCode: null,
                reachable: false,
                responseTime: null,
                error: error.message
            });
        }
    }

    return {
        pages,
        pagesDiscovered: visited.size,
        pagesAnalyzed: pages.length
    };
}