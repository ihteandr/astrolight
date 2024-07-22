import { useEffect } from 'react'
import styles from './SideModal.module.css'

export type ModalProps = {
    onClose: () => void,
    children: React.ReactNode,
    leftBar?: React.ReactNode
}

export function SideModal({ onClose, leftBar, children }: ModalProps) {
    useEffect(() => {
        window.document.body.classList.add('disable-scroll')
        return () => {
            window.document.body.classList.remove('disable-scroll')    
        }
    })

    return (
        <div className={styles.SideModal}>
            <div className={styles.SideModalOverlay} onClick={onClose}></div>
            <div className={styles.SideModalContentWrapper} onClick={onClose}>
                <div className={styles.SideModalLeftBar}>
                    {leftBar}
                </div>
                <div className={styles.SideModalContent} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}