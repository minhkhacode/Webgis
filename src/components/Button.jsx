function Button({ content, customStyle, icon, onClick }) {
    return (
        <button
            className={`bg-customBlue text-white py-3 px-4 flex items-center space-x-2 hover:bg-blue-600 transition duration-300 max-custom:w-[100%] max-custom:my-2 max-custom:justify-center ${customStyle}`}
            onClick={onClick}
        >
            {icon ? <div className="">{icon ? <div className="text-2xl">{icon}</div> : <></>}</div> : <></>}
            <span>{content}</span>
        </button>
    );
}

export default Button;
