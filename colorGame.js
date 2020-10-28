let colors = generateRandomColors(6);
let numSquares = 6;
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

for(let i =0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        if (this.textContent === 'Easy') {
            numSquares = 3;
        } else {
            numSquares = 6;
        }
        reset();
    })
}

function reset() {
     //generate all new colors
     colors = generateRandomColors(numSquares);
     //pick a new random color from array
     pickedColor = pickColor();
     //change the colorDisplay to match the picked
     colorDisplay.textContent = pickedColor;
     //change the colors of squares
     resetButton.textContent = 'New Colors';
     message.textContent = '';
     for(let i =0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
     }
     h1.style.background = 'steelblue';
     
     
}

resetButton.addEventListener('click', function(){
 reset();
})

colorDisplay.textContent = pickedColor;

for(let i =0; i < squares.length; i++) {
    //add the initial colors to the squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab the clicked color RGB
        let clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        //compare the clickedColor value to the announced one in the h1
        if (clickedColor === pickedColor) {
            message.textContent = 'Correct!';
            resetButton.textContent = 'Play Again!';
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
        }
    })
}

const changeColors = (color) => {
    //loop through all colors
    for(let i = 0; i < squares.length; i++) {
    //change each color to match the pickedColor
        squares[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];
    //repeat num times
    for(let i = 0; i < num; i++) {
        //add num random colors to array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a 3 colors from 0 to -255 3 times to achieve the RGB
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}