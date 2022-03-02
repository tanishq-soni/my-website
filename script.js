window.onload = function () {

    function changeImage() {   
        var BackgroundImg=[
            "assets/bg1.svg",
            "assets/bg2.svg",
            "assets/bg3.svg",
            "assets/bg4.svg",
            "assets/bg5.svg",
            "assets/bg6.svg",
            "assets/bg7.svg",
            "assets/bg8.svg",
            "assets/bg9.svg",
        ];
        var i = Math.floor((Math.random() * 9));
        document.getElementsByTagName("html")[0].style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 1000);
}

