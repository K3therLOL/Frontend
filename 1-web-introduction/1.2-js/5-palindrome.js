function is_palindrome(str) {
    clean_str = str.replace(/\s/g, '').toLowerCase();
    return clean_str === clean_str.split("").reverse().join("")
}

str = prompt("Введите строку: ")
alert(is_palindrome(str) ? "Да" : "Нет")
