export function analyzeSocialMedia({
    facebook,
    instagram,
    linkedin,
    youtube
}) {

    const platforms = {
        facebook: Boolean(facebook),
        instagram: Boolean(instagram),
        linkedin: Boolean(linkedin),
        youtube: Boolean(youtube)
    };

    const activePlatforms =
        Object.values(platforms).filter(Boolean).length;

    return {
        ...platforms,
        activePlatforms
    };
}