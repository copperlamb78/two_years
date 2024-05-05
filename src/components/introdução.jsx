import styles from './introdução.module.css'

export function Introduction() {
    return (
        <div className={styles.introductionBox}>
            <p>Como prova do meu amor e</p>
            <p>gratidão pelo seu apoio</p>
            <p>aos meus estudos...</p>
            <div className={styles.introductionBox}>
                <p>Feliz 2 anos de namoro</p>
                <p>para o amor da </p>
                <a href='https://www.instagram.com/_iza.sousa_/' target='_blank' className={styles.myLife}>Minha Vida</a>
            </div>
        
        </div>
        
    )
}