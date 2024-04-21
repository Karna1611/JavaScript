let count=1;
let flag=false;
function checkEvent(e){
    let x=e.target;
    if(flag==false){
        x.innerHTML='X';
    }
    else{
        x.innerHTML='O';
    }
    flag=!flag;
    x.disabled=true;
    checkWin();
}

function checkWin() {
    const cells = document.querySelectorAll('.cell');
    if(cells[0]==cells[1]==cells[2] && cells[0]!==null){
        alert(cells[0].innerHTML + 'wins!');
        resetBoard();
        return;
    }
  
  }

  function resetBoard() {
    const cells = document.querySelectorAll('.cell');
    for (let cell of cells) {
      cell.innerHTML = '';
      cell.disabled = false;
    }
    flag = false;
  }