import axios from "axios";

(async () => {
    try {
        const resp = await axios.get("https://vk.com");
        console.log(`${resp.status} ${resp.statusText}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Caught error:", error.message);
        } else {
            console.error("Caught unknown error:", error);
        }
    }
})();
