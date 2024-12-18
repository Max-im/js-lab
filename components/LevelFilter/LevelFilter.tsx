import Link from 'next/link';
import { FaThList, FaLeaf, FaMountain, FaCrown } from 'react-icons/fa';

export default function LevelFilter() {
    return (
        <div className="rounded-lg bg-[#0B2B2A] w-full p-4 relative z-1 text-white flex flex-col space-y-2">
            {/* All Levels */}
            <Link
                href="/task?level=all"
                className="flex items-center space-x-2 p-2 bg-[#1E4140] rounded hover:bg-[#2E5654] transition-all"
                itemProp="url"
            >
                <FaThList style={{ color: '#FFFFFF' }} />
                <span className="pl-1">All</span>
            </Link>
            {/* Easy Level */}
            <Link
                href="/task?level=easy"
                className="flex items-center space-x-2 p-2 bg-[#2E5654] rounded hover:bg-[#3E6A68] transition-all"
                itemProp="url"
            >
                <FaLeaf style={{ color: '#4CAF50' }} />
                <span className="pl-1">Easy</span>
            </Link>
            {/* Medium Level */}
            <Link
                href="/task?level=medium"
                className="flex items-center space-x-2 p-2 bg-[#475B57] rounded hover:bg-[#5A6E6A] transition-all"
                itemProp="url"
            >
                <FaMountain style={{ color: '#FFC107' }} />
                <span className="pl-1">Medium</span>
            </Link>
            {/* Hard Level */}
            <Link
                href="/task?level=hard"
                className="flex items-center space-x-2 p-2 bg-[#5A6E6A] rounded hover:bg-[#6C827D] transition-all"
                itemProp="url"
            >
                <FaCrown style={{ color: '#F44336' }} />
                <span className="pl-1">Hard</span>
            </Link>
        </div>
    );
}
