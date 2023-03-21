import { PlusCircle } from 'phosphor-react';
import styles from './InsertList.module.css';

export function InsertList() {
    return (
        // <article>
            <form className={styles.insertForm}>
                <textarea 
                    name="insertList"
                    placeholder="Adicione uma nova tarefa"
                />

                <footer>
                    <a href="#">
                        Criar
                        <PlusCircle size={18} />
                    </a>
                </footer>
            </form>
        // </article>
    )
}