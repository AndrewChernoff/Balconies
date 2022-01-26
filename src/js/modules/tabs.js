const tabs = (contentSelector, linkSelector, contentBlockSelector, activeClassName) => {
    const content = document.querySelectorAll(contentSelector);
    const link = document.querySelectorAll(linkSelector);
    const rows = document.querySelectorAll(contentBlockSelector);

    rows.forEach(row => row.classList.add('faded'));

    /// Content
    function hideRows() {
        rows.forEach(row => row.style.display = 'none');
    }

    function showRow(i = 0) {
        rows[i].style.display = 'block';
    }

    hideRows();
    showRow();

    ///Links
    link[0].classList.add(activeClassName);

    content.forEach((el, i) => {
        el.addEventListener('click', (e) => {
            link.forEach(el => el.classList.remove(activeClassName));
            link[i].classList.add(activeClassName);
            hideRows();
            showRow(i);
        })
    });
}

export default tabs;