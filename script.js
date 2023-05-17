const starNames = [
    "Orion",
    "Sirius",
    "Vega",
    "Betelgeuse",
    "Polaris",
    "Rigel",
    "Aldebaran",
    // Add more star names here
];

function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    
    const starName = document.createElement("span");
    starName.className = "star-name";

    star.addEventListener("mouseover", () => {
        starName.innerText = starNames[Math.floor(Math.random() * starNames.length)];
    });

    star.addEventListener("mouseout", () => {
        starName.innerText = "";
    });

    star.appendChild(starName);
    document.getElementById("stars-container").appendChild(star);

    // Random blinking delay for each star
    const blinkingDelay = Math.random() * 6000 + 1000;
    star.style.animationDelay = `${blinkingDelay}ms`;
    star.classList.add("blinking");
}

// Create 100 stars
for (let i = 0; i < 100; i++) {
    createStar();
}
