const num = 5;
urls = [];
for (let i = 0; i < num; ++i) {
    url = prompt(`Enter the ${i + 1} url: `)
    urls.push(url)
}

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
    })
}

Promise.all(urls.map(urls => loadImage(url)))
.then(
)
