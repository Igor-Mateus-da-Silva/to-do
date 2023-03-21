import { Clipboard } from 'phosphor-react';
import { useState } from 'react';
import { TaskContent } from './TaskContent';
import styles from './Tasks.module.css';

interface TaskType {
    id: number;
    content: string;
    check: boolean;
}

// interface TaskProps {
//     tasks: TaskType;
// }

// const tasks: TasksType[] = [];
// const tasks = [
//     'Primeiro teste de task',
//     'Essa é a primeira Task, vale lembrar que: Palmeiras não tem Mundial!Não tem e nunca vai ter mundial... RSRSRS', 
//     'Essa é a segunda Task, vale lembrar que: Palmeiras não tem Mundial! Não tem e nunca vai ter mundial... RSRSRS', 
//     'Essa é a terceira Task, vale lembrar que: Palmeiras não tem Mundial! Não tem e nunca vai ter mundial... RSRSRS', 
//     'Essa é a quarta Task, vale lembrar que: Palmeiras não tem Mundial! Não tem e nunca vai ter mundial... RSRSRS'
// ];

// const tasks: TaskType[] = [];

const tasks: TaskType[] = [
    {
        id: 1,
        content: 'Content de Teste',
        check: false,
    }
];

export function Tasks () {

    function deleteTask(){
        console.log('Deletou a Task')
    }
    
    return (
        <div>
            <header className={styles.infoTasks}>
                <strong className={styles.tasksCreated}>Tarefas criadas <span>{tasks.length}</span></strong>
                <strong className={styles.tasksDone}>Concluidas <span>0 de {tasks.length}</span></strong>
            </header>

            { tasks.length === 0 ? 
                <div className={styles.noTasksContent}>
                    <div className={styles.noTasks}>
                        <Clipboard size={56}/>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                </div> :
                tasks.map(tasks =>{
                    return (
                        <TaskContent 
                            key={tasks.id} 
                            content={tasks.content}
                            isChecked={tasks.check}
                            onDeleteTask={deleteTask}  
                        />
                    )
                })
            }

        </div>
    )
}