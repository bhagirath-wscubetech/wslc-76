var mainImg = document.getElementById("main");
var mainImgBox = document.getElementById("main-img");
function changeImg(imgTag) {
    mainImg.src = imgTag.src;
    // mainImgBox.style.opacity = "1";
    // mainImgBox.style.visibility = "visible";
    mainImgBox.style.transform = "scale(1,1)";
}
function closeBox() {
    // mainImgBox.style.opacity = "0";
    // mainImgBox.style.visibility = "hidden";
    mainImgBox.style.transform = "scale(0,0)";
}