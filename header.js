let product = document.getElementById('product')
let Company = document.getElementById('Company')
let Connect = document.getElementById('Connect')
let fmenu = document.querySelector('.menu-1')
let smenu = document.querySelector('.menu-2')
let tmenu = document.querySelector('.menu-3')


product.onclick = function() {
    if (product.className === 'notactive') {
        product.className = 'active'
        Connect.className = 'notactive'
        Company.className = 'notactive'
        fmenu.style.display = 'flex'
        smenu.style.opacity = '0'
        tmenu.style.opacity = '0'
        setTimeout(() => {
            fmenu.style.opacity = '1'
        }, 100);
        setTimeout(() => {
            smenu.style.display = 'none'
            tmenu.style.display = 'none'
        }, 500);
    } else if (product.className === 'active') {
        product.className = 'notactive'
        fmenu.style.opacity = '0'
        smenu.style.opacity = '0'
        tmenu.style.opacity = '0'
        setTimeout(() => {

            fmenu.style.display = 'none'
            smenu.style.display = 'none'
            tmenu.style.display = 'none'
        }, 500);
    }
}
Company.onclick = function() {
    if (Company.className === 'notactive') {
        Company.className = 'active'
        product.className = 'notactive'
        Connect.className = 'notactive'
        smenu.style.display = 'flex'
        tmenu.style.opacity = '0'
        fmenu.style.opacity = '0'
        setTimeout(() => {
            smenu.style.opacity = '1'
        }, 100);
        setTimeout(() => {
            fmenu.style.display = 'none'
            tmenu.style.display = 'none'
        }, 300);
    } else if (Company.className === 'active') {
        Company.className = 'notactive'
        fmenu.style.opacity = '0'
        smenu.style.opacity = '0'
        tmenu.style.opacity = '0'
        setTimeout(() => {

            fmenu.style.display = 'none'
            smenu.style.display = 'none'
            tmenu.style.display = 'none'
        }, 500);
    }
}
Connect.onclick = function() {
    if (Connect.className === 'notactive') {
        Connect.className = 'active'
        product.className = 'notactive'
        Company.className = 'notactive'
        fmenu.style.opacity = '0'
        smenu.style.opacity = '0'
        tmenu.style.display = 'flex'
        setTimeout(() => {
            tmenu.style.opacity = '1'
        }, 100);
        setTimeout(() => {
            fmenu.style.display = 'none'
            smenu.style.display = 'none'
        }, 500);
    } else if (Connect.className === 'active') {
        Connect.className = 'notactive'
        fmenu.style.opacity = '0'
        smenu.style.opacity = '0'
        tmenu.style.opacity = '0'
        setTimeout(() => {
            fmenu.style.display = 'none'
            smenu.style.display = 'none'
            tmenu.style.display = 'none'
        }, 500);
    }
}

let sign = document.querySelector('.signn')
sign.onclick = function() {
    document.querySelector('.sign').style.transform = 'translateX(0px)'
    document.body.style.overflow = 'hidden'
}
document.querySelector('.closesign').onclick = function() {
    document.querySelector('.sign').style.transform = 'translateX(100%)'
    document.body.style.overflowY = 'visible'

}

let line = document.querySelector(".line")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let namee = document.querySelector('.name')
let email = document.querySelector('.email')
let pass = document.querySelector('.pass')

let line4 = document.querySelector(".logmeun .line")
let line5 = document.querySelector(".logmeun .line2")
let namelog = document.querySelector('.namelog')
let passlog = document.querySelector('.passlog')

namee.oninput = function() {
    if (line.style.width < '65.34%' || this.value.length < 20) {
        let nxd = this.value.length * 100
        line.style.width = `${ nxd / 46}%`
        line.style.background = 'indianred'
        namee.style.background = 'white'
        namee.style.color = 'indianred'
    }
    if (this.value.length >= '30') {
        line.style.background = 'red'
        line.style.width = '65.34%'
        this.style.marginLeft = '-2%'
        this.style.background = 'red'
        setTimeout(() => {
            this.style.marginLeft = '3%'
        }, 300);
        setTimeout(() => {
            this.style.marginLeft = '0%'
            this.style.background = 'white'
        }, 600);
    }
}

email.oninput = function() {
    if (line2.style.width < '65.34%' || this.value.length < 20) {
        let nxd = this.value.length * 100
        line2.style.width = `${ nxd / 45.91368227731864}%`
        line2.style.background = 'indianred'
        email.style.background = 'white'
        email.style.color = 'indianred'
    }
    if (this.value.length >= '30') {
        line2.style.width = '65.34%'
    }
}

pass.oninput = function() {
    if (line3.style.width < '65.34%' || this.value.length < 20) {
        let nxd = this.value.length * 100
        line3.style.width = `${ nxd / 45.91368227731864}%`
        line3.style.background = 'indianred'
        pass.style.background = 'white'
        pass.style.color = 'indianred'
    }
    if (this.value.length >= '30') {
        line3.style.width = '65.34%'
        line3.style.background = 'red'
        this.style.marginLeft = '-2%'
        this.style.background = 'red'
        setTimeout(() => {
            this.style.marginLeft = '3%'
        }, 300);
        setTimeout(() => {
            this.style.marginLeft = '0%'
            this.style.background = 'white'
        }, 600);
    }
}


