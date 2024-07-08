//var StartScreenCanvas = document.getElementById("StartScreenCanvas")
//var ctx = StartScreenCanvas.getContext('2d')
var windowWidth = window.innerWidth 
var windowHeight = window.innerHeight
var StartScreen_gift_button = document.getElementById("StartScreen_gift_button")
var StoryMoveOnButton = document.getElementById("StoryMoveOnButton")
var roku_card_end = document.getElementById("roku_card_end")
var jintin_card_end = document.getElementById("jintin_card_end")
var howch_card_end = document.getElementById("howch_card_end")
var takala_card_end = document.getElementById("takala_card_end")
var andy_card_end = document.getElementById("andy_card_end")
var long_card_end = document.getElementById("long_card_end")
var noya_card_end = document.getElementById("noya_card_end")
var yimin_card_end = document.getElementById("yimin_card_end")


StartScreen_gift_button.innerHTML = '<img src = "yuyu_birthday2024/images/startscreen_gift_icon.gif" width = 100% height = 100%>'
StoryMoveOnButton.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
roku_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
jintin_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
howch_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
takala_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
andy_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
long_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
noya_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"
yimin_card_end.innerHTML = "<img src = 'yuyu_birthday2024/images/arrow.png' width = 100% height = 100%>"


function StartTheGame(){
    document.getElementById("StoryScreenAnimation").style.display = "block";
    document.getElementById("StartScreen").style.display = "none";
    document.getElementById("StartScreen2").style.display = 'none';
    setTimeout(function() {
        document.getElementById("StoryScreenAnimation").style.display = "none";
        document.getElementById("StoryScreen").style.display = "block";
        document.getElementById("WalkingGirlImg").style.display = "block";
        document.getElementById("StoryMoveOnButton").style.display = "block";
        document.getElementById("characters").style.display = "block";
      }, 1750);

    
}
var StoryPage = 0
function StoryMoveOn(){

  StoryPage += 1
  if(StoryPage == 1){
    document.getElementById("StoryScreen001").style.display = "none";
    document.getElementById("StoryScreen002").style.display = "block";
  }
  if(StoryPage==2)
{
  document.getElementById("StoryScreen002").style.display = "none";
  document.getElementById("StoryScreen003").style.display = "block";
}
if(StoryPage==3)
{
  document.getElementById("StoryScreen003").style.display = "none";
  document.getElementById("StoryScreen004").style.display = "block";
}
if(StoryPage==4)
{
  document.getElementById("StoryScreen004").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("u_so").style.display = 'block';
  setTimeout(function() {
    document.getElementById("u_so").style.display = "none";
    document.getElementById("StoryScreen005").style.display = "block";
    document.getElementById("StoryScreen").style.display = "block";
    document.getElementById("rokuImg").style.display = "block";
    document.getElementById("characters").style.display = "block";
  }, 1750);
}
if(StoryPage==5){
  document.getElementById("u_so").style.display = "block";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("StoryScreen005").style.display = "none";
  document.getElementById("u_so").style.display = "none";
    document.getElementById("rokucard").style.display = "block";
}
if(StoryPage==6){
  document.getElementById("rokucard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
  document.getElementById("StoryScreen006").style.display='block';
}
if(StoryPage == 7){
  document.getElementById("jintinImg").style.display='block'
  document.getElementById("StoryScreen006").style.display='none';
  document.getElementById("StoryScreen007").style.display='block'
  
}
if(StoryPage == 8){
  document.getElementById("StoryScreen007").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("u_so").style.display = 'block';
  setTimeout(function() {
    document.getElementById("u_so").style.display = "none";
    document.getElementById("StoryScreen008").style.display = "block";
    document.getElementById("StoryScreen").style.display = "block";
    document.getElementById("characters").style.display = "block";
  }, 1750);
  
}
if(StoryPage == 9){
  document.getElementById("jintincard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
    document.getElementById("characters").style.display = "none";
    document.getElementById("StoryScreen008").style.display = "none";
}
if(StoryPage == 10){
  document.getElementById("jintincard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
    document.getElementById("characters").style.display = "block";
    document.getElementById("StoryScreen009").style.display = "block";
}
if(StoryPage == 11){
  document.getElementById("StoryScreen").style.display = "block";
    document.getElementById("characters").style.display = "block";
    document.getElementById("StoryScreen009").style.display = "none";
    document.getElementById("StoryScreen010").style.display = "block";
}
if(StoryPage == 12){
    document.getElementById("StoryScreen010").style.display = "none";
    document.getElementById("StoryScreen011").style.display = "block";
    document.getElementById("takalaImg").style.display='block';
    document.getElementById("howchImg").style.display='block';
}
if(StoryPage == 13){
  document.getElementById("StoryScreen011").style.display = "none";
  document.getElementById("howchcard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
    document.getElementById("characters").style.display = "none";

}

if(StoryPage == 14){
  document.getElementById("howchcard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
  document.getElementById("StoryScreen012").style.display = "block";

}
if(StoryPage == 15){
  document.getElementById("takalacard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen012").style.display = "none";

}
if(StoryPage == 16){
  document.getElementById("takalacard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
  document.getElementById("StoryScreen013").style.display = "block";

}
if(StoryPage == 17){
  document.getElementById("StoryScreen013").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("u_so").style.display = 'block';
  setTimeout(function() {
    document.getElementById("u_so").style.display = "none";
    document.getElementById("StoryScreen014").style.display = "block";
    document.getElementById("StoryScreen").style.display = "block";
    document.getElementById("characters").style.display = "block";
  }, 1750);
}
if(StoryPage == 18){
  document.getElementById("StoryScreen014").style.display = "none";
  document.getElementById("StoryScreen015").style.display = 'block';
  document.getElementById("andyImg").style.display='block'
}
if(StoryPage == 19){
  document.getElementById("andycard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen015").style.display = "none";

}
if(StoryPage == 20){
  document.getElementById("andycard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
  document.getElementById("StoryScreen016").style.display = "block";
}
if(StoryPage == 21){
  document.getElementById("StoryScreen016").style.display = "none";
  document.getElementById("StoryScreen017").style.display = "block";
  document.getElementById("longImg").style.display='block'
}
if(StoryPage == 22){
  document.getElementById("longcard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("StoryScreen017").style.display = "none";

}
if(StoryPage == 23){

  document.getElementById("StoryScreen018").style.display = "block";
  document.getElementById("longcard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
}
if(StoryPage == 24){

  document.getElementById("StoryScreen019").style.display = "block";
  document.getElementById("StoryScreen018").style.display = "none";
}
if(StoryPage == 25){
  document.getElementById("StoryScreen019").style.display = "none";
  document.getElementById("noyacard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("characters").style.display = "none";
  
}
if(StoryPage == 26){

  document.getElementById("StoryScreen020").style.display = "block";
  document.getElementById("noyacard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("characters").style.display = "block";
  


}
if(StoryPage == 27){
  document.getElementById("StoryScreen021").style.display = "block";
  document.getElementById("StoryScreen020").style.display = "none";
  
}
if(StoryPage == 28){

  document.getElementById("StoryScreen022").style.display = "block";
  document.getElementById("StoryScreen021").style.display = "none";
  document.getElementById("WalkingGirlImg").style.display = "none";
  document.getElementById("rokuImg").style.display = "none";
  document.getElementById("jintinImg").style.display = "none";
  document.getElementById("takalaImg").style.display = "none";
  document.getElementById("howchImg").style.display = "none";
  document.getElementById("andyImg").style.display = "none";
  document.getElementById("longImg").style.display = "none";
}
if(StoryPage == 29){

  document.getElementById("StoryScreen022").style.display = "none";
  document.getElementById("wifecard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  


}
if(StoryPage == 30){

  document.getElementById("StoryScreen023").style.display = "block";
  document.getElementById("wifecard").style.display = "none";
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("rokuImg").style.display = "block";
  document.getElementById("WalkingGirlImg").style.display = "block";
  document.getElementById("jintinImg").style.display = "block";
  document.getElementById("takalaImg").style.display = "block";
  document.getElementById("howchImg").style.display = "block";
  document.getElementById("andyImg").style.display = "block";
  document.getElementById("longImg").style.display = "block";


}
if(StoryPage == 31){

  document.getElementById("StoryScreen023").style.display = "none";
  document.getElementById("yimincard").style.display = "block";
  document.getElementById("StoryScreen").style.display = "none";
  document.getElementById("characters").style.display = "none";
  document.getElementById("WalkingGirlImg").style.display = "none";
  document.getElementById("rokuImg").style.display = "none";
  document.getElementById("jintinImg").style.display = "none";
  document.getElementById("takalaImg").style.display = "none";
  document.getElementById("howchImg").style.display = "none";
  document.getElementById("andyImg").style.display = "none";
  document.getElementById("longImg").style.display = "none";


}
if(StoryPage == 32){
  document.getElementById("StoryScreen").style.display = "block";
  document.getElementById("StoryScreen024").style.display = "block";
  document.getElementById("yimincard").style.display = "none";
}
}