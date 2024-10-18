function HeaderComponent({ title, fontStyle, icon, handleShowSidebar }) {
    return (
        <div
            className={`${fontStyle} header-component relative bg-customBlue px-8 py-5 flex items-center justify-between font-thin`}
        >
            <div>{title}</div>
            <div onClick={handleShowSidebar} className="hidden max-custom:block">
                {icon}
            </div>
        </div>
    );
}

export default HeaderComponent;
