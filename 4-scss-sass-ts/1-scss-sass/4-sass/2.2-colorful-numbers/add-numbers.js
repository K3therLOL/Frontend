const element = document.getElementById("numbers");
for (let i = 1; i <= 100; ++i) {
    element.innerHTML += `<span class="color${i}">${i}</span><br>`
}
