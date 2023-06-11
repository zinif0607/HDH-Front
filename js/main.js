const backToTop = document.getElementById("backtotop");

function checkScroll() {
    
    // 웹페이지가 수직으로 얼마나 스크롤되었는 지를 확인하는 값(픽셀 단위로 변환)
    // https://developer.mozilla.org/ko/docs/web/API/Window/pageY0ffset

    let pageYOffset = window.pageYOffset;

    if(pageYOffset != 0 ) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
} 

function moverBackToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, hehavior: "smooth"})
    }
}

window.addEventListener("scroll", checkScroll);
backToTop.addEventListener("click", moverBackToTop);