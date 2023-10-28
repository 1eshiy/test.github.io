// Константы
if (localStorage.getItem('english') === null) { localStorage.setItem('english', 'false') }

const containers = document.querySelectorAll('.container')
const header = document.querySelector('header')
const navbar = document.querySelector('.navbar')
const title = document.querySelector('title')

const getStartedBtn = document.getElementById('getStartedBtn')
const fullscreenBtn = document.getElementById('videoBtn')

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

let languageBtn = document.getElementById('languageBtn')
let placesBtn = document.getElementById('placesBtn')
let aboutUsBtn = document.getElementById('aboutUsBtn')
let feedbackBtn = document.getElementById('feedbackBtn')
const getStartedRu = getStartedBtn.textContent
const fullscreenRu = fullscreenBtn.textContent

const p1Ru = p1.textContent
const p2Ru = p2.textContent
const p3Ru = p3.textContent

const videoContainer = document.getElementById('videoContainer')
const video = document.getElementById('tutorialVideo')

// Константы

// Функции

function changeLanguage() {
    languageBtn = document.getElementById('languageBtn')
    placesBtn = document.getElementById('placesBtn')
    aboutUsBtn = document.getElementById('aboutUsBtn')
    feedbackBtn = document.getElementById('feedbackBtn')
    if (localStorage.getItem('english') != 'true') {
        localStorage.setItem('english', 'true')

        title.textContent = 'KrasGid | About us'
        placesBtn.textContent = 'Places'
        aboutUsBtn.textContent = 'About Us'
        feedbackBtn.textContent = 'Feedback'
        languageBtn.innerHTML = `<span id="span">Русский</span>
    <img id="headerIcon" src="images/ru-icon.png" alt="russian language icon">`
        getStartedBtn.textContent = 'Get started!'
        fullscreenBtn.textContent = 'fullscreen mode'
        fullscreenBtn.style.left = 'calc(130px + 320 * ((100vw - 500px) / 1420))'

        p1.textContent = 'KrasGid is your personal assistant for exploring all the beauties of Krasnoyarsk.'
        p2.textContent = 'With the help of our service, you will be able to learn not only about the beautiful and interesting places of the city, but also about the ways to get there and the cost of the hike.'
        p3.textContent = 'On this page there is a guide video, after watching which, it will become a little easier for you to get used to the functionality of KrasGid!'
    }

    else {
        localStorage.setItem('english', 'false')

        title.textContent = 'KrasGid | О нас'
        placesBtn.textContent = 'Места'
        aboutUsBtn.textContent = 'О нас'
        feedbackBtn.textContent = "Обратная связь"
        languageBtn.innerHTML = `<span id="span">English</span>
        <img id="headerIcon" src="images/en-ico.png" alt="english language icon">`
        getStartedBtn.textContent = getStartedRu
        fullscreenBtn.textContent = fullscreenRu
        fullscreenBtn.style.left = 'calc(146px + 254 * ((100vw - 724px) / 1196))'

        p1.textContent = p1Ru
        p2.textContent = p2Ru
        p3.textContent = p3Ru
    }

    requestAnimationFrame(resizeNavBtn);
}

function resizeContainer() {
    const width = document.body.clientWidth

    containers.forEach(container => {
        container.style.width = `calc(80.56vw - 4vw * ((${width} - 724) / 1196))`
    })
}

function resizeNavBtn() {
    const width = document.body.clientWidth

    const languageBtn = document.getElementById('languageBtn')

    const textWidth = document.getElementById('span').offsetWidth
    const imgWidth = 12 + 7 * ((width - 724) / 1196)
    const marginLeft = 5.2 + 3.15 * ((width - 724) / 1196)

    const paddingLeft = window.getComputedStyle(languageBtn).getPropertyValue('padding-left')
    const padding = Number(paddingLeft.slice(0, paddingLeft.length - 2)) * 2

    const borderWidth = window.getComputedStyle(languageBtn).getPropertyValue('border-width')
    const border = Number(borderWidth.slice(0, borderWidth.length - 2))

    languageBtn.style.width = `${textWidth + imgWidth + marginLeft + padding + border}px`
}

