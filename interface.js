document.addEventListener('DOMContentLoaded',()=>{

    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{

        square.addEventListener('click',handeClick)

    })

})

function handeClick (event){

    square=event.target;
    position =square.id;
     if (handleMove(position)){
        setTimeout(()=>{
        alert("Player "+(playertime+1)+" is the winner!")},10)
     }
    updateSquare(position);
}

function updateSquare(position){
    square = document.getElementById(position.toString())

        symbol = board[position]
        
        if(symbol!=""){
            square.innerHTML=`<div class="${symbol}"></div>`
        }
}


function updateSquares() {

  let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        position = square.id;
        symbol = board[position]
        
        if(symbol!=""){
            square.innerHTML=`<div class="${symbol}"></div>`
        }



    })

}
    function reset(){

        let squares = document.querySelectorAll(".square");
        squares.forEach((square)=>{
    
            square.innerHTML ="";
            
            resetGame();
        })
    }


