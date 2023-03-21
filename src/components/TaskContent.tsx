import styles from './TaskContent.module.css';
import { Trash } from "phosphor-react";

interface TaskContentProps {
    content: string;
    isChecked: boolean;
    onDeleteTask: (task: string) => void;
}

export function TaskContent ({ content, isChecked = false, onDeleteTask }: TaskContentProps) {

    function handleDeleteComment() {
        onDeleteTask(content);
    }

    return (
        <div className={styles.tasksContent}>
            <div>
                <input type="checkbox" />
                <span>{content}</span>
                <button onClick={handleDeleteComment} title="Deletar tarefa">
                    <Trash size={24} />
                </button>
            </div>
        </div>
    )
}