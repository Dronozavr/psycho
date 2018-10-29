var burger = document.getElementById('menu-burger');
var menu_num1 = document.getElementById('nav--none');
menu_num1.style.display = 'none';
burger.onclick = function()
{
    var menu_num1 = document.getElementById('nav--none');
    if(menu_num1.style.display == 'none')
    {
        menu_num1.style.display = 'block';
        var span = document.getElementById('burger-span');
        span.className += ' header__burger-transform';
    }
    else
    {
        var menu_num1 = document.getElementById('nav--none');
        menu_num1.style.display = 'none';
        var span = document.getElementById('burger-span');
        span.className = 'header__burger';
    }
}
var path = window.location.pathname;
var page = path.split("/").pop();
if(page == 'index.html')
{
   var link = document.querySelector('.header__first-link');
   link.className += ' active';
   var link1 = document.querySelector('.header__second-link');
   link1.className += ' active';
}
else if(page == 'oferta.html')
{
   var link = document.querySelector('.header__first-link');
   link.className += ' active';
   var link1 = document.querySelector('.header__second-link');
   link1.className += ' active';
}

else if(page == 'cennik.html')
{
   var link = document.querySelector('.header__first-link');
   link.className += ' active';
   var link1 = document.querySelector('.header__second-link');
   link1.className += ' active';
 }
 else if(page == 'infotmation.html')
 {
    var link = document.querySelector('.header__first-link');
    link.className += ' active';
    var link1 = document.querySelector('.header__second-link');
    link1.className += ' active';
}
 else if(page == 'szkolenia.html')
{
    var link = document.querySelector('.header__first-link');
    link.className += ' active';
    var link1 = document.querySelector('.header__second-link');
    link1.className += ' active';
 }
