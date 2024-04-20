document.addEventListener('DOMContentLoaded', () => {
    let sliderCounter = 0
    const targetHtmlElement = document.querySelector('.test')
    const slideMobile = document.createElement('div')
    slideMobile.id = '#slider-mobile'
    slideMobile.style.cssText = 'position: relative; overflow: hidden; width: 100%; height: 100%; min-height: 100px; display: flex; margin:0; padding:0; box-sizing: border-box; margin-bottom: .5rem;'

    const nextSlide = document.createElement('button')
    const prevSlide = document.createElement('button')

    nextSlide.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
  </svg>`
    nextSlide.style.cssText = 'position: absolute; right: 10px; bottom: 10px; z-index: 2; opacity: .6; font-size: .65rem;'
    prevSlide.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
  </svg>`
    prevSlide.style.cssText = 'position: absolute; left: 10px;  bottom: 10px; z-index: 2; opacity: .6; font-size: .65rem;'

    const slideItems = [
        { link: 'https://silinet.ru/assets/images/slider/mb202309_1_1.png', alt: 'connect-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_2_2.png', alt: 'setting-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_3_1_3.png', alt: 'first-mount-free' },
        {link: 'https://avatars.mds.yandex.net/i?id=0a8dc1da8b47ac63e1b06dadc55e1a3f_l-5141109-images-thumbs&n=27&h=480&w=480', alt:'4444'},
        {link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBC7mjvM5ScpKdw_anvVZ7ptcF7gEjF8NWV4p2pZdubQ&s', alt: '3333'}
    ]


    const test = ''

    const setItemSlider = (counter = 0) => {
        slideMobile.innerHTML = ''
        const img = document.createElement('img')
        img.src = slideItems[counter]?.link
        img.alt = slideItems[counter]?.alt
        img.style.cssText = 'width: 100%; object-fit: cover; height: fit-content; max-height: 100px;'
        slideMobile.append(nextSlide, img, prevSlide)
    }

    const changeItemSlider = (direction) => {
        if (direction === '-') {
            if (sliderCounter === 0) sliderCounter = slideItems.length;
            sliderCounter--
            setItemSlider(sliderCounter)
        } else if (direction === '+') {
            if (sliderCounter === slideItems.length - 1) {
                sliderCounter = 0
                setItemSlider(sliderCounter)
            } else {
                sliderCounter++
                setItemSlider(sliderCounter)
            }

        }

    }

    setItemSlider()
    prevSlide.onclick = () => changeItemSlider('-')
    nextSlide.onclick = () => changeItemSlider('+')
    targetHtmlElement.prepend(slideMobile)

})
