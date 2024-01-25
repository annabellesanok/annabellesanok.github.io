const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/food.png") {
    myImage.setAttribute("src", "images/plants.png");
  } else {
    myImage.setAttribute("src", "images/food.png");
  }
};


function showMessage() {
    alert(" Outside of school, I like to read, cook, run, travel, and spend time with friends. ");
}


function showImage() {
    document.getElementById("img1").style.display = 'block'; 
}

function showImage2() {
    document.getElementById("img2").style.display = 'block'; 
}

