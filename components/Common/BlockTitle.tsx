'use client';

import { SlideDown } from '../AnimationBox'

export default function BlockTitle({title}: {title: string}) {
  return (
    <SlideDown>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    </SlideDown>
  )
}
