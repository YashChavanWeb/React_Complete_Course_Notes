import '../App.css'


const ButtonContainer = ({ onButtonClick }) => {

    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']

    return (
        <>
            <div className="button-container">
                {buttons.map((button, index) => (
                    <button key={index} onClick={() => onButtonClick(button)} >{button}</button>
                ))}
            </div>

        </>
    )

}

export default ButtonContainer