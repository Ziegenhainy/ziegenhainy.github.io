var allImages = document.getElementsByClassName("Image")

Array.from(allImages).forEach(div => {
    div.getElementsByTagName("img").item(0).onload = () => {
        div.classList.add("fadein");
    };
});