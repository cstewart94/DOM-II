// Your code goes here
//Mouse Enter
const headerImage = document.querySelector(".headerImg");

headerImage.addEventListener("mouseenter", () => {
  headerImage.style.transform ="scale(1.2)";
  headerImage.style.transition = "all 0.3s"
})
//Mouse Leave
headerImage.addEventListener("mouseleave", () =>{
  headerImage.style.transform="scale(1)";
  headerImage.style.transition="all 0.3s"
})
//
//
//Key Down
const bkgColor = document.querySelector("body");

bkgColor.addEventListener("keydown", () =>{
  bkgColor.style.backgroundColor="green";
})
//Key Up
bkgColor.addEventListener("keyup", (e) =>{
  bkgColor.style.backgroundColor="white";
})
//
//
//Wheel
document.querySelectorAll(".text-content").forEach(boxZoom => {
  boxZoom.addEventListener("wheel", () =>{
    boxZoom.style.transform="scale(1.5)";
    boxZoom.style.transition="all 0.3s";
  })
});

document.querySelectorAll(".text-content").forEach(boxZoom => {
  boxZoom.addEventListener("mouseleave", () =>{
    boxZoom.style.transform="scale(1)";
    boxZoom.style.transition="all 0.3s";
  })
});
//
//
//Copy
const txtSelect = document.querySelector(".text-content");

txtSelect.addEventListener("copy", () =>{
  txtSelect.style.color="red";
})

document.querySelectorAll(".text-content").forEach(txtSelect => {
  txtSelect.addEventListener("mouseleave", () =>{
    txtSelect.style.color="black";
  })
});
//
//
//Resize
const resizeBody = document.querySelector("body");

window.addEventListener("resize", () => {
  resizeBody.style.backgroundColor="black";
  resizeBody.style.color="white";
});
//
//
//Double Click
document.getElementById("imgOne").addEventListener("dblclick", functionOne);
function functionOne(){
  alert ("Clicked Img One");
}

//Click
//stopPropagation
const contTwo = document.querySelector(".contentTwo");
contTwo.addEventListener("click", (e) =>{
  contTwo.style.backgroundColor="peru";
  e.stopPropagation();
})

const bkgClick = document.querySelector("body");
bkgClick.addEventListener("click", () =>{
 bkgClick.style.backgroundColor="navajowhite";
})


//Prevent Default
document.querySelectorAll(".nav-link").forEach(prevDefault => {
  prevDefault.addEventListener("click", (e) => {
    console.log("unnecessary console log");
    e.preventDefault();
  })
});
