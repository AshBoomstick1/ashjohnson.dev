const images = document.getElementsByClassName("contentImage");
const openers = document.getElementsByClassName("imageViewer");

for (let i = 0; i < openers.length; i++) {
    openers[i].addEventListener("click", () => {

        //animations
        const imageAnimateShow = images[i].animate(
            [
                {filter: "blur(3px)", opacity: 0},
                {transform: "translate3d(0px, -20px, 0px)", filter: "blur(2px)", opacity: 0.5, offset: 0.3},
                {filter: "blur(0px)", opacity: 1}
            ],
            {
                duration: 200,
                easing: "ease",
                iterations: 1
            },
        );
        imageAnimateShow.cancel();

        const buttonAnimateUp = openers[i].animate(
            [
                {transform: "rotate(0)"},
                {transform: "rotate(180deg)"}
            ],
            {
                duration: 200,
                easing: "ease-in-out",
                iterations: 1
            },
        );
        buttonAnimateUp.cancel();

        const imageAnimateHide = images[i].animate(
            [
                {filter: "blur(0px)", opacity: 1},
                {transform: "translate3d(0px, 20px, 0px)", filter: "blur(2px)", opacity: 0.5, offset: 0.3},
                {filter: "blur(3px)", opacity: 0}
            ],
            {
                duration: 200,
                easing: "ease",
                iterations: 1
            },
        );
        imageAnimateHide.cancel();

        const buttonAnimateDown = openers[i].animate(
            [
                {transform: "rotate(180deg)"},
                {transform: "rotate(0)"}
            ],
            {
                duration: 200,
                easing: "ease-in-out",
                iterations: 1
            },
        );
        buttonAnimateDown.cancel();


        if (images[i].style.display == "" || images[i].style.display == "none") {
            images[i].style.display = "block";
            imageAnimateShow.play();
            buttonAnimateUp.play();

            buttonAnimateUp.onfinish = () => {
                openers[i].style.transform = "rotate(180deg)";
            };
        } else {
            imageAnimateHide.play();
            buttonAnimateDown.play();

            imageAnimateHide.onfinish = () => {
                images[i].style.display = "none";
            };

            buttonAnimateDown.onfinish = () => {
                openers[i].style.transform = "rotate(0)";
            };
        }
    })
}
