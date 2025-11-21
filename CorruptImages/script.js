var allImages = document.getElementsByClassName("Image")

Array.from(allImages).forEach(div => {
    image = div.getElementsByTagName("img").item(0)
    if (image.complete) {
        div.classList.add("fadein");
    } else image.onload = () => {
        div.classList.add("fadein");
    };
});