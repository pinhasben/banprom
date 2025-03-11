document.addEventListener("DOMContentLoaded", function() {
    const text = "OFFRE SPÉCIALE<br>FRANCHISE ASSURANCE OFFERTE (REMBOURSÉE)";
    let index = 0;
    let isDeleting = false;
    const speed = 100;
    const delayAfterTyping = 2000;
    const typingElement = document.getElementById("typing-text");

    function typeWriter() {
        if (!isDeleting) {
            if (index < text.length) {
                typingElement.innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, speed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, delayAfterTyping);
            }
        } else {
            if (index > 0) {
                typingElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, speed / 2);
            } else {
                isDeleting = false;
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
});
