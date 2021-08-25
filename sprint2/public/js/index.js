new Glide('.glide', {
    type:'slider',
    breakpoints: {
        425:{
            perView: 1
        },
        768: {
            perView: 2
        },
        1024: {
            perView: 3
        },
        1440:{
            perView: 4
        }
    }
}).mount()