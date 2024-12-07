import { ReactNode } from "react";
import { useInView } from 'react-intersection-observer';
import styles from './AnimationBox.module.css';

const SlideDown = ({ children }: Readonly<{ children: ReactNode }>) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });
    return (
        <div ref={ref} className={inView ? styles.animated : styles.stabile}>{children}</div>
    )
}

export default SlideDown;