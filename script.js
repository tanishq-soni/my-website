function setbackground()
{
window.setTimeout( "setbackground()", 4000);
var index = Math.round(Math.random() * 9);
var ImagePath = "assets/bg1.svg";
if(index == 1)
ImagePath = "assets/bg2.svg"; 
if(index == 2)
ImagePath = "assets/bg3.svg";
if(index == 3)
ImagePath = "assets/bg4.svg";
if(index == 4)
ImagePath = "assets/bg5.svg";
if(index == 5)
ImagePath = "assets/bg6.svg"; 
if(index == 6)
ImagePath = "assets/bg7.svg"; 
if(index == 7)
ImagePath = "assets/bg8.svg"; 
if(index == 8)
ImagePath = "assets/bg9.svg"; 
document.getElementsByTagName("html")[0].style.backgroundImage="url('"+ ImagePath+ "')";
}
setbackground();
setInterval(setbackground(), 1000);
