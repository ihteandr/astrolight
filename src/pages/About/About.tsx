import styles from './About.module.css'
export function AboutPage () {
    return (
        <div className={styles.About}>
            <p>
                Источником информации для проекта послужили книги Воронского С.А. и Александра Айча
            </p>
            <p>
                Также система активна использует Open Ai.
            </p>

            <p>
                Автор Проекта: Владимир Гукасян
            </p>

            <p>
                Вдохновитель Проекта: AstroDao
            </p>

            <p>
                Дизайнер Проекта: Armina
            </p>

            <p>
                По вопросом и пожеланиям пишите на ghukasyan.vladimir@gmail.com
            </p>
        </div>
    )
}