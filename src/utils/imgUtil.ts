import { logline } from "./debug";

export async function checkImageURL(URL: string) {
    try {
        const result = await fetch(URL);
        if ([404, 403].includes(result.status)) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        logline('[checkImageURL]', error);
        return false;
    }
}
