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
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let pattern of patterns) {
      const [a, b, c] = pattern;
      if (
        cells[a].innerHTML &&
        cells[a].innerHTML === cells[b].innerHTML &&
        cells[a].innerHTML === cells[c].innerHTML
      ) {
        alert(cells[a].innerHTML + ' wins!');
        resetBoard();
        return;
      }
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