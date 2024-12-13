import Image from 'next/image';
import { SlideRight, SlideUp } from '../AnimationBox';
import BlockTitle from '../Common/BlockTitle';

export default function About() {
  return (
    <SlideUp>
      <section className="p-5 md:px-10 bg-gray-100 mt-5 rounded-lg relative">
        <BlockTitle title="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SlideRight>
            <Image src="/deal.jpg" itemProp="image" alt="Interview" width={500} height={300} className="rounded-lg" />
          </SlideRight>
          <div className="justify">
            <p className="mb-3">
              Our mission is to equip you with the latest skills, along with the confidence to ace technical interviews and land your dream job-all absolutely <b className="accent__text">FREE</b>.
              At JS-Lab, we are committed to your success by providing expert guidance in the form of practical preparation and essential tools absolutely free of cost.
            </p>
            <p className="mb-3">
              Whether you&apos;re getting started or leveling up, you&apos;ll learn with confidence and get the skills to stand out and achieve your goals.
              We&apos;ll help you take that giant leap in your career.
            </p>
            <p>
              Your dream job awaits, and we&apos;re ready to make it happen.
            </p>
          </div>
        </div>
      </section>
    </SlideUp>
  )
}
