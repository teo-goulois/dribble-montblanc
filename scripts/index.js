const hamburgerButton = document.getElementById('hamburgerButton')
const nav = document.getElementById('mobileNav')
const links = document.querySelectorAll('a')
const svg =  document.getElementById('svg')
let open = false

console.log(links, 'link');

links.forEach(link => {
    console.log(link, 'e');
    link.addEventListener('click', () => {
        console.log('click a');
        nav.classList.add("hidden");
        nav.classList.remove("mobile__nav");
        open = false
        svg.classList.toggle('active')
    })
})

hamburgerButton.addEventListener('click', () => {
    if (open) {
        console.log('close');
        nav.classList.add("hidden");
        nav.classList.remove("mobile__nav");
        open = false
    } else {
        console.log('open');
        nav.classList.remove("hidden");
        nav.classList.add("mobile__nav");
        open = true
    }

})