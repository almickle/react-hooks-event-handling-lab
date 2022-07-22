// Code Keypad Component Here

function Keypad (){

    const callback = () => console.log("Entering password...")

    return (
        <div>
            <input type="password" onChange={callback}></input>
        </div>
    )
}

export default Keypad;