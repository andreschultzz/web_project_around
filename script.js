const content = document.querySelector(".content");
const likeButtons = content.querySelectorAll(".infobar__button-container");

likeButtons.forEach((buttonContainer) => {
    const disabledButton = buttonContainer.querySelector(".infobar__button");
    const activeButton = buttonContainer.querySelector(".infobar__button_active");

    disabledButton.addEventListener("click", () => {
        disabledButton.classList.add("infobar__button_hidden");
        activeButton.classList.remove("infobar__button_hidden");
    });

    activeButton.addEventListener("click", () => {
        activeButton.classList.add("infobar__button_hidden");
        disabledButton.classList.remove("infobar__button_hidden");
    });
});