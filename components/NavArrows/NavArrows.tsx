import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function NavArrows({prev, next}: {prev: string | null, next: string | null}) {
    return (
        <div className="inline-flex rounded-md overflow-hidden">
            <Link
                href={'/task/' + prev}
                className={`flex items-center px-3 text-center transition-all duration-200 ${prev
                    ? "bg-[#0B2B2A] text-white hover:bg-[#165351]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                property="og:url"
                itemProp="url"
            >
                <IoIosArrowBack size={18} />
            </Link>
            <Link
                href={'/task/' + next}
                className={`flex items-center text-center px-3 transition-all duration-200 ${next
                    ? "bg-[#0B2B2A] text-white hover:bg-[#165351]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                property="og:url"
                itemProp="url"
            >
                <IoIosArrowForward size={18} />
            </Link>
        </div>
    )
}
