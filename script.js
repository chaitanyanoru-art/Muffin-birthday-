
const message = `

Happy Birthday, My Muffin ❤️

Today is all about you.

You make my world brighter,
my heart happier,
and my life more beautiful.

May your smile never fade,
may all your dreams come true,
and may this year bring you endless happiness.

Thank you for being my favorite person.

I feel incredibly lucky to have you.

Happy Birthday once again,
My Muffin ❤️

Love You Forever ❤️

`;

const typing = document.getElementById("typing");
const btn = document.getElementById("btn");

let i = 0;

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");

btn.addEventListener("click", () => {

    btn.style.display = "none";

    photo1.classList.add("fadeOut");

    setTimeout(() => {

        photo1.style.display = "none";

        photo2.classList.remove("hidden");

        photo2.classList.add("fadeIn");

        typeWriter();

        startHearts();

    },1000);

});

function startHearts() {
    setInterval(createHeart, 250);
}

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-${window.innerHeight + 200}px)`;
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
