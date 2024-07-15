import { useState } from "react"

export function Exercicio5() {

  
    const [texto, setTexto] = useState(null)


    return (
        <div className="container mt-4">
            <h3>Exercício 5</h3>
            <input 
                    placeholder="Informe seu nome" 
                    className="form-control" 
                    onChange={(event) => setTexto(event.target.value)} />

            <span>{texto}</span>
        </div>
    )
}