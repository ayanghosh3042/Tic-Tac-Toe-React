const ResetBtn = ({ children, onReset }) => {
    return (
        <button
            className="text-blue-600 bg-amber-300 w-40 h-20 rounded-md text-2xl shadow-lg hover:bg-amber-400 transition-colors duration-200 cursor-pointer font-bold"
            type="button"
            onClick={onReset}
        >
            {children || "Click me"}
        </button>
    );
};
export default ResetBtn;
// Usage example:
// <ResetBtn onReset={() => console.log("Game reset!")} />
// This component can be used in the main App component or wherever you need a reset button.
// It takes an `onReset` prop which is a function to be called when the button is clicked.
// You can style the button using CSS to match your application's design.
// Example CSS for the reset button:
// .reset-btn {
//     padding: 10px 20px;
//     background-color: #f00;
//     color: #fff;
//     border: none;
//     border-radius: 5px;

//     cursor: pointer;

//     font-size: 16px;

//     transition: background-color 0.3s;
// }
