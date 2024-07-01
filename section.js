const sectionMain = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('Main');
        }
        else {
            entry.target.classList.remove('Main');
        }
    });
});
const sectionmain = document.querySelectorAll('.main');
sectionmain.forEach((el) => sectionMain.observe(el));