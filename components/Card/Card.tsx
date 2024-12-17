import * as React from 'react';
import Link from 'next/link';
import { ITask } from '@/types';
import styles from './Card.module.css';
import { SlideDown } from '../AnimationBox';
import Labels from '../Labels';
import { FaCode } from "react-icons/fa6";

export default function Card({ task }: { task: ITask}) {
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

    const delay = 0;

    const truncateDescription = (description: string, maxLength: number) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    return (
        <SlideDown delay={delay}>
            <div className={`${styles.card} rounded-lg flex flex-col justify-between mb-4`} itemScope itemType="https://schema.org/Task">
                <meta itemProp="name" content={task.title} />
                <meta itemProp="description" content={task.description} />
                <meta itemProp="url" content={'/task/' + task.slug} />
                <div className={styles.level} itemProp="level">{task.levelName}</div>

                <div className={`flex flex-col justify-between ${styles.contenWrapper}`}>
                    <div>
                        <h4 className={styles.title} itemProp="title">{task.title}</h4>
                        <Labels list={task.tags} />
                        <p className={styles.description} itemProp="description">
                            {truncateDescription(task.description, maxDescriptionLength)}
                        </p>
                    </div>
                </div>
                <Link href={'/task/' + task.slug} className={`${styles.startBtn} py-1 px-4 sm:px-6 rounded`} itemProp="url">
                    <FaCode className="mr-1" /> Start Now
                </Link>
            </div>
        </SlideDown>
    );
}
