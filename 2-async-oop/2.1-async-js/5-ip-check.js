const input = prompt(" Enter all ips sequentially separated by spaces: ");
const ips = input.trim().split(/\s+/);

async function geoRequest(ip) {
    const url = `https://json.geoiplookup.io/${ip}`;
    const resp = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        },
    });

    const result = await resp.json();
    return result;
}

async function blocking(ips) {
    const blocked_countries = ["Russia", "Belarus", "Afghanistan", "China", "Venezuela", "Iran"];
    let allow = true;
    try {
        const results = await Promise.all(ips.map(geoRequest));
        const isBlocked = results.some(geo => (!geo || blocked_countries.includes(geo.country_name) ));
        if (isBlocked) {
            alert("Our services not available in your country");
            return;
        }
    } catch(err) {
        alert(err.message);
        return;
    }
    alert("Welcome to our website");
}

blocking(ips);
