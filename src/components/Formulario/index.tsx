import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './Formulario.module.scss'
class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}])
    this.setState({
      tarefa: "",
      tempo: "00:00"
    })
  }



  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor={style.tarefa}>Tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={mudou => this.setState({
              ...this.state,
              tarefa: mudou.target.value
            })}
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <input
            type="time"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={batatafrita => this.setState({
              ...this.state,
              tempo: batatafrita.target.value
            })}
            min="00:00:00"
            max="12:30:00"
            required
          />
        </div>
        <Botao
          type="submit"
          texto="Adicionar"
        />
      </form>
    );
  }
}

export default Formulario;
