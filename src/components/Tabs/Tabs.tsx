import clsx from 'clsx'
import styles from './Tabs.module.css'

export type TabItem = {
    label: string,
    value: any
}

export type TabsProps = {
    tabs: TabItem[],
    onChange?: (value: any) => void,
    selected: any
}

export function Tabs ({ tabs, onChange, selected }: TabsProps) {
    return (
        <div className={styles.Tabs}>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={clsx(styles.Tab, { [styles.TabActive]: tab.value === selected })}
                    onClick={() => onChange?.(tab.value)}
                >{tab.label}</div>
            ))}
        </div>
    )
}