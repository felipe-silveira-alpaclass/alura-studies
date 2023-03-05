import react from "react";
import Botao from "../Botao";
import './style.scss';

class Formulario extends react.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Tarefa</label>
          <input 
            type="text" 
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
        />
        </div>
        <div className="inputContainer">
          <input 
            type="time" 
            name="tarefa" 
            id="tarefa"
            min="00:00:00"
            max="01:30:00"
            required
        />  
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
