import { getScrollBarWidth } from "./getScrollBarWidth";

const modal = () => {

    function modalWindow(triggerSelector, modalSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modalWindow = document.querySelector(modalSelector);
        const windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => window.style.display = 'none');

                modalWindow.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = getScrollBarWidth();
            });
        })

        modalWindow.addEventListener('click', (e) => {
            if (e.target.className === modalSelector.slice(1) || e.target.outerHTML === '<strong>×</strong>') {
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }
        })
    }

    modalWindow('.popup_engineer_btn', '.popup_engineer');
    modalWindow('.phone_link', '.popup');
    modalWindow('.feedback .phone_link', '.popup');
    modalWindow('.popup_calc_btn', '.popup_calc');
    modalWindow('button.popup_calc_button', '.popup_calc_profile ');

    modalWindow('.popup_calc_profile_button', '.popup');

    function showModalByTime(selector) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, 5000)
    }

    //showModalByTime('.popup');

}

export default modal;