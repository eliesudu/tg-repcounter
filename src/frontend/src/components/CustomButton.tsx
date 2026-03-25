type CustomButtonProps = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

function CustomButton({label, onClick, disabled = false}: CustomButtonProps) {
    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
}

export default CustomButton;