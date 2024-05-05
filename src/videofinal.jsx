
import styles from './videofinal.module.css'

export function VideoFinal () {
    return (
        <div>
            <iframe 
            className={styles.videofinal}
            width="560"
            height="315" 
            src="https://www.youtube.com/embed/RlHqGuaBxWU?si=7zLYnTV7Rs4ZBFsx" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowfullscreen>

            </iframe>
      </div>
    )
}

