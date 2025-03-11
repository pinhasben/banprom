document.addEventListener("DOMContentLoaded", function() {
    const text = "OFFRE SPÉCIALE \n FRANCHISE ASSURANCE OFFERTE (REMBOURSÉE)";
    let index = 0;
    const speed = 100;
    const typingElement = document.getElementById("typing-text");

    function typeWriter() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                typingElement.innerHTML = "";
                index = 0;
                typeWriter();
            }, 2000);
        }
    }

    typeWriter();
});
