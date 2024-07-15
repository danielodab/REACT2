import { useState } from "react"

export function Exercicio3() {
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([]) // [ '', '']

    function handleSubmit(event) {
        event.preventDefault()

        if(texto) {
            setLista(listaAnterior => {
                return [...listaAnterior, texto]
            })
        }
    }

    return (
        <div className="container mt-4">
            <h3>Exercício 3</h3>
            <form onSubmit={handleSubmit} className="mb-4">
                <input type="text" className="form-control" onChange={event => setTexto(event.target.value)} />
                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <p>
                <strong className="block mt-4">Lista:</strong>
            </p>

            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}