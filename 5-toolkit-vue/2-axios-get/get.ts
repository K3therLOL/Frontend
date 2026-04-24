import axios from "axios";

(async () => {
    const resp = await axios.get("https://vk.com");
    console.log(`${resp.status} ${resp.statusText}`);
})();
