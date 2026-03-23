let squareSize = 16;

const popupbtn= document.getElementById("popupbtn");
popupbtn.addEventListener("click", function() {
    userinput = prompt("Enter the size of the square (max 100):", "16");
    if (userinput === null) return;

    userinput = parseInt(userinput);
    if (userinput > 100) {
        alert("Please enter a number less than or equal to 100.");
        return;
    }
    if (userinput < 1) {
        alert("Please enter a number greater than 0.");
        return;
    }
    squareSize = userinput;
    newsquare();



});

function resetgrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    });
}

const resetbtn = document.getElementById("resetgrid");
resetbtn.addEventListener("click", resetgrid);


function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;


            
        }


function addHoverEffect(cell) {
    cell.addEventListener("mouseenter", function(){
       
        cell.style.backgroundColor =  randomColor();       
    });

       cell.addEventListener("mouseleave", function(){
        
        cell.style.backgroundColor = randomColor(); 
    });

}


function newsquare() {
const container = document.getElementById("container");
container.innerHTML = "";

const cellsize = 500 / squareSize;

for (let i = 0; i < squareSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.height = `${cellsize}px`;


    for (let j = 0; j < squareSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${cellsize}px`;
        cell.style.height = `${cellsize}px`;
        addHoverEffect(cell);
        row.appendChild(cell);
    }
    container.appendChild(row);  
    
} 
    }

newsquare();
    