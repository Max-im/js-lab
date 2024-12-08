import Link from 'next/link';
import styles from './Common.module.css';

export default function StartBtn() {
    return (
        <Link href="/task" className={`${styles.startBtn} py-2 sm:py-3 px-4 sm:px-6 rounded`}>
            Start Now
        </Link>
    )
}
