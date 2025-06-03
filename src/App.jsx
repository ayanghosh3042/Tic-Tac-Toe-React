import React from "react";

import "./App.css";
import Board from "./components/board";

function App() {
    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center">
            <Board />
        </div>
    );
}

export default App;
