import axios from "axios";

(async () => {
    try {
        const resp = await axios.get("https://json.geoiplookup.io/");
        console.log(`${resp.status} ${resp.statusText}`);
        console.log(resp.data);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Caught error:", error.message);
        } else {
            console.error("Caught unknown error:", error);
        }
    }
})();
