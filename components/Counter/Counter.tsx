'use client';

import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function Counter({ num, className = '' }: { num: number, className: string }) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <span ref={ref} className={className}>
            {inView && <CountUp start={0} end={num} duration={2.5} />}
        </span>
    )
}
