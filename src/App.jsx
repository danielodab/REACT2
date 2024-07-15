import { Exercicio1 } from "./pages/exercicio1.jsx"
import { Exercicio2 } from "./pages/exercicio2.jsx"
import { Exercicio3 } from "./pages/exercicio3.jsx"
import { Exercicio4 } from "./pages/exercicio4.jsx"
import { Exercicio5 } from "./pages/exercicio5.jsx"
import './App.css'


function App() {
  
    return (
        <>
        <div className="container">
            <Exercicio1/>
        </div>
        <hr></hr>
        <div className="container">
            <Exercicio2/>
        </div>
        <hr></hr>
        <div className="container">
            <Exercicio3/>
        </div>
        <hr></hr>
        <div className="container">
            <Exercicio4/>
        </div>
        <hr></hr>
        <div className="container">
            <Exercicio5/>
        </div>
        </>

    )   

  
}
  
  export default App
  