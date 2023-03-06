import React from "react";
import style from './Botao.module.scss'

class Botao extends React.Component<{ 
  texto: string, 
  type?: "button" | "submit" | "reset" | undefined }> {
  render() {
    return (
        <button 
          className={style.botao}
          type={this.props.type ?? "button"}
        >
          {this.props.texto}
        </button>);
  }
}

export default Botao;
