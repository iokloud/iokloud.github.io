/**
 * [Footer]
 * This component shows the use of built-in CSS support
 */
import Link from 'next/link';
import React from 'react';

function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://iocloud.ir/" className="hover:underline">ioCloud™</a>. All Rights Reserved.
            </span>

            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/about">
                        <a className="mr-4 hover:underline md:mr-6 ">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/privacy-policy">
                        <a className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/license">
                        <a className="mr-4 hover:underline md:mr-6">License</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a className="hover:underline">Contact</a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
