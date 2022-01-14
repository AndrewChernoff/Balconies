const forms = () => {
    let form = document.querySelectorAll('form');
    let inputs = document.querySelectorAll('[name="user_phone"]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
        })
    })

    console.log(form);
    console.log('forms');

    const postData = async (url, data) => {
        let formData = new FormData(data);

        let obj = {};

        formData.forEach((value, key) => {
            obj[key] = value;
        })

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

            const message = {
                success: 'Скоро с вами свяжемся!',
                failure: 'Что- то пошло не так',
                loading: 'Загрузка...'
            }

            const formStatus = document.createElement('div');
            formStatus.style.color = 'red';
            formStatus.textContent = message.loading;

            formEl.appendChild(formStatus);

            postData('assets/server.php', formEl)
                .then(response => {
                    console.log(response);
                    formStatus.textContent = message.success;
                })
                .then(() => {
                    //setTimeout(() => formEl.reset(), 3000);
                    formEl.reset();
                    setTimeout(() => formStatus.remove(), 3000);
                }).catch(() => {
                    formStatus.textContent = message.failure;
                    setTimeout(() => formStatus.remove(), 5000);
                })

        })
    }

    form.forEach(el => sendFormData(el));

}


export default forms;