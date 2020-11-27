// This is program make game caro 10 x 10. This is develope from excercise Tic tac toe in BP, unit Array 2.

// DECLARE THE MAIN VARIABLES.
let gameReady = true;
let b = document.getElementById("carogame");
let player = 1;  // this variable change player after each of turn.
let board = new Array(20);
let data = ""; // this variable save string HTML to innerHTML at finally.
for (i = 0; i < 20; i++) {
    board[i] = new Array('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
}

//Make the table game from array 'board'
data += '<table>';
for (let i = 0; i < board.length; i++) {
    data += "<tr>";
    for (let j = 0; j < board[i].length; j++) {
        data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
    }
    data += "</tr>";
}
data += '</table>';
b.innerHTML = data;


function resetGame() {
    gameReady = true;
    for (i = 0; i < 20; i++) {
        board[i] = new Array('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    }
    data = '';
    data += '<table>';
    for (let i = 0; i < board.length; i++) {
        data += "<tr>";
        for (let j = 0; j < board[i].length; j++) {
            data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
        }
        data += "</tr>";
    }
    data += '</table>';
    b.innerHTML = data;
}

// Function get position of cell and change the value to O or X.
function changeValue(element) {
    if (gameReady) {
        let positionX = element.getAttribute('id').slice(0, element.getAttribute('id').indexOf('-'));
        let positionY = element.getAttribute('id').slice(element.getAttribute('id').indexOf('-') + 1);
        if (board[positionX][positionY] == "") {
            data = "";
            board[positionX][positionY] = player == 1 ? "O" : 'X';
            data += "<table>";
            for (let i = 0; i < board.length; i++) {
                data += "<tr>";
                for (let j = 0; j < board[i].length; j++) {
                    data += '<td id="' + i + "-" + j + '" onclick="changeValue(this)">' + board[i][j] + "</td>";
                }
                data += "</tr>";
            }
            data += '</table>';
            b.innerHTML = data;
            player = player == 1 ? 2 : 1; // After this function execute, change the current player.
        } else {
            alert('Vị trí này đã được đánh dấu rồi. Nhập lại vị trí khác!');
        }

        checkWin();
    }
}

function checkWin() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != '' && board[i][j] == board[i][j + 1] && board[i][j] == board[i][j + 2] && board[i][j] == board[i][j + 3] && board[i][j] == board[i][j + 4]) {
                alert('Player ' + player + ' Win!');
                gameReady = false;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != '' && board[i][j] == board[i + 1][j + 1] && board[i][j] == board[i + 2][j + 2] && board[i][j] == board[i + 3][j + 3] && board[i][j] == board[i + 4][j + 4]) {
                alert('Player ' + player + ' Win!');
                gameReady = false;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != '' && board[i][j] == board[i - 1][j + 1] && board[i][j] == board[i - 2][j + 2] && board[i][j] == board[i - 3][j + 3] && board[i][j] == board[i - 4][j + 4]) {
                alert('Player ' + player + ' Win!');
                gameReady = false;
            }
        }
    }
}