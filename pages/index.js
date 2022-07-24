import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import mainPic from '../public/backend.svg'
import logoGoldenRatio from '../public/iocloud-logo-square.svg'
import startup from '../public/startup-luanch.svg'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ioCloud No-Code Backend</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>
            <main className={styles.main}>
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome</h2>
                            <p dir='rtl' className="hFa mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">چرخ را دوباره اختراع نکنید. تمرکزتان را روی بیزینس استارتاپ خود بگذارید.</p>
                        </div>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                                <Link href="/changelog">
                                <a className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                                    <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">ioCloud is out! See what&apos;s new</span>
                                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </a>
                                </Link>

                                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">A better way to build Backend</h1>
                                <p dir='rtl' className="hFa mt-4 mb-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">یک لحظه دنیای موازی را تصور کن که طراحی اپ ها و برنامه نویسی بدون دردسرهای Backend باشد.</p>

                                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                    <Link href="/commingsoon">
                                    <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                        Learn more
                                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </a>
                                    </Link>
                                    <Link href="#">
                                    <a className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                        <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                        Watch video
                                    </a>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <div>
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Open Source</p>
                                    </dt>
                                    <dd dir='rtl' className="fontFa mt-2 ml-16 text-base text-gray-500">با خیال راحت می توانید محصول خود را بر روی بستر ioCloud توسعه دهید چرا که تمامی ابزارها به صورت منبع باز در اختیار شما قرار می گیرد. هر زمان تصمیم بگیرید می توانید Backend را به صورت مستقل بر روی سرور های خود راه اندازی نمایید.</dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Focus on your App</p>
                                    </dt>
                                    <dd dir='rtl' className="fontFa mt-2 ml-16 text-base text-gray-500">سرویس های سمت سرور مسایل حل شده ای هستند. چرخ را دوباره اختراع نکنید. وقت خود را بر روی اپ خود بگذارید.</dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Time to Market</p>
                                    </dt>
                                    <dd dir='rtl' className="fontFa mt-2 ml-16 text-base text-gray-500">زمان رسیدن به بازار را کاهش دهید. وقت و تمرکز خود را به جای Backend بر روی منطق بیزینس خود و امکانات نرم افزار خود قرار دهید.</dd>
                                </div>

                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">

                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                            </svg>
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Integration</p>
                                    </dt>
                                    <dd dir='rtl' className="fontFa mt-2 ml-16 text-base text-gray-500">در هر محیطی که قصد توسعه داشته باشید ابزار مناسب آن وجود دارد. SDK های مختلف برای هر سرویس هر روز به روز می شود.</dd>
                                </div>
                            </dl>
                        </div>

                    </div>
                </div>

                <Image
                    src={mainPic}
                    alt="backend image"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
                />

                <section>
                    <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
                        <div className="flex flex-wrap -mx-8">
                            <div className="w-full lg:w-1/2 px-8">
                                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                                    <Image
                                        src={logoGoldenRatio}
                                        alt="backend image"
                                        width={100}
                                        height={161}
                                    />
                                    <h2 dir='rtl' className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                                        <span className='text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white'>ioCloud Backend </span><span className='fontFa'>را با سرعت تنها انتخاب یک نام راه اندازی کنید</span>
                                    </h2>
                                    <p dir='rtl' className="h3Fa mb-8 leading-loose text-gray-500 dark:text-gray-300">
                                        خدمات نسخه پایه برای همیشه رایگان می باشد.
                                    </p>
                                    <div className="w-full md:w-1/3">
                                        <button type="button" className="h3Fa py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            همین حالا شروع کن
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-8">
                                <ul className="space-y-12">
                                    <li className="flex -mx-4">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                                1
                                            </span>
                                        </div>
                                        <div dir='rtl' className="h3Fa px-4">
                                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                                انتخاب یک نام منحصر بفرد
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                                این نام همیشگی بوده و غیر قابل تغییر می باشد. هر چند این نام تنها درون کدها استفاده می شود.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                                2
                                            </span>
                                        </div>
                                        <div dir='rtl' className="h3Fa px-4">
                                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                                دگمه Add را فشار دهید
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                                پلتفرم منحصر بفرد بودن نام را چک می کند و سپس فضای کاری شما را رایگان می سازد.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex -mx-4">
                                        <div className="px-4">
                                            <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                                3
                                            </span>
                                        </div>
                                        <div dir='rtl' className="h3Fa px-4">
                                            <h3 className="my-4 text-xl font-semibold dark:text-white">
                                                فقط به Front-end بپردازید
                                            </h3>
                                            <p className="text-gray-500 dark:text-gray-300 leading-loose">
                                                حالا دیگر بدون درگیری با مشکلات سرور و Backend فقط به راه اندازی استارتاپ خود و Frontend فکر کنید.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Image
                    src={startup}
                    alt="startup image"
                    width={500}
                    height={500}
                />
                <h1 className='text-center'><span className="text-neutral-900"> Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-dashibase-coral to-amber-400">Backend isn&apos;t your Product,</span> Don&apos;t waste <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-dashibase-coral to-amber-400">Time</span> on that.</span></h1>
            </main>
        </div>
    )
}