function headerMargins() {
    document.body.clientWidth > 724 ? header.style.marginBottom = 'calc(127.422px + 50 * ((100vw - 724px) / 1196))' : header.style.marginBottom = 'calc(30px + 10 * ((100vw - 500px) / 223))'

    const height = window.innerHeight
    const headerMB = window.getComputedStyle(header).getPropertyValue('margin-bottom')

    if (document.body.clientWidth > 724) {
        var result = Number(headerMB.slice(0, headerMB.length - 2)) - 65 + 65 * (height - 680) / 400
    }
    else {
        var result = Number(headerMB.slice(0, headerMB.length - 2)) - 20 + 20 * (height - 680) / 400
    }

    result < 20 ? header.style.marginBottom = `20px` : header.style.marginBottom = `${result}px`

    if (document.body.clientWidth < 724) {
        const headerLogo = document.getElementById('headerLogo')
        headerLogo.style.marginBottom = 'calc(10px + 20 * ((100vw - 500px) / 223))'

        const headerLogoMB = window.getComputedStyle(headerLogo).getPropertyValue('margin-bottom')
        var result = Number(headerLogoMB.slice(0, headerLogoMB.length - 2)) - 20 + 20 * (height - 680) / 400

        result < 10 ? headerLogo.style.marginBottom = `10px` : headerLogo.style.marginBottom = `${result}px`

        const content = document.querySelector('.content')
        content.style.marginBottom = 'calc(30px + 13 * ((100vw - 500px) / 223))'

        const contentMB = window.getComputedStyle(content).getPropertyValue('margin-bottom')
        var result = Number(contentMB.slice(0, contentMB.length - 2)) - 5 + 5 * (height - 680) / 400

        result < 25 ? content.style.marginBottom = `25px` : content.style.marginBottom = `${result}px`
    }
}

function navDisplay() {
    const width = document.body.clientWidth

    if (width < 724) {
        if (languageBtn.textContent.includes('English')) {
            navbar.innerHTML = `
        <div class="nav-first">
            <a href="#" class="navLink no-select" id="placesBtn">Места</a>
            <a class="navLink navActive no-select" id="aboutUsBtn">О нас</a>
        </div>
        <div class="nav-second">
            <a href="feedback/feedback.html" class="navLink no-select" id="feedbackBtn">Обратная связь</a>
            <a class="navLink languageBtn no-select" id="languageBtn">
                <span id="span">English</span>
                <img id="headerIcon" src="images/en-ico.png" alt="english language icon">
            </a>
        </div>`}

        else {
            navbar.innerHTML = `
        <div class="nav-first">
            <a href="#" class="navLink no-select" id="placesBtn">Places</a>
            <a class="navLink navActive no-select" id="aboutUsBtn">About Us</a>
        </div>
        <div class="nav-second">
            <a href="feedback/feedback.html" class="navLink no-select" id="feedbackBtn">Feedback</a>
            <a class="navLink languageBtn no-select" id="languageBtn">
                <span id="span">Русский</span>
                <img id="headerIcon" src="images/ru-icon.png" alt="russian language icon">
            </a>
        </div>`
        }
    }

    else if (width >= 724) {
        if (languageBtn.textContent.includes('English')) {
            navbar.innerHTML = `
            <a href="#" class="navLink no-select" id="placesBtn">Места</a>
            <a class="navLink navActive no-select" id="aboutUsBtn">О нас</a>
            <a href="feedback/feedback.html" class="navLink no-select" id="feedbackBtn">Обратная связь</a>
            <a class="navLink languageBtn no-select" id="languageBtn">
                <span id="span">English</span>
                <img id="headerIcon" src="images/en-ico.png" alt="english language icon">
            </a>`
        }

        else {
            navbar.innerHTML = `
            <a href="#" class="navLink no-select" id="placesBtn">Places</a>
            <a class="navLink navActive no-select" id="aboutUsBtn">About us</a>
            <a href="feedback/feedback.html" class="navLink no-select" id="feedbackBtn">Feedback</a>
            <a class="navLink languageBtn no-select" id="languageBtn">
                <span id="span">Русский</span>
                <img id="headerIcon" src="images/ru-icon.png" alt="russian language icon">
            </a>`
        }
    }
}

