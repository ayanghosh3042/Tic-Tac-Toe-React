export const ScoreCard = ({ playerXScore, playerOScore }) => {
    return (
        <div className="flex justify-center gap-10 p-4 m-4 bg-gray-100 shadow-md rounded-lg">
            <h1 className="text-5xl">Score Card</h1>
            <div className="text-center">
                <h2 className="text-xl font-semibold">Player X</h2>
                <p className="text-2xl font-bold">{playerXScore}</p>
            </div>
            <div className="text-center">
                <h2 className="text-xl font-semibold">Player O</h2>
                <p className="text-2xl font-bold">{playerOScore}</p>
            </div>
        </div>
    );
};
export default ScoreCard;
// Usage example:
// <ScoreCard playerXScore={3} playerOScore={2} />
