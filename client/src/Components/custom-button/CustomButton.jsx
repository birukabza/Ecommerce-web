import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button
        className={`${inverted ? "invert" : ""} 
    ${isGoogleSignIn ? "google-button" : ""} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
