import Link from 'next/link';
import { ITask } from '@/types';
import styles from './Card.module.css';
import { SlideDown } from '../AnimationBox';
import Labels from '../Labels';
import { FaCode } from "react-icons/fa6";
import Image from 'next/image';

export default function Card({ task }: { task: ITask }) {
    const delay = 0;
    return (
        <SlideDown delay={delay}>
            <div className={`${styles.card} rounded-lg flex flex-col justify-between mb-4`} itemScope itemType="https://schema.org/Task">
                <meta itemProp="name" content={task.title} />
                <meta itemProp="description" content={task.description} />
                <meta itemProp="url" content={'/task/' + task.slug} />
                <div className={styles.level} itemProp="level">{task.levelName}</div>
                <div className={styles.imageWrapper}>
                    <Image src={`/${task.image}`} alt={task.title} width={300} height={300} itemProp="image" />
                </div>

                <div className="pl-4 pr-4 pb-4 pt-[-1]">
                    <div className={`flex flex-col justify-between mb-4 align-start`}>
                        <div>
                            <h4 className={styles.title} itemProp="title">{task.title}</h4>
                            <Labels list={task.tags} />
                        </div>
                    </div>
                    <Link href={'/task/' + task.slug} className={`${styles.startBtn} py-1 px-4 sm:px-6 rounded`} itemProp="url">
                        <FaCode className="mr-1" /> Start Now
                    </Link>
                </div>
            </div>
        </SlideDown>
    );
}
