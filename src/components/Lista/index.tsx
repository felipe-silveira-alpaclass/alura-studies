import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss"

function Lista({tarefas} : {tarefas: ITarefa[]}) {

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      {tarefas.map((item, index) => (
        <Item 
          key={index}
          // tarefa={item.tarefa}
          // tempo={item.tempo}
          {...item}
        />
      ))}
    </aside>
  );
}

export default Lista;
