document.addEventListener('DOMContentLoaded', () => {
    let sliderCounter = 0
    const DURATION = 5000
    const targetHtmlElement = document.querySelector('.test')
    const slideMobile = document.createElement('div')

    slideMobile.id = '#slider-mobile'
    slideMobile.style.cssText = 'position: relative; overflow: hidden; width: 100%; height: 100%; min-height: 100px; display: flex; margin:0; padding:0; box-sizing: border-box; margin-bottom: .5rem; border-radius: 5px;'

    const slideItems = [
        { link: 'https://silinet.ru/assets/images/slider/mb202309_1_1.png', alt: 'connect-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_2_2.png', alt: 'setting-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_3_1_3.png', alt: 'first-mount-free' },
    ]

    const setItemSlider = (counter = 0) => {
        const childNodeSlider = slideMobile.firstChild
        const img = document.createElement('img')
        img.src = slideItems[counter]?.link
        img.alt = slideItems[counter]?.alt
        img.style.cssText = 'width: 100%; object-fit: cover; height: fit-content; max-height: 100px;'
        childNodeSlider
            ? slideMobile.replaceChild(img, childNodeSlider)
            : slideMobile.appendChild(img)
    }

    const changeItemSlider = () => {
        if (sliderCounter === slideItems.length - 1) {
            sliderCounter = 0
            setItemSlider(sliderCounter)
        } else {
            sliderCounter++
            setItemSlider(sliderCounter)
        }
    }

    setItemSlider()

    const loopSlider = setInterval(() => changeItemSlider(), DURATION)

    slideMobile.addEventListener('touchstart', () => {
        changeItemSlider()
        if (loopSlider) clearInterval(loopSlider)
    }
    )

    targetHtmlElement.prepend(slideMobile)

})
