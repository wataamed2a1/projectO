function animateText(element) {
    const text = element.textContent;
    element.textContent = '';

    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            element.textContent += text[i];
        }, i * 100);
    }
}

const elements = document.querySelectorAll('.animate');
elements.forEach(animateText);