(()=>{"use strict";var t=document.querySelector(".popup-profile"),e=document.querySelector(".popup-cards"),n=document.querySelector(".popup-image"),r=document.querySelector(".popup-trash"),o=(document.querySelector(".popup-image__large-image"),document.querySelector(".popup-image__title-image"),document.querySelector(".profile__name")),i=document.querySelector(".profile__career"),u=document.forms.UserInfoForm,c=document.querySelector(".form__input_type_name"),a=document.querySelector(".form__input_type_career"),l=document.querySelector(".cards"),s=document.forms.CardForm,f=document.querySelector(".profile__button-edit"),p=document.querySelector(".profile__button-add"),y={submitSelector:"form__button-save",inputSelector:"form__input",inputErrorClass:"form__input-error_active",inputInValide:"form__input_invalid"};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var m=function(){function t(e,n,r,o,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._likes=e.likes,this._template=n,this._handleCardClick=r,this._handleOpenPopupDelete=o,this._handleLikeCard=i,this._handleDislikeCard=u,this._ownerId=e.owner._id,this._cardId=e._id}var e,n;return e=t,(n=[{key:"createCard",value:function(){var t=this;this._newCard=document.querySelector(this._template).content.querySelector(".card").cloneNode(!0);var e=this._newCard.querySelector(".card__img"),n=this._newCard.querySelector(".card__name"),r=this._newCard.querySelector(".card__button-like-counter");return e.src=this._link,e.alt=this._name,n.textContent=this._name,r.textContent=this._likes.length,(this._likes.filter((function(e){return e._id===t._ownerId})).length>0||"8aabda33a800114d8d67f69a"===like._id)&&this._newCard.querySelector(".card__button-like").classList.add("card__button-like_active"),this._setEventListeners(),this._isOwner(),this._newCard}},{key:"_setEventListeners",value:function(){var t=this,e=this._newCard.querySelector(".card__button-like-counter"),n=this._newCard.querySelector(".card__button-like");this._newCard.querySelector(".card__button-trash").addEventListener("click",(function(){t._handleOpenPopupDelete(t)})),n.addEventListener("click",(function(){t._toggleLike(n),n.classList.contains("card__button-like_active")?t._handleLikeCard(t._cardId,e):t._handleDislikeCard(t._cardId,e)})),this._newCard.querySelector(".card__img").addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"deleteCard",value:function(){this._newCard.remove(),this._newCard=null}},{key:"_toggleLike",value:function(t){t.classList.toggle("card__button-like_active")}},{key:"_isOwner",value:function(){var t=this._newCard.querySelector(".card__button-trash");"8aabda33a800114d8d67f69a"!==this._ownerId&&t.remove()}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var _=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._submitSelector=e.submitSelector,this._inputSelector=e.inputSelector,this._inputErrorClass=e.inputErrorClass,this._inputInValide=e.inputInValide,this._formElement=n,this._inputList=this._formElement.querySelectorAll(".".concat(this._inputSelector)),this._buttonElement=this._formElement.querySelector(".".concat(this._submitSelector))}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"hiddenAllErrors",value:function(){var t=this;this._inputList.forEach((function(e){t._hiddenError(e)}))}},{key:"_showError",value:function(t){var e=document.getElementById("".concat(t.id,"-error"));t.classList.add(this._inputInValide),e.textContent=t.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hiddenError",value:function(t){var e=document.getElementById("".concat(t.id,"-error"));t.classList.remove(this._inputInValide),e.classList.remove(this._inputErrorClass),e.textContent=""}},{key:"_isValid",value:function(t){t.validity.valid?this._hiddenError(t):this._showError(t)}},{key:"toggleButtonState",value:function(){var t=this._formElement.checkValidity();this._buttonElement.toggleAttribute("disabled",!t)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t.toggleButtonState()})),t.toggleButtonState()}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=e,this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__button-close")&&t.close()}))}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup-image__large-image"),e._popupImageDescription=e._popup.querySelector(".popup-image__title-image"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageDescription.textContent=t,j(P(u.prototype),"open",this).call(this)}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var q=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._career=n}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,career:this._career.textContent}}},{key:"setUserInfo",value:function(t,e){this._name.textContent=t,this._career.textContent=e}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.popup,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._handleFormSubmit=r,e._form=n.querySelector(".form"),e._inputList=e._form.querySelectorAll(".form__input"),e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputsValues={},this._inputList.forEach((function(e){t._inputsValues[e.name]=e.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var t=this;V(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){V(z(u.prototype),"close",this).call(this),this._form.reset()}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var F=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=n}var e,n;return e=t,(n=[{key:"generateCard",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var J=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._authorization=e.authorization}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-64/users/me/",{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/",{headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"patchUserInfo",value:function(t){return fetch("https://nomoreparties.co/v1/cohort-64/users/me/",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.career})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"postNewCard",value:function(t){return fetch("https://nomoreparties.co/v1/cohort-64/cards/",{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(t,"/"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"likeCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}},{key:"dislikeCard",value:function(t){return fetch("https://mesto.nomoreparties.co/v1/cohort-64/cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Что-то сломалось. Ошибка: ".concat(t.status))}))}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},G.apply(this,arguments)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._button=t.querySelector(".popup__button-yes"),n._verificationDelete=e,n}return e=u,(n=[{key:"getValues",value:function(t){return this._card=t}},{key:"setEventListeners",value:function(){var t=this;G(Q(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){t._verificationDelete(t._card)}))}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(w),X=new J({authorization:"3bc753b1-d1b4-4fd5-b226-ffa03d509b4a"}),Y=new w(t);Y.setEventListeners();var Z=new C(n);Z.setEventListeners();var $=new w(e);$.setEventListeners();var tt=new q(o,i),et=new _(y,u);et.enableValidation();var nt=new _(y,s);nt.enableValidation(),f.addEventListener("click",(function(){Y.open();var t=tt.getUserInfo(),e=t.name,n=t.career;c.value=e,a.value=n,et.hiddenAllErrors()})),p.addEventListener("click",(function(){$.open(),nt.toggleButtonState()}));var rt=function(t,e){Z.open(t,e)};new D({popup:t,handleFormSubmit:function(t){X.patchUserInfo(t),tt.setUserInfo(t.name,t.career)}}).setEventListeners();var ot=function(t,e){var n=new m(t,e,rt,(function(){return ct(n)}),at,lt);return n.createCard()},it=new F({renderer:function(t){var e=ot(t,"#template-card");it.addItem(e)}},l);new D({popup:e,handleFormSubmit:function(t){X.postNewCard(t).then((function(t){var e=ot(t,"#template-card");it.addItem(e)})).catch((function(t){console.log(t)}))}}).setEventListeners(),X.getUserInfo().then((function(t){tt.setUserInfo(t.name,t.about)})).catch((function(t){console.log(t)})),X.getInitialCards().then((function(t){it.generateCard(t)})).catch((function(t){console.log(t)}));var ut=new W(r,(function(t){X.deleteCard(t._cardId).then((function(){t.deleteCard(),ut.close()})).catch((function(t){console.log(t)}))}));ut.setEventListeners();var ct=function(t){ut.open(),ut.getValues(t)},at=function(t,e){X.likeCard(t).then((function(t){e.textContent=t.likes.length})).catch((function(t){console.log(t)}))},lt=function(t,e){X.dislikeCard(t).then((function(t){e.textContent=t.likes.length})).catch((function(t){console.log(t)}))}})();
//# sourceMappingURL=main.js.map