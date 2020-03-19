let darkMode = document.getElementById("toggler");

darkMode.onclick = function(){
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
}
}