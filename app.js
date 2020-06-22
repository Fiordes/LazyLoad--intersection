let options = {
    threshold: 1,

}



const observer = new IntersectionObserver(imageObserver, options);

function imageObserver(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const img_src = img.dataset.src;
            console.log(img);

            img.src = img_src + '.jpg'


        }

    })
};

let imgs = document.querySelectorAll('img.lazy');

imgs.forEach(img => {
    observer.observe(img)
})