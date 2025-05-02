
let overlay = document.querySelector(".page__container");
let content = document.querySelector(".content");
let likeButtons = content.querySelectorAll(".infobar__button-container")
let editButton = content.querySelector(".profile__edit-button");
let form = document.querySelector(".form");
let formSaveButton = form.querySelector(".form__save-button");
let formCloseButton = form.querySelector(".form__close-button");
let profileName = content.querySelector(".profile__name");
let profileClass = content.querySelector(".profile__class");
  
likeButtons.forEach((buttonContainer) => {
    let filledHeart = buttonContainer.querySelector(".infobar__button-active");
    let emptyHeart = buttonContainer.querySelector(".infobar__button");

    buttonContainer.addEventListener("click", (event) => {
        let clicked = event.target;

        if (clicked === emptyHeart) {
            emptyHeart.classList.add("infobar__button-hidden");
            filledHeart.classList.remove("infobar__button-hidden");
        } else if (clicked === filledHeart) {
            filledHeart.classList.add("infobar__button-hidden");
            emptyHeart.classList.remove("infobar__button-hidden");
        }
    });
});

function editProfile() {
    let nameInput = form.querySelector(".form__input_type_name").value;
    let classInput = form.querySelector(".form__input_type_class").value;

    profileName.textContent = nameInput;
    profileClass.textContent = classInput;
}

editButton.addEventListener("click", () => {
    form.hidden = false;

    overlay.classList.add("page__overlay");
});

formSaveButton.addEventListener("click", (event) => {
    event.preventDefault();

    editProfile();

    form.hidden = true;

    overlay.classList.remove("page__overlay");
});

formCloseButton.addEventListener("click", () => {
    form.hidden = true;

    overlay.classList.remove("page__overlay");
});