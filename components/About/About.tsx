import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css'

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section className="p-5 bg-gray-100 mt-5 rounded-lg">
        <h3 className={`text-2xl font-bold text-gray-800 mb-4`}>About Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>
              <Image src="/deal.jpg" ref={ref} alt="Interview" width={500} height={300} className={`rounded-lg ${inView ? styles.image_animated : styles.image}`} />
          </p>
          <p className="justify">
              <p>Our mission is to bring you up to speed with the most up-to-date skills and confidence to ace the technical interview and get you that dream job. Let us help you turn your dreams into reality!</p>
              <p>At JS-Lab, we are committed to helping you conquer technical interviews and land your dream job. You will get all the skill sets, confidence, and preparation to stand out and achieve your goals. Let us help take a giant leap in your career!</p>
          </p>
        </div>
    </section>
  )
}
