let colors = [
    'rgb(255, 0, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 255, 255)',
    'rgb(0, 0, 255)',
    'rgb(255, 0, 255)'
];

let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let message = document.querySelector('#message');

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
            changeColors(clickedColor);
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