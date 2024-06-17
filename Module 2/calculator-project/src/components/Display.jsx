import '../App.css'


const Display = ({ inputValue }) => {

    return (
        <>
            <input type='text' className="display" value={inputValue} readOnly />
        </>
    )
}

export default Display