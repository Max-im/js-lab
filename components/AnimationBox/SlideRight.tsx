import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './AnimationBox.module.css';

const SlideRight = ({ children }: Readonly<{ children: ReactNode }>) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div ref={ref} className={inView ? styles.right : styles.stabile}>{children}</div>
    )
}

export default SlideRight;