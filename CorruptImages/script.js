var allImages = document.getElementsByClassName("Image")

imagePreviewContainer.onclick = ()=>{
    imagePreviewContainer.style.opacity = 0;
    imagePreviewContainer.style.pointerEvents = "none";
}

Array.from(allImages).forEach(div => {
    let image = div.getElementsByTagName("img").item(0)
    if (image.complete) {
        div.classList.add("fadein");
    } else image.onload = () => {
        div.classList.add("fadein");
    };
    image.onclick = ()=>{
        imagePreviewContainer.style.opacity = 1;
        imagePreviewContainer.style.pointerEvents = "all";
        imagePreview.src = image.src;
    };
});