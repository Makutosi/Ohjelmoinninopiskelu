/* Write a program that translates the text "Hello World" into the selected language 
 (English, Swedish, Spanish)*/

document.getElementById('translate').addEventListener('click', () => {
    const language = document.getElementById('language').value;
    let message;

    if (language === 'en') {
        message = 'Hello World';
    } else if (language === 'sv') {
        message = 'Hej Världen';
    } else if (language === 'es') {
        message = 'Hola Mundo';
    }

    document.getElementById('output').textContent = message;
});
