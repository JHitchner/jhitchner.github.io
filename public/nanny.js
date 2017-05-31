document.addEventListener("DOMContentLoaded", function(event) {
  var test = document.getElementById("test");
  var scene = document.getElementById("scene_container");
  var buttonStart = document.getElementById("door");
  var scene1Type = document.getElementById("scene1Type").textContent;
  var scene1Array = scene1Type.split("");
  var show = document.getElementById("showType");
  var blockY = document.getElementById("nannyBlock");
  // var proceedBtn = document.getElementById("startScroll");
  var darknessAni =document.getElementById("darkness");
  var body =document.getElementsByTagName("body");
  var musicBox =document.getElementById("musicBox");
  var storm =document.getElementById("storm");
  var nannyAni = document.getElementById("nanny_sil");
  var nannySprites =document.getElementById("nanny_sil3")
  var children =document.getElementById("children1");
  var creak =document.getElementById("creak");
  var knock =document.getElementById("knock");
  var raven =document.getElementById("raven");
  var scratches =document.getElementById("scratches");
  var nannyShadowSprite =document.getElementById("nannyShadow_sprite");
  var spriteBtn = document.getElementById("sprite");
  var mom = document.getElementById("mom");
  var shadow =document.getElementById("shadow");
  var main =document.getElementById("main");
  var whisperOpen=document.getElementById("whisper_open");
var openBG=document.getElementById("bg1");
var deadHead =document.getElementById("deadbust");
var head =document.getElementById("bust");
var nannyPiper =document.getElementById("nanny_piper");
var stairs =document.getElementById("stairs");
var nannyPiper2 =document.getElementById("nannyPiper2");
var hall =document.getElementById("downHall");
var lightBtn =document.getElementById("light");
var lightsOut =document.getElementById("lightsOut");
var transform =document.getElementById("transform");
var bgMove =document.getElementById("bg7");
var transFormWav =document.getElementById("transformWav");
var bedtime =document.getElementById("bedtimeWav");
var shadowAni =document.getElementById("feelers4");
var nomNomAni =document.getElementById("nomNom");
var nannArms =document.getElementById("nannyArms");
// Function that prints the text of the story one character at a time.
  function pageOne(){
     var i = 0;
     myVar = setInterval(function(){
      show.innerHTML += scene1Array[i]
      if(i == scene1Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }
  var showTwo =document.getElementById("showType2");
  var scene2Type =document.getElementById("scene2Type").textContent;
  var scene2Array = scene2Type.split("");

  function pageTwo(){
     var i = 0;
     myVar = setInterval(function(){
      showTwo.innerHTML += scene2Array[i]
      if(i == scene2Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }

  var showThree =document.getElementById("showType3");
  var scene3Type = document.getElementById("scene3Type").textContent;
  var scene3Array = scene3Type.split("");
  function pageThree(){
     var i = 0;
     myVar = setInterval(function(){
      showThree.innerHTML += scene3Array[i]
      if(i == scene3Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }

  var showFour =document.getElementById("showType4");
  var scene4Type = document.getElementById("scene4Type").textContent;
  var scene4Array = scene4Type.split("");
  function pageFour(){
     var i = 0;
     myVar = setInterval(function(){
      showFour.innerHTML += scene4Array[i]
      if(i == scene4Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }

  var showFive =document.getElementById("showType5");
  var scene5Type = document.getElementById("scene5Type").textContent;
  var scene5Array = scene5Type.split("");
  function pageFive(){
     var i = 0;
     myVar = setInterval(function(){
      showFive.innerHTML += scene5Array[i]
      if(i == scene5Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }

  var showSix =document.getElementById("showType6");
  var scene6Type = document.getElementById("scene6Type").textContent;
  var scene5Array = scene6Type.split("");
  function pageSix(){
     var i = 0;
     myVar = setInterval(function(){
      showSix.innerHTML += scene6Array[i]
      if(i == scene6Array.length-1){
         clearInterval(myVar);
       }
      i++;
    }, 100);
  }
  musicBox.play();
  nannyAni.addEventListener("animationend", pageOne);
// Animation Triggers By Scrollbar Position

  scene.onscroll=function(){
    if (scene.scrollLeft < 1700 && scene.scrollLeft > 1600){
      nannyAni.style.animationPlayState= "running";
      musicBox.pause();
      storm.play();
    }
    if (scene.scrollLeft < 2500 && scene.scrollLeft > 2400){
      main.play();
      musicBox.pause();
    }
    if (scene.scrollLeft < 5600 && scene.scrollLeft > 5500){
      children.style.animationPlayState = "running";
    }
    if (scene.scrollLeft < 6980 && scene.scrollLeft > 6880){
      nannyPiper.style.animationPlayState = "running";
      stairs.play();
      main.pause();
      window.setTimeout(function() {
        shadowAni.style.animationPlayState = "running";
      }, 7000);
    }
    if (scene.scrollLeft < 7800 && scene.scrollLeft > 7700){
      nannyPiper2.style.animationPlayState = "running";
      downHall.play();
      stairs.pause();
      window.setTimeout(function() {
        deadHead.style.display = "block";
        head.style.display = "none";
      }, 8500);
    }
  }
  main.addEventListener("play", pageTwo);
  downHall.addEventListener("play", pageFive);
  nannyPiper2.addEventListener("animationend", function(){
    bedtimeWav.play();
  })
   stairs.addEventListener("play", pageFour);

  children.addEventListener("animationend", function(){
    nannyShadowSprite.style.animationPlayState = "running";
    pageThree();
  });
  var hudClick =document.getElementById("clickY");
  var hud1 = window.setTimeout(function(){
      hudClick.style.display = "block";
    }, 8000);

// Remove Block,Trigger HomePage Animtion and allow scroll
  blockY.addEventListener("click", function(){
    window.clearTimeout(hud1);
    clickY.style.display ="none";
    darknessAni.style.animationPlayState = "running";
    window.setTimeout(function() {
      blockY.style.display = "none";
      openBG.style.backgroundImage = "url('images/homePageNannyBlood.png')";
    }, 2000);
    scene.style.whiteSpace = "nowrap"
    creak.play();
    whisperOpen.play();
    console.log("clicked");
  });

  buttonStart.addEventListener("click", function(){
    knock.play();
    window.setTimeout(function() {
      mom.style.animationPlayState = "running"
      shadow.style.animationPlayState = "running"
      shadow.style.display ="block";
    }, 2000);
    console.log("I was clicked");
  });
   bedtimeWav.addEventListener("play", pageSix);
  lightBtn.addEventListener("click", function(){
    console.log("I was so clicked");
    lightBtn.style.display = "none";
    lightsOut.style.display = "block";
    transform.style.animationPlayState ="running";
    bgMove.style.animationPlayState ="running";
    transFormWav.play();
    bedtimeWav.pause();
    nomNomAni.style.display = "block";
    nomNomAni.style.animationPlayState = "running";
    window.setTimeout(function() {
      nannArms.style.display = "block";
      nannArms.style.animationPlayState = "running";
    }, 4000);
    nomNomAni.addEventListener("animationend", function(){
      window.setTimeout(function(){
          location.assign("/contact")
      }, 8000)
    })
  });


});
