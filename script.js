window.onload = function setbackground(){
var index = Math.round(Math.random() * 8);
var ImagePath = "assets/bg2.svg";
if(index == 1)
ImagePath = "assets/bg3.svg"; 
if(index == 2)
ImagePath = "assets/bg4.svg";
if(index == 3)
ImagePath = "assets/bg5.svg";
if(index == 4)
ImagePath = "assets/bg6.svg";
if(index == 5)
ImagePath = "assets/bg7.svg"; 
if(index == 6)
ImagePath = "assets/bg8.svg"; 
if(index == 7)
ImagePath = "assets/bg9.svg"; 
document.getElementsByTagName("html")[0].style.backgroundImage="url('"+ ImagePath+ "')";
};

// window.onload = function () {

//     function changeImage() {   
//         var BackgroundImg=[
//             "assets/bg1.svg",
//             "assets/bg2.svg",
//             "assets/bg3.svg",
//             "assets/bg4.svg",
//             "assets/bg5.svg",
//             "assets/bg6.svg",
//             "assets/bg7.svg",
//             "assets/bg8.svg",
//             "assets/bg9.svg",
//         ];
//         var i = Math.floor((Math.random() * 9));
//         document.getElementsByTagName("html")[0].style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
//     }
//     window.setInterval(changeImage, 1000);
// }

