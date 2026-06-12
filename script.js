window.addEventListener('scroll', function() {
    const banner = document.getElementById('banner-topo');
    const alturaBanner = banner.offsetHeight;
    let rolagem = window.scrollY;

    let opacidade = 1 - (rolagem / alturaBanner);

    if (opacidade > 0) {
        banner.style.visibility = 'visible';
        banner.style.opacity = opacidade;
        banner.style.pointerEvents = 'auto';
    } else {
        banner.style.opacity = '0';
        banner.style.visibility = 'hidden';
        banner.style.pointerEvents = 'none';
    }
});