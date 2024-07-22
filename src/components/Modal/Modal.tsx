import { useEffect } from 'react'
import styles from './Modal.module.css'
import { createPortal } from 'react-dom'

export type ModalProps = {
    onClose: () => void,
    children: React.ReactNode
}

export function Modal({ onClose, children }: ModalProps) {
    useEffect(() => {
        window.document.body.classList.add('disable-scroll')
        return () => {
            window.document.body.classList.remove('disable-scroll')    
        }
    })

    return createPortal((
        <div className={styles.Modal}>
            <div className={styles.ModalOverlay} onClick={onClose}></div>
            <div className={styles.ModalContentWrapper} onClick={onClose}>
                <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
        ),
        document.getElementById('modal-root') as HTMLElement
    )
}