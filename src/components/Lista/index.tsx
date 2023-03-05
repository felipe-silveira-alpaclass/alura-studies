import React from "react";
import './style.scss'

function Lista() {
  const tarefas = [
    {
      tarefa: "Tarefa 1",
      tempo: "01:00:00",
    },
    {
      tarefa: "Tarefa 2",
      tempo: "01:30:00",
    },
  ];

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      {tarefas.map((item, index) => (
        <li key={index} className="item">
          <h3>{item.tarefa}</h3>
          <span>{item.tempo}</span>
        </li>
      ))}
    </aside>
  );
}

export default Lista;
