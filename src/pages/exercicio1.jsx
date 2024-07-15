import { useState } from "react"

export function Exercicio1() {

  
    const [contador, setContador] = useState(0)

    return (
        <div className="exercicio">
           <h3>Exercício 1</h3>
           <div>
            <button onClick={() => setContador(prevState => prevState - 1)} > - </button>
            <span>{contador}</span>
            <button onClick={() => setContador(prevState => prevState + 1)} > + </button>
           </div>
            
        </div>
    )
}