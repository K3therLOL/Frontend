const num = 5;
let urls = [];
for (let i = 0; i < num; ++i) {
    let url = prompt(`Введите ${i + 1} url картинки: `)
    urls.push(url)
}

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Невозможно загрузить картинку по "${url}"`));
    })
}

let has_error = false;
urls.forEach((url) => {
    loadImage(url)
    .then((img) => {
        if (has_error) {
            return;
        }
        document.body.appendChild(img);
    })
    .catch((err) => {
        if (has_error) {
            return;
        }
        has_error = true;
        const paragraph = document.createElement("p");
        const paragraphText = document.createTextNode(err.message);
        paragraph.appendChild(paragraphText);
        document.body.appendChild(paragraph);
    })
});
