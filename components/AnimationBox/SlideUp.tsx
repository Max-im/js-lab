import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './AnimationBox.module.css';

const SlideUp = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        delay
    });

    return (
        // <div ref={ref} style={{animationDelay: `${delay}ms`}} className={inView ? styles.up : styles.stabile}>{children}</div>
        <div ref={ref} className={inView ? styles.up : styles.stabile}>{children}</div>
    )
}

export default SlideUp;