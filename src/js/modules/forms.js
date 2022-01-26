const forms = (state) => {
    let form = document.querySelectorAll('form');
    let inputs = document.querySelectorAll('[name="user_phone"]');
    let width = document.querySelector('#width');
    let height = document.querySelector('#height');
    const continueBtn = document.querySelector('.popup_calc .popup_calc_button');

    console.log(continueBtn)


    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        })
    })

    console.log(form);
    console.log('forms');

    const postData = async (url, obj) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return response.text();
    }

    let sendFormData = (formEl) => {
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(formEl);

            let obj = {};

            if (formEl.getAttribute('data-calc') === 'end') {
                for (let property in state) {
                    formData.append(property, state[property]);
                }

                width.value = '';
                height.value = '';
            }

            formData.forEach((value, key) => {
                obj[key] = value;
            })


            const message = {
                success: 'Скоро с вами свяжемся!',
                failure: 'Что- то пошло не так',
                loading: 'Загрузка...'
            }

            const formStatus = document.createElement('div');
            formStatus.style.color = 'red';
            formStatus.textContent = message.loading;

            formEl.appendChild(formStatus);

            postData('assets/server.php', obj)
                .then(response => {
                    console.log(response);
                    formStatus.textContent = message.success;
                })
                .then(() => {
                    //setTimeout(() => formEl.reset(), 3000);
                    formEl.reset();
                    setTimeout(() => {
                        formStatus.remove();
                        if (formEl.getAttribute('data-calc') === 'end') {
                            console.log(state);

                            for (const prop of Object.getOwnPropertyNames(state)) {
                                delete state[prop];
                            }
                            console.log(state);
                        }

                        document.querySelectorAll('[data-modal]').forEach(el => {
                            if (el.style.display === 'block') {
                                el.style.display = 'none';
                                document.body.style.overflow = '';
                                document.body.style.marginRight = '0px';///
                            }
                        })
                    }, 3000);

                }).catch(() => {
                    formStatus.textContent = message.failure;
                    setTimeout(() => formStatus.remove(), 5000);
                })

        })
    }

    form.forEach(el => sendFormData(el));

}


export default forms;