import Link from 'next/link';
import { Task } from '@/app/models/Task';
import styles from './LabelsFilter.module.css';

export default function LabelsFilter({ searchParams }: { searchParams: URLSearchParams }) {
    const labels = Task.getLabels();
    let currentParams: URLSearchParams;
    if (searchParams) {
        currentParams = new URLSearchParams(searchParams);
    }

    return (
        <>
            <h3 className="text-2xl font-bold mt-4">Filter by Label</h3>
            <div className="container mx-auto py-6 flex overflow-x-auto">
                {labels.map((label: string) => {
                    const updatedParams = new URLSearchParams(currentParams.toString());
                    updatedParams.set('label', label);

                    return (
                        <Link
                            key={label}
                            href={'/task?' + updatedParams.toString()}
                            className={`${styles.btn} ${currentParams.get('label')?.toLowerCase() === label.toLowerCase() ? styles.btn_active : ''} py-1 px-4 sm:px-6 mr-2 rounded`}
                            itemProp="url"
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>
        </>
    )
}
