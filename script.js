let content = document.querySelector(".content");
let likeButtons = content.querySelectorAll(".infobar__button-container")
let editButton = content.querySelector(".profile__edit-button");
let form = content.querySelector(".form");
let formSaveButton = content.querySelector(".form__save-button");
let formCloseButton = content.querySelector(".form__close-button");
let profileName = content.querySelector(".profile__name");
let profileClass = content.querySelector(".profile__class");
  
likeButtons.forEach((buttonContainer) => {
    const filledHeart = buttonContainer.querySelector(".infobar__button_active");
    const emptyHeart = buttonContainer.querySelector(".infobar__button");

    buttonContainer.addEventListener("click", (event) => {
        let clicked = event.target;

        if (clicked === emptyHeart) {
            emptyHeart.classList.add("infobar__button_hidden");
            filledHeart.classList.remove("infobar__button_hidden");
        } else if (clicked === filledHeart) {
            filledHeart.classList.add("infobar__button_hidden");
            emptyHeart.classList.remove("infobar__button_hidden");
        }
    });
});

function editProfile() {
    let nameInput = content.querySelector(".form__input_type_name").value;
    let classInput = content.querySelector(".form__input_type_class").value;

    profileName.textContent = nameInput;
    profileClass.textContent = classInput;
}

editButton.addEventListener("click", () => {
    form.hidden = false;
});

formSaveButton.addEventListener("click", (event) => {
    event.preventDefault();

    editProfile();

    form.hidden = true;
});

formCloseButton.addEventListener("click", () => {
    form.hidden = true;
});