// Button example

import React, {useState} from 'react';

function Button() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <h1>Button</h1>
            <button onClick={() => {setCounter(counter + 1)}}>Increase Counter</button>
            <h3>{counter}</h3>
            <hr></hr>
        </div>
    )
}

export default Button;