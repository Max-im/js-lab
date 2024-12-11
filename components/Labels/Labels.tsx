import styles from './Labels.module.css';

export default function Labels({ list }: { list: string[] }) {
    return (
        <ul className="mt-3 mb-3 flex flex-wrap">
            {list.map(tag => <li key={tag} className={styles.tag}>
                {tag}
            </li>)}
        </ul>
    )
}
