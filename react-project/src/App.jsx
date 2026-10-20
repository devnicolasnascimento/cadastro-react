import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function handleDecrementar() {
        if(count <= 0) {
            return;
        } else {
            setCount(count-1);
        }
    }

    return (
        <>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count+1)}>Aumentar</button>
            <button onClick={handleDecrementar}>Diminuir</button>

        </>
    );
}

export default App;