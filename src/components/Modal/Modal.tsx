import { useEffect } from 'react'
import styles from './Modal.module.css'
import { createPortal } from 'react-dom'

export type ModalProps = {
    onClose: () => void,
    children: React.ReactNode,
    portal?: string,
}

export function Modal({ onClose, children, portal = 'modal-root' }: ModalProps) {
    useEffect(() => {
        window.document.body.classList.add(styles.DisableScroll)
        return () => {
            window.document.body.classList.remove(styles.DisableScroll)    
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
        document.getElementById(portal) as HTMLElement
    )
}