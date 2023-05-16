function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function carConteudo(){
    document.getElementById("imagem").innerHTML = "<a href='https://www.n1glovesbrasil.com.br/' > <img src='img/logo n1.png' width='50px' >  <a href='https://www.adidas.com.br//'> <img src='img/logo-adidas-2022-pb-051.webp' width='50px'>"
}

