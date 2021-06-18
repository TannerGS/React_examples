// Ticking clock component

function Clock() {
    return (
        <div className="App">
            <h1>Ticking Clock</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
            <hr></hr>
        </div>
    );
}

setInterval(Clock, 1000)

export default Clock