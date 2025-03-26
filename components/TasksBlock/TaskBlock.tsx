import BlockTitle from '../Common/BlockTitle';
import { SlideUp } from '../AnimationBox';
import StartBtn from '../Common/StartBtn';
import Counter from '../Counter';

const TaskBlock = ({ num }: { num: number }) => {
  return (
    <SlideUp>
      <section className="relative bg-gray-100 p-5 md:px-10 rounded-lg mt-5">
        <BlockTitle title="Tasks" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-2">
              Dive into our extensive library of tasks designed to enhance your skills and prepare you for real-world challenges.
            </p>
            <p className="mb-4">
              Choose from three levels of complexity: <b className="accent__text">Easy</b>, <b className="accent__text">Medium</b>, and <b className="accent__text">Hard</b>, and progress at your own pace!
            </p>
            <div className="hidden md:block" style={{ maxWidth: '150px' }}>
              <StartBtn />
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-semibold">Available Tasks:</h4>
            <Counter num={num} className='text-slate-400 text-9xl font-bold' />
            <div className="md:hidden">
              <StartBtn />
            </div>
          </div>
        </div>
      </section>
    </SlideUp>
  );
}

export default TaskBlock;
