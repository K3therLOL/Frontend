const input = prompt("Enter all links sequentially separated by spaces: ");
const urls = input.trim().split(/\s+/);

const fetchedPromises = urls.map((url) => {
    return fetch(url)
        .then((resp) => {
            if (!resp.ok) {
                throw new Error(`Impossible to load image by "${url}"`);
            }
            return resp.blob();
        })
        .then((blob) => {
            const img = new Image();
            img.src = URL.createObjectURL(blob);
            document.body.appendChild(img);
            return img;
        })
        .catch((err) => {
            throw new Error(`Impossible to load image by "${url}"`);
        })
});

Promise.all(fetchedPromises)
.catch((err) => {
    document.body.replaceChildren();
    const paragraph = document.createElement("p");
    const paragraphText = document.createTextNode(err.message);
    paragraph.appendChild(paragraphText);
    document.body.appendChild(paragraph);
});
