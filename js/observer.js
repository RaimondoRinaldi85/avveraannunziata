
const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

images.forEach(image => {

    observer.observe(image)
})

const imagesup = document.querySelectorAll('.animup');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animup .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

imagesup.forEach(image => {

    observer.observe(image)
})
const imagesright = document.querySelectorAll('.animright');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `animright .5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })
})

imagesright.forEach(image => {

    observer.observe(image)
})







