
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


    const removerItem = (id) => {
        const listaFiltrada = list.filter((item) => {
            return item.id !== id;
        })

        setList(listaFiltrada);
    }

    return (
        <div className="p-4">
            <h3 className="text-2xl">Meu primeiro crud</h3>
            <form onSubmit={salvarItem}>
                <div className="flex gap-2">
                    <input type="text" placeholder="Digite" className="border-2 rounded-sm p-2" value={textoDigitado} onChange={(e) => setTextoDigitado(e.target.value)} />
                    <button type="submit" className="border-2 rounded-sm bg-green-400 text-white border-black">Adicionar</button>
                </div>
            </form>

            <ul>
                {
                    list.map((item) => {
                        return (
                        <div className="bg-gray-200 rounded-sm flex gap-5">
                            <li key={item.id}>
                                {item.nome}
                                <button type="button" onClick={() => removerItem(item.id)} className="border-2 border-red-500 p-2">Remover</button>
                            </li>
                        </div>                            
                        
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Cadastro;
