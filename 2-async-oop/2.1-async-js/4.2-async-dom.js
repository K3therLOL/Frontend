const input = prompt("Enter all links sequentially separated by spaces: ");
const urls = input.trim().split(/\s+/);

async function loadImage(url) {
    const resp = await fetch(url);
    if(!resp.ok) {
        throw new Error(`Impossible to load image by "${url}"`);
    }
    const blob = await resp.blob();
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    document.body.appendChild(img);
    return img;
}

async function loadImages(urls) {
    try {
        await Promise.all(urls.map((url) => loadImage(url)));
    } catch(err) {
        document.body.replaceChildren();
        const paragraph = document.createElement("p");
        const paragraphText = document.createTextNode(err.message);
        paragraph.appendChild(paragraphText);
        document.body.appendChild(paragraph);
    }
}

loadImages(urls);
