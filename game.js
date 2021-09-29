let board =["","","","","","","","",""]
let playertime = 0;
let symbols = ["x","o"] 
let gameOver = false;

function handleMove(position){
    
    if(gameOver) {
        return;
    }   

    if(board[position]==""){
    board[position] = symbols[playertime]

    gameOver= isWin();
    if (!gameOver) {
        
    
    playertime == 0?playertime=1:playertime=0;
    }
    }

    

 return gameOver;
}


function isWin () {

    let winOptions =[[0,1,2],[3,4,5],[6,7,8],
                     [0,3,6],[1,4,7],[2,5,8],
                     [0,4,8],[2,4,6]
                        ]

    for(let i = 0;i<winOptions.length;i++){
           winSeq = winOptions[i];
           let pos1 =winSeq[0];
           let pos2 =winSeq[1];
           let pos3 =winSeq[2];

        if (board[pos1] == board[pos2] && 
            board[pos2] == board[pos3] &&
            board[pos1] != ""
        ){

        return true;
        }

    }               
    
    return false;

}