function fscreenOff() {
    const height = window.innerHeight
    const width = document.body.clientWidth
    console.log('1')
    if ((window.getComputedStyle(fscreenBack).getPropertyValue('opacity') != 0) && (height < (337 + 504 * ((width - 724) / 1196)) || width < 724)) {
        console.log('2')
        fscreenBack.click()
    }
}

function fscreenReturn() {
    var css = `#videoContainer video:hover { opacity: 0.85; }`;
    var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    fscreenBack.removeAttribute('style')
    videoContainer.removeAttribute('style')
    fullscreenBtn.style.zIndex = '100'
    fullscreenBtn.style.opacity = '1'

    video.controls = ''
}

// Функции



// Код, выполняющийся при загрузке сайта

window.addEventListener('load', function () {
    resizeContainer()
    headerMargins()
    navDisplay()
    requestAnimationFrame(resizeNavBtn);
    if (localStorage.getItem('english') === 'true') {
        localStorage.setItem('english', 'false')
        changeLanguage()
    }
})

// Код, выполняющийся при загрузке сайта



// Отклик на действия пользователя

window.addEventListener('resize', function () {
    resizeContainer()
    headerMargins()
    requestAnimationFrame(resizeNavBtn);
    navDisplay()
    fscreenOff()
})

const parentElement = document.getElementById('header');
parentElement.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'languageBtn' || event.target && event.target.id === 'span' || event.target && event.target.id === 'headerIcon') {
        languageBtn = document.getElementById('languageBtn')
        placesBtn = document.getElementById('placesBtn')
        aboutUsBtn = document.getElementById('aboutUsBtn')
        feedbackBtn = document.getElementById('feedbackBtn')

        changeLanguage()
    }
});

videoContainer.addEventListener('click', function () {
    video.paused ? video.play() : video.pause()
})

const fscreenBack = document.getElementById('fscreenBack')
fullscreenBtn.addEventListener('click', function () {
    const height = window.innerHeight
    const width = document.body.clientWidth
    video.controls = 'controls'

    if (height < (337 + 504 * ((width - 724) / 1196)) || width < 724) {
        video.requestFullscreen();
    }

    else {
        var css = `#videoContainer video:hover { opacity: 1; }`;
        var style = document.createElement('style');
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        document.getElementsByTagName('head')[0].appendChild(style);

        fscreenBack.style.zIndex = '100'
        fscreenBack.style.opacity = '0.7'

        fullscreenBtn.style.opacity = '0'
        fullscreenBtn.style.zIndex = '-100'

        videoContainer.style.zIndex = '101'
        videoContainer.style.position = 'absolute'
        videoContainer.style.width = 'calc(600px + 896 * ((100vw - 724px) / 1196))'
        videoContainer.style.height = 'calc(337px + 504 * ((100vw - 724px) / 1196))'
        videoContainer.style.margin = 'auto'
        videoContainer.style.inset = '0'
        videoContainer.style.borderRadius = '30px'
        videoContainer.style.border = '5px solid black'
    }
})

document.addEventListener("keydown", (e) => {
    if ((e.code == "Escape") && (window.getComputedStyle(fscreenBack).getPropertyValue('opacity') != 0)) {
        fscreenReturn();
    }
});

fscreenBack.addEventListener('click', fscreenReturn)

video.addEventListener('fullscreenchange', function () {
    const height = window.innerHeight
    const width = document.body.clientWidth

    if ((!document.fullscreenElement) && (height < (337 + 504 * ((width - 724) / 1196)) || width < 724)) {
        video.controls = ''
    }
})

// Отклик на действия пользователя
