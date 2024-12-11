import * as React from 'react';
import Link from 'next/link';
import { ITask } from '@/types';
import styles from './Card.module.css';
import { SlideDown } from '../AnimationBox';
import Labels from '../Labels';

export default function Card({ task, index }: { task: ITask, index: number }) {
    const [maxDescriptionLength, setMaxDescriptionLength] = React.useState(100);

    React.useEffect(() => {
        const updateMaxDescriptionLength = () => {
            if (window.innerWidth < 768) {
                setMaxDescriptionLength(50);
            } else {
                setMaxDescriptionLength(100);
            }
        };

        updateMaxDescriptionLength();
        window.addEventListener('resize', updateMaxDescriptionLength);

        return () => {
            window.removeEventListener('resize', updateMaxDescriptionLength);
        };
    }, []);

    const delay = (index + 1) * 150;

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    return (
        <SlideDown delay={delay}>
            <div className={`${styles.card} rounded-lg flex flex-col justify-between`}>
                <div className={styles.level}>{task.levelName}</div>

                <div className={`flex flex-col justify-between ${styles.contenWrapper}`}>
                    <div>
                        <h4 className={styles.title}>{task.title}</h4>
                        <p className={styles.description}>
                            {truncateDescription(task.description, maxDescriptionLength)}
                        </p>
                    </div>
                    <Labels list={task.tags} />
                </div>
                <Link href={'/task/' + task.slug} className={`${styles.startBtn} py-1 px-4 sm:px-6 rounded`}>
                    Start Now
                </Link>
            </div>
        </SlideDown>
    );
}
