// ARRAY VISUALIZER

document.addEventListener("keydown", visual);
document.addEventListener("keydown", reset);
// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300];
let roll;

// Main Program Loop
function visual(event) {
    console.log(event.code);
    if (event.code == "Space") {
            for (let i = 0; i < myArray.length; i++) {
                myArray[i] += Math.random() * 10-5;
            }
    }

}

function reset(event) {
    console.log(event.code);
    //let i = 0; i < myArray.length; i++; 
    if (event.code == "KeyR") {

        for(let i = 0; i <myArray.length; i++) {
            myArray[i] = 300;
        }
    }
}



requestAnimationFrame(draw);

function draw() {
    // Logic

    let barWidth = cnv.width / myArray.length;

    // Drawing
        //console.log(roll);
        ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bar Graph
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";
    for (let i = 0; i < myArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);        
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}