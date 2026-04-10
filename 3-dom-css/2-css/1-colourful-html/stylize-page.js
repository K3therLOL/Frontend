function colorText() {
    const element = document.getElementById("red-blue");
    const html = element.innerHTML;
    const index = html.indexOf("<a href");
    const regex = /[а-яА-ЯёЁ]/g;
    element.innerHTML = html.slice(0, index).replace(regex, (c) => {
        return `<span>${c}</span>`;
    }) + html.slice(index);
}

function sansText() {
    const element = document.getElementById("font");
    const html = element.innerHTML;
    const newHTML = html.replace("Теорема Пифагора", "<span id=\"sans\">$&</span>");
    element.innerHTML = newHTML;
}

function obliqueText() {
    const element = document.getElementById("font");
    const html = element.innerHTML;

    const regex = /(c<sup>2.*2<\/sup>)<br>/
    const newHTML = html.replace(regex, "<span id=\"oblique\">$&</span>");
    element.innerHTML = newHTML;
}

colorText();
sansText();
obliqueText();
