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
    
    star.addEventListener("mouseover", () => {
        star.style.backgroundColor = "yellow";
        star.innerText = starNames[Math.floor(Math.random() * starNames.length)];
    });

    star.addEventListener("mouseout", () => {
        star.style.backgroundColor = "white";
        star.innerText = "";
    });

    document.getElementById("stars-container").appendChild(star);
}

// Create 100 stars
for (let i = 0; i < 100; i++) {
    createStar();
}
