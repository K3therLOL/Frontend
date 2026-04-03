const input = prompt("Enter all links sequentially separated by spaces: ");
const urls = input.trim().split(/\s+/);

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Impossible to load image by "${url}"`));
    })
}

Promise.all(urls.map(url => loadImage(url)))
.then((imgs) => {
    imgs.forEach(img => { 
        document.body.appendChild(img);
    });
})
.catch((err) => {
    const paragraph = document.createElement("p");
    const paragraphText = document.createTextNode(err.message);
    paragraph.appendChild(paragraphText);
    document.body.appendChild(paragraph);
})
