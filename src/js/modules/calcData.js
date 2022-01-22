const clacData = (state) => {

    const balconImgs = document.querySelectorAll('.balcon_icons_img img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeigth = document.querySelectorAll('#height');
    const viewType = document.querySelectorAll('#view_type');
    const checkboxCustom = document.querySelectorAll('.checkbox');

    function mustBeNumber(inputArray) {
        inputArray.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            })
        });
    }

    mustBeNumber(windowWidth);
    mustBeNumber(windowHeigth);

    function sendWindowParamsToState(element, parametr, event) {
        element.forEach((item, i) => {
            item.addEventListener(event, (e) => {
                if (item.nodeName == 'IMG') {
                    state[parametr] = item.alt;
                } else if (item.nodeName == 'INPUT' && item.type != 'checkbox') {
                    state[parametr] = item.value;
                } else if (item.nodeName == 'SELECT') {
                    state[parametr] = item.value;
                } else if (item.nodeName == 'INPUT' && item.type === 'checkbox') {
                    element.forEach(el => el.checked = false);
                    item.checked = true;
                    state[parametr] = item.getAttribute('id');
                    i === 0 ? state[parametr] = 'cold' : state[parametr] = 'warm';
                }
                console.log(state);

            })
        })
    }

    sendWindowParamsToState(balconImgs, 'window', 'click');
    sendWindowParamsToState(windowWidth, 'width', 'input');
    sendWindowParamsToState(windowHeigth, 'heigth', 'input');
    sendWindowParamsToState(viewType, 'view type', 'click');
    sendWindowParamsToState(checkboxCustom, 'window type', 'click');



    /////Закончить с остеклением

}

export default clacData;