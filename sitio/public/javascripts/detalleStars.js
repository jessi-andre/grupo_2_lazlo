const allStars = document.querySelectorAll('.star');
const labels = document.querySelectorAll('.starsLabel');
const starsBox = $('stars');

starsBox.addEventListener('click', function (e) {
    for (let i = 0; i < allStars.length; i++) {
        if(starsBox.children[i].classList.contains('star_active')){
            starsBox.children[i].classList.remove('star_active');
            starsBox.children[i].classList.add('star_unactive');
            labels[i].classList.remove('star_active');
            labels[i].classList.add('star_unactive');
            starsBox.children[i].checked = false;
        }
    }
    for (let i = 0; i < e.target.value; i++) {
        starsBox.children[i].checked = true;
        starsBox.children[i].classList.remove('star_unactive');
        starsBox.children[i].classList.add('star_active');
        labels[i].classList.remove('star_unactive');
        labels[i].classList.add('star_active');
    }
})