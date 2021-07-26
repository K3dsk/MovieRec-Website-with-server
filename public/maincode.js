
$("img").hide().fadeIn([900]);
var n=document.querySelectorAll(".btn-each").length;


$(".btn-each").on("click",function(){
  playSound();
  document.querySelector("button.active").classList.remove("active");
    this.classList.add("active");

  $(".genre").hide().fadeIn([900]);
    var title=this.innerText;
    var noOfTitle=document.querySelectorAll(".genre").length;
    for(var j=0;j<noOfTitle;j++){
      document.querySelectorAll(".genre")[j].src=title+"/"+(j+1)+".jpg";
    }
  })

function playSound(){
  var sound= new Audio("sounds/2.wav");
  sound.play();
}
