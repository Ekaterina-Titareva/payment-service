document.addEventListener('DOMContentLoaded', function() {
    const headerMain = document.querySelector('.header__main');
    const scrollThreshold = 38;
    
    const cookiesBlock = document.querySelector('.cookies');

    const cookiesAcceptButton = document.querySelector('.cookies__buttons .button--primary');
    const cookiesDeclineButton = document.querySelector('.cookies__buttons .button--secondary');
    const cookiesCrossButton = document.querySelector('.button--cross');
    
    const navigationBlock = document.querySelector('.nav-wrapper');
    const burgerMenuButton = document.querySelector('.button--burger');
    
    const form = document.forms[0];
    
    const successAcceptButton = document.querySelector('.success .button--primary');
    const formCrossButton = document.querySelector('.form-wrapper .button--cross');
    const successCrossButton = document.querySelector('.success .button--cross');
    const navigationCrossButton = document.querySelector('.nav-wrapper .button--cross');
    const navigationButton = document.querySelector('.nav-wrapper .button--primary');
    const headerButton = document.querySelector('.header .button--primary');
    const aboutButton = document.querySelector('.about .button--primary');
    const businessGrowthButton = document.querySelector('.business-growth .button--primary');
    const footerButton = document.querySelector('.footer .button--primary');
    
    const nameInput = document.getElementById('inputName');
    const emailInput = document.getElementById('inputEmail');
    const phoneInput = document.getElementById('inputPhone');
    const phoneBlock = form.querySelector('.form__phone')

    const flag = document.querySelector('.form__phone-icon');
    
    const submitButton = form.querySelector('button[type="submit"]');
    
    const formError = form.querySelector('.form__error-all')
    const errorName = form.querySelector('.error-name');
    const errorEmail = form.querySelector('.error-email');
    const errorPhone = form.querySelector('.error-phone');
    
    const formBlock = document.querySelector('.form-wrapper');
    const successBlock = document.querySelector('.success');
    const popupWrapper = document.querySelector('.popup-wrapper');
    
    let hasError = {
        name: false,
        email: false,
        phone: false
    };
    


    function hideCookies() {
        cookiesBlock.classList.add('cookies--hide');
    }

    function openForm() {
        popupWrapper.classList.add('popup-wrapper-show');
        formBlock.classList.add('form--open');
    }
    function closeForm() {
        formBlock.classList.remove('form--open');
        popupWrapper.classList.remove('popup-wrapper-show');
    }
    function showSuccess() {
        popupWrapper.classList.add('popup-wrapper-show');
        successBlock.classList.add('success--show');
    }
    function hideSuccess() {
        successBlock.classList.remove('success--show');
        popupWrapper.classList.remove('popup-wrapper-show');
    }
    function openNavigation() {
        navigationBlock.classList.add('nav--open');
    }
    function closeNavigation() {
        navigationBlock.classList.remove('nav--open');
    }
    
    function handleNavigationButtonClick () {
        closeNavigation();
        openForm();
    }

    function handleCrossFormButtonClick () {
    closeForm();
    form.reset();

    errorName.style.display = 'none';
    errorEmail.style.display = 'none';
    errorPhone.style.display = 'none';
    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    phoneBlock.classList.remove('input-error');

    hasError.name = false;
    hasError.email = false;
    hasError.phone = false;

    submitButton.disabled = true;
    formError.style.display = "none";
    }

    function phoneCountryCheck() {
        if (phoneInput.value.startsWith("+7") || phoneInput.value.startsWith("8")) {
            flag.style.visibility = "visible";
        } else {
            flag.style.visibility = "hidden";
        }
    }

    function validateForm() {

        if (nameInput.value.trim() === "") {
            errorName.textContent = "This field is required.";
            errorName.style.display = 'inline';
            nameInput.classList.add('input-error');
            hasError.name = true;
        } else {
            errorName.style.display = 'none';
            nameInput.classList.remove('input-error');
            hasError.name = false;
        }

        if (emailInput.value.trim() === "") {
            errorEmail.textContent = "This field is required.";
            errorEmail.style.display = 'inline';
            emailInput.classList.add('input-error');
            hasError.email = true;
        } else {
            errorEmail.style.display = 'none';
            emailInput.classList.remove('input-error');
            hasError.email = false;
        }

        const phoneValue = phoneInput.value.trim();
        const phoneRegex = /^\+7\d{10}$/;

        if (phoneValue === "") {
            errorPhone.textContent = "This field is required.";
            errorPhone.style.display = 'inline';
            phoneBlock.classList.add('input-error');
            hasError.phone = true;
        } else if (!phoneRegex.test(phoneValue)) {
            errorPhone.textContent = "Invalid phone number.";
            errorPhone.style.display = 'inline';
            phoneBlock.classList.add('input-error');
            hasError.phone = true;
        } else {
            errorPhone.style.display = 'none';
            phoneBlock.classList.remove('input-error');
            hasError.phone = false;
        }

        if (!hasError.name && !hasError.email && !hasError.phone) {
            submitButton.disabled = false;
            formError.style.display = "none"
        } else {
            submitButton.disabled = true;
            formError.style.display = "block"
        }
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            headerMain.classList.add('fixed-menu');
        } else {
            headerMain.classList.remove('fixed-menu');
        }
    });
    

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();

        if (hasError.name || hasError.email || hasError.phone) {
            return;
        }

        closeForm();
        showSuccess();
        form.reset();
    });

    inputPhone.addEventListener("input", phoneCountryCheck);

    cookiesAcceptButton.addEventListener('click', hideCookies);
    cookiesDeclineButton.addEventListener('click', hideCookies);
    cookiesCrossButton.addEventListener('click', hideCookies);

    navigationButton.addEventListener('click', handleNavigationButtonClick);
    headerButton.addEventListener('click', openForm);
    aboutButton.addEventListener('click', openForm);
    businessGrowthButton.addEventListener('click', openForm);
    footerButton.addEventListener('click', openForm);
    formCrossButton.addEventListener('click', handleCrossFormButtonClick);
    successAcceptButton.addEventListener('click', hideSuccess);
    successCrossButton.addEventListener('click', hideSuccess);

    burgerMenuButton.addEventListener('click', openNavigation);
    navigationCrossButton.addEventListener('click', closeNavigation);

});