import Image from 'next/image';
import { SlideRight, SlideUp } from '../AnimationBox';
import BlockTitle from '../Common/BlockTitle';

export default function About() {
  return (
    <SlideUp>
      <section className="p-5 md:px-10 bg-gray-100 mt-5 rounded-lg relative">
        <BlockTitle title="About Project" />
        <div className="flex gap-12 flex-col md:flex-row items-center">
          <div className="justify flex-0">
            <SlideRight>
              <Image src="/me.jpg" itemProp="image" alt="Interview" width={300} height={300} className="rounded-lg" />
            </SlideRight>
          </div>
          <div className="justify flex-1">
            <p className="mb-3">
              As a seasoned full-stack developer with over 7 years of experience in JavaScript, Node.js, React, and TypeScript, I know firsthand how crucial the right preparation is for landing a great job in tech.
              My mission is to help you sharpen your skills, build confidence, and navigate technical interviews successfully—all for <b className="accent__text">FREE</b>.
            </p>
            <p className="mb-3">
              I&apos;ve worked on large-scale projects, startups, and business automation, mastering everything from backend architecture to frontend optimization.
              Now, I&apos;m sharing my knowledge so you can gain real-world coding skills, crack interviews, and secure the job you deserve.
            </p>
            <p className="mb-3">
              Whether you&apos;re starting your journey or looking to level up, I provide structured problem-solving approaches, expert insights, and hands-on exercises to help you stand out.
              Let&apos;s work together to take that next big step in your career.
            </p>
            <p>
              Your dream job is within reach—let’s make it happen.
            </p>
          </div>

        </div>
      </section>
    </SlideUp>
  )
}
