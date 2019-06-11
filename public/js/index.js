let bodyElement = document.querySelector("body");
let allImages = document.querySelectorAll("img");

state = false;

allImages.forEach(image => {
    image.addEventListener("click", () => {
        if (state == false) {
            bodyElement.style.backgroundColor = "#000";
            state = true;
        } else {
            bodyElement.style.backgroundColor = "#FFF";
            state = false;
        }

    })
});

