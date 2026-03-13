const input = prompt("Введите все ссылки последовательно через пробел: ");
const urls = input.trim().split(' ');

async function loadImage(url) {
    try {
        const img = new Image();
        img.src = url;
        await img.decode();
        return img;
    } catch(err) {
        throw new Error(`Невозможно загрузить картинку по "${url}"`);
    }
}

async function loadImages(urls) {
    let has_error = false;

    urls.forEach(async (url) => {
        try {
            if (has_error) {
                return;
            }

            const img = await loadImage(url);
            document.body.appendChild(img);
        } catch(err) {
            if (has_error) {
                return;
            }

            has_error = true;
            const paragraph = document.createElement("p");
            const paragraphText = document.createTextNode(err.message);
            paragraph.appendChild(paragraphText);
            document.body.appendChild(paragraph);
        }
    })
}

loadImages(urls);
