/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ \"./src/styles/index.css\");\n// index.js\n\n\nvar newWish = document.querySelector(\".new-wish\");\nvar popupNewWish = document.querySelector(\".popup-type-new-wish\");\nvar editProfileButton = document.querySelector(\".edit-profile-button\");\nvar popups = document.querySelectorAll(\".popup\");\nvar editProfilePopup = document.querySelector(\".popup-edit-profile\");\nvar profileEditForm = document.forms[\"edit-profile-form\"];\nvar overlay = document.querySelector(\".overlay\");\nfunction showPopup(popup) {\n  popup.classList.add(\"popup_is-opened\");\n  overlay.classList.add(\"overlay-active\");\n  document.addEventListener(\"click\", function (event) {\n    if (event.target === overlay) {\n      closePopup(popup);\n    }\n    document.addEventListener(\"keydown\", escHandler);\n  });\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_is-opened\");\n  overlay.classList.remove(\"overlay-active\");\n}\nnewWish.addEventListener(\"click\", function () {\n  showPopup(popupNewWish);\n});\neditProfileButton.addEventListener(\"click\", function () {\n  showPopup(editProfilePopup);\n});\npopups.forEach(function (popup) {\n  popup.addEventListener(\"click\", function (event) {\n    if (event.target.classList.contains(\"close-button\")) {\n      closePopup(popup);\n    }\n  });\n});\n\n// --------------------------------------------------\n\nvar userName = document.querySelector(\".user-name\");\nvar inputName = editProfilePopup.querySelector(\".popup__input_type_name\");\nfunction handlesFormSubmit(event) {\n  event.preventDefault();\n  var name = inputName.value;\n  userName.textContent = name;\n  closePopup(editProfilePopup);\n}\neditProfilePopup.addEventListener(\"submit\", handlesFormSubmit);\neditProfileButton.addEventListener(\"click\", function () {\n  inputName.value = userName.textContent;\n});\n\n// --------------------------------------------------\n\nvar cardList = document.querySelector(\".card-list\");\nvar newWishForm = document.forms[\"new-wish-form\"];\nvar nameWish = newWishForm.elements[\"name\"];\nvar priceWish = newWishForm.elements[\"price\"];\nvar linkImageWish = newWishForm.elements[\"image-link\"];\nvar buyLinkWish = newWishForm.elements[\"buy-link\"];\nvar emptyListCard = document.querySelector(\".empty-list-active\");\nvar addWishButton = newWishForm.querySelector(\".new-wish-popup__save-button\");\nfunction createCard(data, removeCard) {\n  var cardTemplate = document.querySelector(\".card-template\").content;\n  var cardClone = cardTemplate.cloneNode(true);\n  var cardTitle = cardClone.querySelector(\".card-template__name\");\n  var cardPrice = cardClone.querySelector(\".card-template__price\");\n  var cardImage = cardClone.querySelector(\".card-template__image\");\n  var cardLink = cardClone.querySelector(\".card-template__link\");\n  var deleteButton = cardClone.querySelector(\".delete-button\");\n  deleteButton.addEventListener(\"click\", removeCard);\n  cardTitle.textContent = data.name;\n  cardPrice.textContent = data.price;\n  cardImage.src = data.imageLink;\n  cardImage.alt = data.name;\n  cardLink.href = data.buyLink;\n  if (!data.name || !data.price || !data.imageLink || !data.buyLink) {\n    alert(\"Не все поля заполнены. Невозможно создать карточку.\");\n    return \"\";\n  }\n  clearForm();\n  return cardClone;\n}\naddWishButton.addEventListener(\"click\", function (evt) {\n  evt.preventDefault();\n  var card = {\n    name: nameWish.value,\n    price: priceWish.value,\n    imageLink: linkImageWish.value,\n    buyLink: buyLinkWish.value\n  };\n  var cardElement = createCard(card, removeCard);\n  cardList.prepend(cardElement);\n  emptyListCard.classList.add(\"card-hidden\");\n  closePopup(popupNewWish);\n});\n\n// --------------------------------------------------\n\nfunction removeCard(event) {\n  event.target.closest(\".card-template__item\").remove();\n  if (cardList.childElementCount === 1) {\n    emptyListCard.classList.remove(\"card-hidden\");\n  }\n}\n\n// --------------------------------------------------\n\nfunction clearForm() {\n  nameWish.value = \"\";\n  priceWish.value = \"\";\n  linkImageWish.value = \"\";\n  buyLinkWish.value = \"\";\n}\n\n// --------------------------------------------------\n\nfunction escHandler(event) {\n  if (event.key === \"Escape\") {\n    console.log(event.key);\n    var openedPopup = document.querySelector(\".popup_is-opened\");\n    closePopup(openedPopup);\n  }\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/styles/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;