const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')
const button7 = document.getElementById('button7')
const button8 = document.getElementById('button8')
const button9 = document.getElementById('button9')
const btnMode = document.getElementById('btn-mode')
let isSinglePlayer = false

btnMode.addEventListener('click', function () {
    if (isSinglePlayer) {
        isSinglePlayer = false
        btnMode.innerText = 'Modo de Jogo: Multiplayer'
    } else {
        isSinglePlayer = true
        btnMode.innerText = 'Modo de Jogo: Contra a Máquina'
    }
})

const matrix = [[button1, button2, button3], [button4, button5, button6], [button7, button8, button9]]

function checkWin() {
    let winner = false
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0].innerHTML === "X" || matrix[i][0].innerHTML === "O") {
            if (matrix[i][0].innerHTML === matrix[i][1].innerHTML && matrix[i][0].innerHTML === matrix[i][2].innerHTML) {
                winner = true
            }
        }
        if (matrix[0][i].innerHTML === "X" || matrix[0][i].innerHTML === "O") {
            if (matrix[0][i].innerHTML === matrix[1][i].innerHTML && matrix[0][i].innerHTML === matrix[2][i].innerHTML) {
                winner = true
            }
        }
    }
    if (matrix[0][0].innerHTML === "X" || matrix[0][0].innerHTML === "O") {
        if (matrix[0][0].innerHTML === matrix[1][1].innerHTML && matrix[0][0].innerHTML === matrix[2][2].innerHTML) {
            winner = true
        }
    }
    if (matrix[0][2].innerHTML === "X" || matrix[0][2].innerHTML === "O") {
        if (matrix[0][2].innerHTML === matrix[1][1].innerHTML && matrix[0][2].innerHTML === matrix[2][0].innerHTML) {
            winner = true
        }
    }
    return winner
}

function checkDraw() {
    let draw = true
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].innerHTML === "") {
                draw = false
            }
        }
    }
    return draw
}

function end() {
    button1.disabled = true
    button2.disabled = true
    button3.disabled = true
    button4.disabled = true
    button5.disabled = true
    button6.disabled = true
    button7.disabled = true
    button8.disabled = true
    button9.disabled = true
}

let turn = 0

function computerPlayEasy() {
    arrSegundaJogado = [button1, button3, button7, button9]
    let lin = Math.floor(Math.random() * 4)
    console.log(lin);
    console.log(arrSegundaJogado[lin].innerHTML);
    if (button1.innerHTML != '' && button3.innerHTML != '' && button7.innerHTML != '' && button9.innerHTML !== '') {
        let line = Math.floor(Math.random() * 3)
        let column = Math.floor(Math.random() * 3)
        if (matrix[line][column].innerHTML == "") {
            matrix[line][column].innerHTML = "O"
            matrix[line][column].disabled = true
        } else {
            computerPlayEasy()
        }
    } else {
        if (arrSegundaJogado[lin].innerHTML == "X" || arrSegundaJogado[lin].innerHTML == "O") {
            computerPlayEasy()
        } else {
            arrSegundaJogado[lin].innerHTML !== ''
            arrSegundaJogado[lin].innerHTML = "O"
            arrSegundaJogado[lin].disabled = true

        }
    }

}


function computerPlayEasyX() {
    arrSegundaJogado = [button1, button3, button7, button9]
    let lin = Math.floor(Math.random() * 4)
    console.log(lin);
    console.log(arrSegundaJogado[lin].innerHTML);
    if (button1.innerHTML != '' && button3.innerHTML != '' && button7.innerHTML != '' && button9.innerHTML !== '') {
        let line = Math.floor(Math.random() * 3)
        let column = Math.floor(Math.random() * 3)
        if (matrix[line][column].innerHTML == "") {
            matrix[line][column].innerHTML = "X"
            matrix[line][column].disabled = true
        } else {
            computerPlayEasyX()
        }
    } else {
        if (arrSegundaJogado[lin].innerHTML == "X" || arrSegundaJogado[lin].innerHTML == "O") {
            computerPlayEasyX()
        } else {
            arrSegundaJogado[lin].innerHTML !== ''
            arrSegundaJogado[lin].innerHTML = "X"
            arrSegundaJogado[lin].disabled = true

        }
    }

}


function computerPlayHard() {


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].innerHTML == "") {
                matrix[i][j].innerHTML = "O"
                if (checkWin()) {
                    matrix[i][j].disabled = true
                    return
                } else {
                    matrix[i][j].innerHTML = ""
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].innerHTML == "") {
                matrix[i][j].innerHTML = "X"
                if (checkWin()) {
                    matrix[i][j].innerHTML = "O"
                    matrix[i][j].disabled = true
                    return
                } else {
                    matrix[i][j].innerHTML = ""
                }
            }
        }
    }


    if (button5.innerHTML == '') {
        button5.innerHTML = "O"
        button5.disabled = true
    } else {
        computerPlayEasy()
    }
}


function computerPlayHardX() {


    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].innerHTML == "") {
                matrix[i][j].innerHTML = "X"
                if (checkWin()) {
                    matrix[i][j].disabled = true
                    return
                } else {
                    matrix[i][j].innerHTML = ""
                }
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j].innerHTML == "") {
                matrix[i][j].innerHTML = "O"
                if (checkWin()) {
                    matrix[i][j].innerHTML = "X"
                    matrix[i][j].disabled = true
                    return
                } else {
                    matrix[i][j].innerHTML = ""
                }
            }
        }
    }


    if (button5.innerHTML == '') {
        button5.innerHTML = "X"
        button5.disabled = true
    } else {
        computerPlayEasyX()
    }
}

function play() {
    if (turn % 2 === 0) {
        this.innerHTML = "X"
        this.disabled = true
    } else {
        if (isSinglePlayer) {
            if (btnMode.innerText === 'Modo de Jogo: Contra a Máquina (Fácil)') {
                computerPlayEasy()
            } else {
                computerPlayHard()
            }
        } else {
            this.innerHTML = "O"
            this.disabled = true
        }
    }
    turn++
    if (checkWin()) {
        alert(`Player ${turn % 2 === 0 ? "O" : "X"} wins!`)
        end()
    } else if (checkDraw()) {
        alert("Empate")
    }
}

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[i][j].addEventListener("click", play)
    }
}

const btnjogar = () => {
    button1.disabled = false
    button2.disabled = false
    button3.disabled = false
    button4.disabled = false
    button5.disabled = false
    button6.disabled = false
    button7.disabled = false
    button8.disabled = false
    button9.disabled = false

    button1.innerHTML = ''
    button2.innerHTML = ''
    button3.innerHTML = ''
    button4.innerHTML = ''
    button5.innerHTML = ''
    button6.innerHTML = ''
    button7.innerHTML = ''
    button8.innerHTML = ''
    button9.innerHTML = ''
}

const MvsM = () =>{
    if (turn % 2 === 0) {
        computerPlayHardX()
    } else {
        computerPlayHard()
    }
    turn++
    if (checkWin()) {
        alert(`Player ${turn % 2 === 0 ? "O" : "X"} wins!`)
        end()
    } else if (checkDraw()) {
        alert("Empate")
    }
}
