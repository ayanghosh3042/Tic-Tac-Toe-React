import React, { useState } from "react";
import ResetBtn from "./ResetBtn";
import ScoreCard from "./ScoreCard";
import Message from "./Message";

function Row({ children }) {
    return <div>{children}</div>;
}
function Cell({ value, onClick }) {
    return (
        <div
            className="size-30 bg-blue-200 flex items-center justify-center text-7xl font-bold  shadow-lg hover:bg-blue-300 transition-colors duration-200"
            onClick={onClick}
        >
            {value}
        </div>
    );
}

function CheckWinner(cells) {
    /**
     * 0 1 2
     * 3 4 5
     * 6 7 8
     */
    for (let i = 0; i < 3; i++) {
        if (
            cells[0 + i * 3] &&
            cells[0 + i * 3] === cells[1 + i * 3] &&
            cells[0 + i * 3] === cells[2 + i * 3]
        ) {
            console.log("Winner is: " + cells[0 + i * 3]);
            return cells[0 + i * 3];
        } else if (
            cells[i] &&
            cells[i] === cells[i + 3] &&
            cells[i] === cells[i + 6]
        ) {
            console.log("Winner is: " + cells[i]);
            return cells[i];
        }
    }

    if (cells[4]) {
        if (cells[0] === cells[4] && cells[0] === cells[8]) {
            console.log("Winner is: " + cells[4]);
            return cells[0];
        } else if (cells[2] === cells[4] && cells[2] === cells[6]) {
            console.log("Winner is: " + cells[4]);
            return cells[4];
        }
    }
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i]) {
            console.log("Game in Progress");
            return "Game in Progress";
        }
    }
    console.log("It's a Draw!");
    return "Draw";
}

function updateScore(score, winner) {
    if (winner === "X") {
        score.playerX += 1;
    } else if (winner === "O") {
        score.playerO += 1;
    }
}

const Board = () => {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState("X");
    const [Score, setScore] = useState({ playerX: 0, playerO: 0 });
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (cells[index]) return;

        const nextCells = cells.slice();
        nextCells[index] = turn;
        setCells(nextCells);
        setTurn(turn === "X" ? "O" : "X");

        let winner = CheckWinner(nextCells);
        if (winner === "X") {
            setWinner("X");
            updateScore(Score, "X");
            setCells(Array(9).fill(null));
            setTurn("O");
        } else if (winner === "O") {
            setWinner("O");
            updateScore(Score, "O");
            setCells(Array(9).fill(null));
            setTurn("X");
        } else if (winner === "Draw") {
            setWinner("Draw");
            setCells(Array(9).fill(null));
        } else {
            setWinner(null);
        }
    };

    return (
        <div>
            <div>
                <ScoreCard
                    playerXScore={Score.playerX}
                    playerOScore={Score.playerO}
                />
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <Row>
                        <Cell value={cells[0]} onClick={() => handleClick(0)} />
                        <div className="border-y-6 border-black-500">
                            <Cell
                                value={cells[1]}
                                onClick={() => handleClick(1)}
                            />
                        </div>
                        <Cell value={cells[2]} onClick={() => handleClick(2)} />
                    </Row>
                </div>
                <div className="border-x-6 border-black-500">
                    <Row>
                        <Cell value={cells[3]} onClick={() => handleClick(3)} />
                        <div className="border-y-6 border-black-500">
                            <Cell
                                value={cells[4]}
                                onClick={() => handleClick(4)}
                            />
                        </div>
                        <Cell value={cells[5]} onClick={() => handleClick(5)} />
                    </Row>
                </div>
                <div>
                    <Row>
                        <Cell value={cells[6]} onClick={() => handleClick(6)} />
                        <div className="border-y-6 border-black-500">
                            <Cell
                                value={cells[7]}
                                onClick={() => handleClick(7)}
                            />
                        </div>
                        <Cell value={cells[8]} onClick={() => handleClick(8)} />
                    </Row>
                </div>
            </div>
            <div className="flex items-center justify-center gap-9 p-4 m-4">
                <ResetBtn
                    onReset={() => {
                        console.log("Start new!");
                        setCells(Array(9).fill(null));
                        setTurn("X");
                    }}
                >
                    Reset Board
                </ResetBtn>
                <ResetBtn
                    onReset={() => {
                        console.log("Game reset!");
                        setScore({ playerX: 0, playerO: 0 });
                    }}
                >
                    Reset Score
                </ResetBtn>
            </div>
            <div className="flex items-center justify-center">
                <Message winner={winner} turn={turn} />
            </div>
        </div>
    );
};
export default Board;
