export async function fetchWebsite(url) {
    const website = new URL(url);

    const response = await fetch(website.href);

    console.log("STATUS:", response.status);

    if (!response.ok) {
        return {
            website: website.href,
            reachable: false,
            statusCode: response.status,
            finalUrl: response.url,
            httpsEnabled: response.url.startsWith("https:")
        };
    }

    const html = await response.text();

    const finalUrl = new URL(response.url);
    const httpsEnabled = finalUrl.protocol === "https:";

    console.log("FINAL URL:", response.url);
    console.log("HTTPS:", httpsEnabled);

    return {
        website: website.href,
        reachable: true,
        statusCode: response.status,
        finalUrl: response.url,
        httpsEnabled,
        html
    };
}