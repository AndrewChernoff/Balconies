function modal() {

    function modalWindow(triggerSelector, modalSelector) {
        const trigger = document.querySelector(triggerSelector);
        const modalWindow = document.querySelector(modalSelector);

        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            modalWindow.style.display = 'block';
            document.body.style.overflow = 'hidden'
        });

        modalWindow.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.className === modalSelector.slice(1) || e.target.outerHTML === '<strong>×</strong>') {
                modalWindow.style.display = 'none';
                document.body.style.overflow = '';
            }
        })
    }

    modalWindow('.popup_engineer_btn', '.popup_engineer');
    modalWindow('.phone_link', '.popup');
    modalWindow('.feedback .phone_link', '.popup');

    function showModalByTime(selector) {
        setTimeout(function () {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, 5000)
    }

    //showModalByTime('.popup');



}

export default modal;