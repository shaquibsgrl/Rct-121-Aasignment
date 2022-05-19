import React, { useState } from 'react'
import "./TicTacToe.css"

const TicTacToe = () => {
    const [turn, setTurn] = useState('x');
    const [shell, setShell] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState()

    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            digonals: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        }
        for (let combo in combos) {
            combos[combo].forEach((pattern) => {
                if (
                    squares[pattern[0]] == '' ||
                    squares[pattern[1]] == '' ||
                    squares[pattern[2]] == ''
                ) {
                    //do nothing
                } else if (squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] == squares[pattern[2]]) {

                    setWinner(squares[pattern[0]])
                }
                else if(
                    squares[pattern[0]]!== squares[pattern[1]]&&
                    squares[pattern[1]]!== squares[pattern[2]]&&
                    squares[pattern[2]]!== squares[pattern[3]]&&
                    squares[pattern[3]]!== squares[pattern[4]]&&
                    squares[pattern[4]]!== squares[pattern[5]]&&
                    squares[pattern[5]]!== squares[pattern[6]]&&
                    squares[pattern[6]]!== squares[pattern[7]]&&
                    squares[pattern[7]]!== squares[pattern[8]])
                   
                    alert("Match Draw")
                
            })
        }
    }
    const handleClick = (num) => {
        if (shell[num] !== '') {
            alert("already filled");
            return
        }
        let squares = [...shell]
        if (turn === 'x') {
            squares[num] = 'x'
            setTurn('o')
        }
        else {
            squares[num] = 'o'
            setTurn('x')
        }
        setShell(squares)
        checkForWinner(squares)
    };
    const handlestart=()=>{
     setWinner(null);
     setShell(Array(9).fill(''))
    }

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{shell[num]}</td>
    }
    return (
        <div className='container'>

            <table >
                <h3>Turn={turn}</h3>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                    <p>{winner}is the winner!</p>
                    <button onClick={()=>handlestart()}>Play again</button>
                </>
            )}
        </div>
    )
}

export default TicTacToe
