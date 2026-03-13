const input = prompt("Введите все ссылки последовательно через пробел: ");
const urls = input.trim().split(' ');

async function loadImage(url) {
    try {
        const img = new Image();
        img.src = url;
        await img.decode();
        return img;
    } catch(err) {
        throw new Error(`Невозможно загрузить картинку по "${url}"`)
    }
}

async function loadImages(urls) {
    urls.forEach(async (url) => {
        try {
                const img = await loadImage(url);
                document.body.appendChild(img);
        } catch(err) {
            const paragraph = document.createElement("p");
            const paragraphText = document.createTextNode(err.message);
            paragraph.appendChild(paragraphText);
            document.body.appendChild(paragraph);
        }
    })
}

loadImages(urls);
