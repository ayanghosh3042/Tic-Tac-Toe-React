export const Message = ({ winner, turn }) => {
    if (winner === "X" || winner === "O") {
        return (
            <div>
                <div className="text-2xl font-bold text-green-600">
                    Winner: {winner}
                </div>
                <div className="text-2xl font-bold text-purple-600">
                    Next Game {turn}'s Turn
                </div>
            </div>
        );
    } else if (winner === "Draw") {
        return (
            <div>
                <div className="text-2xl font-bold text-yellow-600">
                    It's a Draw!
                </div>
                <div className="text-2xl font-bold text-purple-600">
                    Next Game {turn}'s Turn
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="text-2xl font-bold text-blue-600">
                    Game in Progress
                </div>
                <div className="text-2xl font-bold text-purple-600">
                    {turn}'s Turn
                </div>
            </div>
        );
    }
};

export default Message;
