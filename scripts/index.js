const initialCards = [
    { name: "Vale de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg" },
    { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg" },
    { name: "Montanhas Carecas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
    { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
    { name: "Parque Nacional da Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
    { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" }
];

// Seletores gerais
const overlay = document.querySelector(".page__container");
const placesContainer = document.querySelector(".places");
const cardTemplate = document.querySelector("#card-template").content;

// Popups
const editProfileForm = document.querySelector("#edit-profile-form");
const addCardForm = document.querySelector("#add-card-form");
const imagePopup = document.querySelector("#image-zoom-popup");

// Perfil
const profileName = document.querySelector(".profile__name");
const profileClass = document.querySelector(".profile__class");

// Botões
const btnEditProfile = document.querySelector(".profile__edit-button");
const btnAddCard = document.querySelector(".profile__add-button");

// Abrir e fechar popups
function openPopup(popup) {
    popup.hidden = false;
    overlay.classList.add("page__overlay");
}

function closePopup(popup) {
    popup.hidden = true;
    overlay.classList.remove("page__overlay");
}

// Fechar os popups pelos botões "X"
document.querySelectorAll(".form__close-button, .image-popup__close-button").forEach(button => {
    button.addEventListener("click", (event) => {
        const popupToClose = event.target.closest("section");
        closePopup(popupToClose);
    });
});

// Criar o cartão
function createCard(name, link) {
    const cardElement = cardTemplate.cloneNode(true).querySelector(".places__item"); 

    const cardImage = cardElement.querySelector(".places__image");
    const cardTitle = cardElement.querySelector(".infobar__name");
    const btnDelete = cardElement.querySelector(".places__trash-button");
    const likeContainer = cardElement.querySelector(".infobar__button-container");
    const emptyHeart = cardElement.querySelector(".infobar__button");
    const filledHeart = cardElement.querySelector(".infobar__button-active");

    cardTitle.textContent = name;
    cardImage.setAttribute("src", link);
    cardImage.setAttribute("alt", name);

    // Curtir
    likeContainer.addEventListener("click", (event) => {
        let clicked = event.target;
        if (clicked === emptyHeart) {
            emptyHeart.classList.add("infobar__button-hidden");
            filledHeart.classList.remove("infobar__button-hidden");
        } else if (clicked === filledHeart) {
            filledHeart.classList.add("infobar__button-hidden");
            emptyHeart.classList.remove("infobar__button-hidden");
        }
    });

    // Deletar Cartão
    btnDelete.addEventListener("click", (event) => {
        event.target.closest(".places__item").remove();
    });

    // Zoom na Imagem
    cardImage.addEventListener("click", () => {
        const popupImg = imagePopup.querySelector(".image-popup__image");
        const popupCaption = imagePopup.querySelector(".image-popup__caption");
        
        popupImg.setAttribute("src", link);
        popupImg.setAttribute("alt", name);
        popupCaption.textContent = name;
        openPopup(imagePopup);
    });

    return cardElement;
}

// Renderiza os 6 cartões iniciais
initialCards.forEach(cardData => {
    placesContainer.append(createCard(cardData.name, cardData.link)); 
});

// Abrir forms
btnEditProfile.addEventListener("click", () => openPopup(editProfileForm));
btnAddCard.addEventListener("click", () => openPopup(addCardForm));

// Submit: Editar Perfil
editProfileForm.querySelector(".form__body").addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = editProfileForm.querySelector(".form__input_type_name").value;
    const classInput = editProfileForm.querySelector(".form__input_type_class").value;

    profileName.textContent = nameInput;
    profileClass.textContent = classInput;

    closePopup(editProfileForm);
});

// Submit: Adicionar Novo Cartão
addCardForm.querySelector(".form__body").addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = addCardForm.querySelector(".form__input_type_title").value;
    const urlInput = addCardForm.querySelector(".form__input_type_url").value;

    placesContainer.prepend(createCard(titleInput, urlInput)); 

    closePopup(addCardForm);
    addCardForm.querySelector(".form__body").reset(); 
});