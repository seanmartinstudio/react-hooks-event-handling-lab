// Code Keypad Component Here
import React from 'react';

function Keypad() {
    function handleInput(event) {
        console.log("Entering password...")
}

return (
<div>
    <input type="password" name="search" onChange={handleInput} placeholder="Enter here..." /> 
</div>
)
}


export default Keypad;