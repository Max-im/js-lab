'use client';

import { useState, useEffect } from 'react'
import Card from './Card'
import { ITask } from '@/types';
import { useInView } from 'react-intersection-observer';

function wait(ms: number = 100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function CardList(params: { tasks: ITask[] }) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [inRow, setInRow] = useState(5);

    useEffect(() => {
        const updateAmount = () => {
            const width = window.innerWidth;
    
            const breakpoints = {
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
            };
    
            let columns = 2;
            if (width >= breakpoints.md && width < breakpoints.lg) {
                columns = 3;
            } else if (width >= breakpoints.lg && width < breakpoints.xl) {
                columns = 4;
            } else if (width >= breakpoints.xl) {
                columns = 5;
            }
    
            setInRow(columns);
        };
    
        updateAmount();
        window.addEventListener("resize", updateAmount);
    
        return () => {
            window.removeEventListener("resize", updateAmount);
        };
    }, []);
    
    useEffect(() => {
        if (inView) {
            onAdd();
        }
    }, [inView]);

    const onAdd = async () => {
        let amount = 0;
        if (tasks.length === 0) {
            amount = inRow;
        } else if (tasks.length % inRow === 0) {
            amount = inRow;
        } else {
            amount = inRow - (tasks.length % inRow);
        }
        const newTasks = params.tasks.slice(tasks.length, tasks.length + amount);
        for (const task of newTasks) {
            setTasks(prevTasks => {
                if (!prevTasks.some(t => t.slug === task.slug)) {
                    return [...prevTasks, task];
                }
                return prevTasks;
            });
            await wait(200);
        }
    }

    return (
        <>
            <div className={`mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 xl:gap-3 justify-items-center`}>
                {tasks.map((task) => <Card task={task} key={task.slug} />)}
            </div>
            <div ref={ref} className="loading"><span className="spinner"></span></div>
        </>
    )
}
