import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const ArrowLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <Link
        href={href}
        className="bg-[#0B2B2A] flex items-center text-center transition-all duration-200 px-3 text-white hover:bg-[#165351]"
        property="og:url"
        itemProp="url"
    >
        {children}
    </Link>
);

const DisabledArrow = ({ children }: { children: React.ReactNode }) => (
    <p className="flex items-center text-center transition-all duration-200 bg-gray-300 px-3 text-gray-500 cursor-not-allowed">
        {children}
    </p>
);

export default function NavArrows({ prev, next }: { prev: string | null, next: string | null }) {
    return (
        <div className="inline-flex rounded-md overflow-hidden">
            {prev ? <ArrowLink href={'/task/' + prev}><IoIosArrowBack size={18} /></ArrowLink> : <DisabledArrow><IoIosArrowBack size={18} /></DisabledArrow>}
            {next ? <ArrowLink href={'/task/' + next}><IoIosArrowForward size={18} /></ArrowLink> : <DisabledArrow><IoIosArrowForward size={18} /></DisabledArrow>}
        </div>
    )
}
