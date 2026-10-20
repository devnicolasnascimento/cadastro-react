
import { useState } from "react";

function Cadastro() {
    const [list, setList] = useState([]);
    const [textoDigitado, setTextoDigitado] = useState("");

    const salvarItem = (e) => {
        e.preventDefault();

        if (!textoDigitado.trim()) return;

        const novoItem = {
            id: Date.now(),
            nome: textoDigitado,
        };

        setList([...list, novoItem]);
        setTextoDigitado("");
    };

    return (
        <>
            <h3>Meu primeiro crud</h3>
            <form onSubmit={salvarItem}>
                <input type="text" placeholder="Digite" className="border-2" value={textoDigitado} onChange={(e) => setTextoDigitado(e.target.value)}/>
                <button type="submit" className="border-2">Adicionar</button>
            </form>

            <ul>
                {
                    list.map((item) => {
                        return <li key={item.id}>{item.nome}</li>
                    })
                }
            </ul>
        </>
    );
}

export default Cadastro;
