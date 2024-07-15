import { useEffect, useState } from "react"

export function Exercicio2() {

  
    const [texto, setTexto] = useState(null)

    async function getData() {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        const data = await response.json()
        const titulo = data.items[0].titulo
        
        setTexto(titulo)
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className="">
            <h3>Exercício 2</h3>
           <h1>Noticias: </h1>

            <p>{texto}</p>
            
        </div>
    )
}