export async function fetchWebsite(url) {
    //console.log("WEBSITE SERVICE CALLED");

    const website = new URL(url);

    const response = await fetch(website.href);

    console.log("STATUS:", response.status);

    const html = await response.text();

    console.log("HTML:", html);

    return {
        website: website.href,
        reachable: true,
        statusCode: response.status,
        html: html
    };
}