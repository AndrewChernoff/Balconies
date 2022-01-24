const images = () => {
    const imgs = document.querySelectorAll('.preview');
    const popupImgs = document.createElement('div');
    const popupImgContent = document.createElement('div');
    const bigImg = document.createElement('img');
    const popUpContent = document.createElement('div');



    popupImgs.classList.add('popup', 'big_img_popup');
    document.body.appendChild(popupImgs);

    popupImgContent.classList.add('popup_content');

    popupImgs.appendChild(popUpContent);
    popUpContent.appendChild(bigImg);

    popUpContent.style.display = 'flex';
    popUpContent.style.justifyContent = 'center';
    popUpContent.style.alignItems = 'center';

    bigImg.style.cssText = `
        position: fixed;
        top: 10%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 450px;
        `;

    console.log(bigImg)

    imgs.forEach((img) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            popupImgs.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let path = e.target.parentElement;
            bigImg.src = path.getAttribute('href');
        })
    })

    document.querySelector('.big_img_popup').addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('popup')) {
            popupImgs.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

    /*    const imgs = document.querySelectorAll('.preview');

    const popupImgs = document.createElement('div');
    popupImgs.classList.add('popup', 'big_img_popup');
    document.body.appendChild(popupImgs);

    const popupImgContent = document.createElement('div');
    popupImgContent.classList.add('popup_content');

    let bigImg = document.createElement('img');
    const popUpContent = document.createElement('div');
    popupImgs.appendChild(popUpContent);
    popUpContent.appendChild(bigImg);

    popUpContent.style.display = 'flex';
    popUpContent.style.justifyContent = 'center';
    popUpContent.style.alignItems = 'center';

    bigImg.style.cssText = `
        position: fixed;
        top: 10%;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        max-width: 450px;
        `;

    console.log(bigImg)

    imgs.forEach((img, i) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            popupImgs.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let path = e.target.parentElement;
            bigImg.src = path.getAttribute('href');
            //console.log(i);
        })
    })

    document.querySelector('.big_img_popup').addEventListener('click', (e) => {
        if (e.target) {
            popupImgs.style.display = 'none';
            document.body.style.overflow = '';
        }
    }) */

}
export default images;