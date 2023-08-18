import Masonry from "masonry-layout";

export function realization() {
    let wrap = document.querySelector(".realization .wrap .projects_block");
    let wrap2 = document.querySelector(".realization .wrap");
    let btnShowMore = document.querySelector(".show-more");
    let btnBackMore = document.querySelector(".back-more");
    let gradientUp = document.querySelector(".gradient-up");

    let position = 0;

    let positionBottomGradient = 50;

    window.onload = () => {
        const grid = document.querySelector(".grid-masonry");
        const masonry = new Masonry(grid, {
            itemSelector: ".grid-item",
            gutter: 43,
            percentPosition: true,
        });

        btnShowMore.addEventListener("click", showMoreProjects, true);

        function showMoreProjects() {
            position = position + 300;
            positionBottomGradient = positionBottomGradient + 30 + "%";

            wrap.scrollTo({
                top: position,
                behavior: "smooth",
            });

            if (position > 0) {
                gradientUp.style.display = "flex";
                btnBackMore.addEventListener("click", backMoreProjects);
            }
        }

        function backMoreProjects() {

            if (position > 0) {
                position = position - 300;
            }

            if (position === 0) {
                gradientUp.style.display = "none";
            }

            wrap.scrollTo({
                top: position,
                behavior: "smooth",
            });
        }

        window.addEventListener("scroll", closeOnScroll);

        function closeOnScroll() {
            let scrollDistance = window.scrollY;
            let distanceBlock = wrap2.offsetTop + 300;

            console.log(distanceBlock)

            if (scrollDistance < distanceBlock) {
                gradientUp.style.display = "none";
            } else {
                if (position > 0) {
                    gradientUp.style.display = "flex";
                }
            }
        }
    }
}
