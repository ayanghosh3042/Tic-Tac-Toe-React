export const HandaleClick = ({ children, onClick }) => {
    return (
        <div
            className="size-16 bg-blue-200 m-2 flex items-center justify-center text-3xl font-bold shadow-lg hover:bg-blue-300 transition-colors duration-200"
            onClick={onClick}
        >
            {children}
        </div>
    );
};
