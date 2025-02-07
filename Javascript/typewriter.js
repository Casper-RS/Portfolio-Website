function startTypewriterEffect(elementId, text, speed = 150, deleteSpeed = 100, delayBeforeDeleting = 1500, delayBetweenLoops = 500) {
    let index = 0;
    let isDeleting = false;

    function typeWriterEffect() {
        let displayText = text.substring(0, index);
        document.getElementById(elementId).textContent = displayText;

        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(typeWriterEffect, speed);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(typeWriterEffect, deleteSpeed);
        } else if (!isDeleting && index === text.length) {
            setTimeout(() => {
                isDeleting = true;
                typeWriterEffect();
            }, delayBeforeDeleting);
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            setTimeout(typeWriterEffect, delayBetweenLoops);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(typeWriterEffect, 1000);

        // Fade-out effect when the page is fully loaded
        const fadeOverlay = document.getElementById("fadeOverlay");
        setTimeout(() => {
            fadeOverlay.classList.add("fade-out");
        }, 500); // Delay before fading out (adjust if needed)
    });
}

// Call the function
startTypewriterEffect("typewriter", "Your Name");
