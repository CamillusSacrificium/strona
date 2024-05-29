let banner = document.querySelector('header');
let wysokosc = 0;

window.addEventListener('load', function(){
    wysokosc=banner.offsetWidth/4.37
    wysokosc=Math.floor(wysokosc);
    banner.style.height=wysokosc+"px";
});

window.addEventListener('resize', function(){
    wysokosc=banner.offsetWidth/4.37
    wysokosc=Math.floor(wysokosc);
    banner.style.height=wysokosc+"px";
});