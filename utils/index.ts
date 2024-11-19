import { ITask } from '@/types';
import content from '../content';

export const getTasks = () => {
    return content as ITask[];
}
