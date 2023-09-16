//Menu Reponsive//
let iconList = document.getElementById('icon-list');
let navBar = document.getElementById('navbar');
iconList.onclick = () => {
    iconList.classList.toggle('bi-x');
    navBar.classList.toggle('open');
}