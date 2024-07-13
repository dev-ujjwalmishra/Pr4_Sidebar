const openSidebar = document.querySelector('.open-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');


openSidebar.addEventListener('click',() => {
    document.querySelector('.sidebar').style.transform = 'translateX(0)';
    openSidebar.style.display = 'none';
    closeSidebar.style.display = 'inline-block';
});

closeSidebar.addEventListener('click',() => {
    document.querySelector('.sidebar').style.transform = 'translateX(-355px)';
    setTimeout(() => {
        openSidebar.style.display = 'inline-block';
    }, 400);
    closeSidebar.style.display = 'none';
});