window.onscroll = function() {
    if (window.scrollY >= 30) {
        document.querySelectorAll('.child-1 button')[1].style.opacity = '1'
        document.querySelectorAll('.child-1 button')[1].style.marginRight = '0'
        document.querySelectorAll('.child-1 button')[0].style.marginLeft = '0'
        document.querySelectorAll('.child-1 button')[0].style.opacity = '1'
    }
    if (window.scrollY >= 15) {
        document.querySelectorAll('.child-1 p')[0].style.width = '1000'
        document.querySelectorAll('.child-1 p')[0].style.marginTop = '-10px'
        document.querySelectorAll('.child-1 p')[0].style.opacity = '0.8'
    }
    if (window.scrollY <= 20) {
        document.querySelectorAll('.child-1 button')[1].style.opacity = '0'
        document.querySelectorAll('.child-1 button')[1].style.marginRight = '-10%'
        document.querySelectorAll('.child-1 button')[0].style.marginLeft = '-10%'
        document.querySelectorAll('.child-1 button')[0].style.opacity = '0'
    }
    if (window.scrollY < 10) {
        document.querySelectorAll('.child-1 p')[0].style.opacity = '0.07'
        document.querySelectorAll('.child-1 p')[0].style.width = '500'
        document.querySelectorAll('.child-1 p')[0].style.marginTop = '-50px'
    }
    if (window.scrollY >= document.querySelector('.par-child-1').offsetTop - 180) {
        document.querySelector('.par-child-1 ').style.marginTop = '0';
        document.querySelector('.par-child-1 ').style.opacity = '0.8';
        document.querySelector('.par-child-1 ').style.marginTop = '0';
        document.querySelector('.par-child-1 ').style.opacity = '0.8';
        document.querySelector('.pr-ch-1 img ').style.marginRight = '-10%';
        document.querySelector('.pr-ch-1 img').style.opacity = '1';
        document.querySelectorAll('.pr-ch-1 .ss ')[0].style.marginLeft = '20%';
        document.querySelectorAll('.pr-ch-1 .ss')[0].style.opacity = '0.8';
        document.querySelectorAll('.pr-ch-1 .ss ')[1].style.marginLeft = '20%';
        document.querySelectorAll('.pr-ch-1 .ss')[1].style.opacity = '0.8';
    }
    if (window.scrollY < document.querySelector('.par-child-1').offsetTop - 240) {
        document.querySelector('.par-child-1 ').style.marginTop = '-5%';
        document.querySelector('.par-child-1 ').style.opacity = '0';
        document.querySelector('.par-child-1 ').style.opacity = '0';
        document.querySelector('.pr-ch-1 img ').style.marginRight = '-20%';
        document.querySelector('.pr-ch-1 img').style.opacity = '0';
        document.querySelectorAll('.pr-ch-1 .ss ')[0].style.marginLeft = '-20%';
        document.querySelectorAll('.pr-ch-1 .ss')[0].style.opacity = '0';
        document.querySelectorAll('.pr-ch-1 .ss ')[1].style.marginLeft = '-20%';
        document.querySelectorAll('.pr-ch-1 .ss')[1].style.opacity = '0';
    }
    if (window.scrollY >= document.querySelector('.par-3').offsetTop - 600) {
        document.querySelector('.par-3').style.marginTop = '-20px';
        document.querySelector('.par-3 div').style.marginRight = '-600px';
        document.querySelector('.par-3').style.opacity = '1';
    }
    if (window.scrollY < document.querySelector('.par-3').offsetTop - 600) {
        document.querySelector('.par-3').style.marginTop = '100px';
        document.querySelector('.par-3').style.opacity = '0';
        document.querySelector('.par-3 div').style.marginRight = '-2000px';
    }
    if (window.scrollY >= document.querySelector('.par-4').offsetTop - 300) {
        document.querySelector('.par-4').style.marginLeft = '0%';
        document.querySelector('.par-4').style.opacity = '1';
    }
    if (window.scrollY < document.querySelector('.par-4').offsetTop - 200) {
        document.querySelector('.par-4').style.marginLeft = '-50%';
        document.querySelector('.par-4').style.opacity = '0';
    }
    if (window.scrollY >= document.querySelector('footer').offsetTop - 700) {
        document.querySelector('footer').style.opacity = '1';
        document.querySelector('footer').style.marginTop = '0px';

    }
    if (window.scrollY < document.querySelector('footer').offsetTop - 600) {
        document.querySelector('footer').style.opacity = '0';
        document.querySelector('footer').style.marginTop = '100px';

    }
}