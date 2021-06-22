import SampleAPI from '../src/api/SampleAPI.js';
import React, {useState} from 'react';

/*
function CallAPI () {
    const [endpoint, setEndpoint] = useState('')

    return (
        <div className="App">
            <h1>Sample Api</h1>
            <button onClick={SampleAPI}>Hit API Endpoint</button>
            <hr></hr>
        </div>
    )
}
*/

const CallAPI = () => {
    const [endpoint, setEndpoint] = useState('')

    return (
        <div className="App">
            <h1>Sample Api</h1>
            <button onClick={SampleAPI}>Hit API Endpoint</button>
            <hr></hr>
        </div>
    )
}


export default CallAPI;