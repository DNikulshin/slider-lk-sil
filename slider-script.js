document.addEventListener('DOMContentLoaded', () => {
    const slideItems = [
        { link: 'https://silinet.ru/assets/images/slider/mb202309_1_1.png', alt: 'connect-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_2_2.png', alt: 'setting-free' },
        { link: 'https://silinet.ru/assets/images/slider/mb202309_3_1_3.png', alt: 'first-mount-free' },
        { link: 'https://avatars.mds.yandex.net/i?id=410557de4e75d41af00bb51be828290b_l-4620768-images-thumbs&n=27&h=480&w=480', alt: 'other' }

    ]

    const targetHtmlElement = document.querySelector('.test') //=============== точка входа.
    const targetHtmlElementTest = document.querySelector('.test2')

    let sliderCounter = 0
    const DURATION = 5000
    const circles = []

    const slideMobile = document.createElement('div')
    const indicator = document.createElement('div')

    slideMobile.classList.add = 'slider-mobile'
    // indicator.classList.add = 'slider-mobile-indicator'
    slideMobile.style.cssText = 'position: relative; overflow: hidden; width: 100%; height: 100%; min-height: 100px; display: flex; margin:0; padding:0; box-sizing: border-box; margin-bottom: .5rem; border-radius: 5px;'
    indicator.style.cssText = 'position: absolute; bottom: 10px; display: flex; gap: .5rem; justify-content: center; align-items: center; width: 100%;'


    // const templateSliderCircle = ({ bgcolor, array }) => {
    //     const span = `<span style="width: 0.75rem; height: 0.75rem; background: ${bgcolor}; border-radius: 50%; opacity: 0.8; box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 2px 3px;">
    // </span>`
    //     array.map((el, idx) => {
    //         return {
    //             link: el.link,
    //             index: idx,
    //             сircle: span
    //         }
    //     })

    // }
//     const templateHtml = ({ color, array}) => {
//       return array.map((el, idx) => {
//             return {
//                 link: `<img src=${el.link} alt=${el.alt} style="width: 100%; object-fit: cover; height: fit-content; max-height: 100px;"></img>`,
//                 index: idx,
//                 сircle: `<span style="width: 0.75rem; height: 0.75rem; background: ${color}; border-radius: 50%; opacity: 0.8; box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 2px 3px;"></span>`
//             }
//         })

//     }


//   const test =  templateHtml({color :'gray', array: slideItems})
//   targetHtmlElementTest.append(slideMobile)

    // return    array.map((el, idx) => {
    //     return {
    //         link: el.link,
    //         index: idx,
    //         сircle: `<span style="width: 0.75rem; height: 0.75rem; background: ${color}; border-radius: 50%; opacity: 0.8; box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 2px 3px;"></span>`
    //     }
    // })  }


    const createindicatirCircles = () => {
        for (let i = 0; i < slideItems.length; i++) {
            const circle = document.createElement('span')
            // circle.classList.add('slider-mobile-circle')
            // circle.id = `slider-mobile-circle_${i}`
            circle.style.cssText = 'width: .75rem; height: .75rem; background: gray; border-radius: 50%; opacity: .7; box-shadow: 0 0 2px 3px rgba(255, 255,255, .5);'
            circles.push(circle)
        }
    }


    targetHtmlElementTest.ap
    // const allCircles = document.querySelectorAll('.slider-mobile-circle')
    // allCircles.forEach(el => {
    //     el.style.cssText = 'width: .75rem; height: .75rem; background: gray;border-radius: 50%; opacity: .7; box-shadow: 0 0 2px 3px rgba(255, 255,255, .5);'
    // })

    const setItemSlider = (counter = 0) => {
        const childNodeSlider = slideMobile.firstChild
        const img = document.createElement('img')
        img.src = slideItems[counter]?.link
        img.alt = slideItems[counter]?.alt
        img.style.cssText = 'width: 100%; object-fit: cover; height: fit-content; max-height: 100px;'
        circles[counter].style.cssText = 'width: .75rem; height: .75rem; background: white; border-radius: 50%;opacity: .8; box-shadow: 0 0 2px 3px rgba(255, 255,255, .5);'
        childNodeSlider
            ? slideMobile.replaceChild(img, childNodeSlider)
            : slideMobile.append(img)
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

    createindicatirCircles()
    setItemSlider()

    const loopSlider = setInterval(() => changeItemSlider(), DURATION)

    slideMobile.addEventListener('touchstart', () => {
        changeItemSlider()
        if (loopSlider) clearInterval(loopSlider)
    }
    )

    indicator.append(...circles)
    slideMobile.append(indicator)
    targetHtmlElement.prepend(slideMobile)

    // const allCircles = document.querySelectorAll('.slider-mobile-circle')
    // console.log(allCircles);
    // const test =  Array.from(allCircles).indexOf(sliderCounter)
    // console.log(test, sliderCounter);



    // allCircles.forEach((item, index) => {
    //     console.log(item.id === `slider-mobile-circle_${index}`);
    //     if(item.id === `slider-mobile-circle_${index}`) {
    //         item.style.cssText = 'width: .75rem; height: .75rem; background: gray; border-radius: 50%;opacity: .8; box-shadow: 0 0 2px 3px rgba(255, 255,255, .5);'
    //     }
    //   })

    // allCircles.forEach(el, idx => {
    //     if(el.id = `slider-mobile-circle_${i}) {

    //     }
    //     // el.style.cssText = 'width: .75rem; height: .75rem; background: gray; border-radius: 50%;opacity: .8; box-shadow: 0 0 2px 3px rgba(255, 255,255, .5);'
    // })

})
