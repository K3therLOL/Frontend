document.addEventListener('DOMContentLoaded', () => {
    // Запрет контекстного меню (правая кнопка мыши)
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // Запрет выделения текста
    document.addEventListener('selectstart', (event) => {
        event.preventDefault();
    });

    // Запрет копирования
    document.addEventListener('copy', (event) => {
        event.preventDefault();
    });

});


