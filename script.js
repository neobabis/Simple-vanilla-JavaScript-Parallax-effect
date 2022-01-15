// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// ------------------------------
const nb_parallaxs = document.querySelectorAll(".nb_parallax");
window.addEventListener("scroll", () => {
    for (element of nb_parallaxs) {
        let posX = element.dataset.rate_x ? window.pageYOffset * element.dataset.rate_x : 0;
        let posY = element.dataset.rate_y ? window.pageYOffset * element.dataset.rate_y : 0;
        element.style.transform = "translate3d(" + posX + "px," + posY + "px,0px)";
    }
});