document.querySelector('.sign button').onclick = function(e) {
    let submitt = false
    if (namee.value.length !== 0 && email.value.length !== 0 && pass.value.length !== 0) {
        return submitt = true
    }
    if (namee.value.length === 0 || namee.value.length <= 5) {
        namee.style.background = 'red'
        namee.style.marginLeft = '-2%'
        setTimeout(() => {
            namee.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            namee.style.marginLeft = '0%'
            namee.style.background = 'white'
        }, 200);
    }
    if (namee.value.length >= 1 && namee.value.length <= 5) {
        namee.value = ''
        namee.placeholder = 'try enter valid user'
        namee.style.background = 'red'
        namee.style.marginLeft = '-2%'
        setTimeout(() => {
            namee.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            namee.style.marginLeft = '0%'
            namee.style.background = 'white'
        }, 200);
    }
    if (pass.value.length === 0) {
        pass.style.background = 'red'
        pass.style.marginLeft = '-2%'
        setTimeout(() => {
            pass.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            pass.style.marginLeft = '0%'
            pass.style.background = 'white'
        }, 200);
    }
    if (pass.value.length > 0 && pass.value.length < 8) {
        pass.style.background = 'red'
        pass.style.marginLeft = '-2%'
        pass.value = ''
        pass.placeholder = 'try enter other pass'
        setTimeout(() => {
            pass.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            pass.style.marginLeft = '0%'
            pass.style.background = 'white'
        }, 200);
    }
    if (email.value.length === 0) {
        email.style.background = 'red'
        email.style.marginLeft = '-2%'
        setTimeout(() => {
            email.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            email.style.marginLeft = '0%'
            email.style.background = 'white'
        }, 200);
    }
    if (submitt === false) {
        e.preventDefault()
    }
}

document.querySelector('.log').onclick = function() {
    document.querySelector('.logmeun').style.transform = 'translateX(0px)'
    document.body.style.overflow = 'hidden'
}
document.querySelector('.closelog').onclick = function() {
    document.querySelector('.logmeun').style.transform = 'translateX(100%)'
    document.body.style.overflowY = 'visible'
}

namelog.oninput = function() {
    if (namelog.value.length !== 0) {
        line4.style.width = '299px'
    } else {
        line4.style.width = '1px'
    }
}

passlog.oninput = function() {
    if (passlog.value.length !== 0) {
        line5.style.width = '299px'
    } else {
        line5.style.width = '1px'
    }
}

namelog.onblur = function() {
    if (namelog.value.length === 0) {
        line4.style.width = '1px'
    }
}
passlog.onblur = function() {
    if (passlog.value.length === 0) {
        line5.style.width = '1px'
    }
}
document.querySelector('.logmeun button').onclick = function(e) {
    let submitt = false
    if (namelog.value.length !== 0 && passlog.value.length !== 0) {
        return submitt = true
    }
    if (namelog.value.length === 0) {
        namelog.value = ''
        namelog.placeholder = 'try enter your user'
        namelog.style.background = 'red'
        namelog.style.marginLeft = '-2%'
        setTimeout(() => {
            namelog.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            namelog.style.marginLeft = '0%'
            namelog.style.background = 'white'
        }, 200);
    }
    if (namelog.value.length >= 1 && namelog.value.length <= 5) {
        namelog.value = ''
        namelog.placeholder = 'try enter correct user or email'
        namelog.style.background = 'red'
        namelog.style.marginLeft = '-2%'
        setTimeout(() => {
            namelog.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            namelog.style.marginLeft = '0%'
            namelog.style.background = 'white'
        }, 200);
    }
    if (passlog.value.length === 0) {
        passlog.value = ''
        passlog.placeholder = 'try enter your pass'
        passlog.style.background = 'red'
        passlog.style.marginLeft = '-2%'
        setTimeout(() => {
            passlog.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            passlog.style.marginLeft = '0%'
            passlog.style.background = 'white'
        }, 200);
    }
    if (passlog.value.length > 0 && passlog.value.length < 8) {
        passlog.style.background = 'red'
        passlog.style.marginLeft = '-2%'
        passlog.value = ''
        passlog.placeholder = 'try enter correct pass'
        setTimeout(() => {
            pass.style.marginLeft = '3%'
        }, 100);
        setTimeout(() => {
            pass.style.marginLeft = '0%'
            pass.style.background = 'white'
        }, 200);
    }
    if (submitt === false) {
        e.preventDefault()
    }
}

document.querySelector('.child-1 .btn1').onclick = function() {
    document.querySelector('.msg').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('.msg').style.bottom = '10px'
        document.querySelector('.msg').style.left = '20px'
    }, 100);
}
document.querySelector('.btn2').onclick = function() {
    window.scrollTo({
        left: 0,
        top: document.querySelector('.par-child-1').offsetTop + 15,
        behavior: "smooth"
    })
}

document.querySelector('.btnmsg').onclick = function() {
    document.querySelector('.logmeun').style.transform = 'translateX(0px)'
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
        document.querySelector('.msg').style.bottom = '-300px'
        document.querySelector('.msg').style.left = '-400px'
    }, 100);
    setTimeout(() => {
        document.querySelector('.msg').style.display = 'none'
    }, 1500);
}