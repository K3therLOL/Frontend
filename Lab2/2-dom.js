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
        img.onerror = () => reject(new Error("Cannot load image"));
    })
}

Promise.all(urls.map(url => loadImage(url)))
.then((imgs) => {
    imgs.forEach(img => { 
        document.body.appendChild(img);
    });
})
.catch((err) => {
    const paragraph = document.createElement("p")
    const paragraphText = document.createTextNode(err.message)
    paragraph.appendChild(paragraphText)
    document.body.appendChild(paragraph)
})
