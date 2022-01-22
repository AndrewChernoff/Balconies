const timer = (timerId, deadline) => {
    const countDown = () => {
        const countDate = new Date('May 09, 2022 00:00:00').getTime();

        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        function addZero(number) {
            if (number < 10 && number > 0) {
                return '0' + number;
            } else {
                return number;
            }
        }
        addZero(textDay);
        addZero(textHour);
        addZero(textMinute);
        addZero(textSecond);

        document.querySelector('#days').innerText = addZero(textDay);
        document.querySelector('#hours').innerText = addZero(textHour);
        document.querySelector('#minutes').innerText = addZero(textMinute);
        document.querySelector('#seconds').innerText = addZero(textSecond);
    }
    countDown();

    setInterval(countDown, 1000);

}

export default timer;