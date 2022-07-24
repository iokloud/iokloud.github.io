import Head from "next/head"

export default function Pricing() {
    return (
        <div>
            <Head>
                <title>Pricing</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>

            <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="pricing-box max-w-lg mt-5 mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                            Freemium
                        </h3>
                        <p dir='rtl' className="fontFa mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                            کاربران شخصی و غیر تجاری و علاقه مندانی که از امکانات پایه و محدود می خواهند استفاده کنند. امکانات پایه اگر رایگان ارایه شود برای همیشه رایگان خواهد بود. در آینده به سرویس های رایگان افزوده خواهد شد.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                    What&#x27;s included
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200">
                                </div>
                            </div>
                            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        کدها به صورت متن باز در گیت هاب
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Bandwidth Up to 1 GB/mo
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Storage Up to 50 MB per service
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        API Calls Up to 10K/mo
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        سرور ایرانی و بدون  نیاز به اینترنت بین الملل
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                    &amp; What&#x27;s not
                                </h4>
                            </div>
                            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        بدون قرارداد پشتیبانی و تعهد به خدمات
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        بدون جوابگویی مستقیم کارشناسان
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        بدون سرور اختصاصی
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Customized DNS <span dir='rtl' className='fontFa'>بدون</span>
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        بدون سرویس پیام کوتاه
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        No Custome SSL
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
                            Free
                        </p>
                        <div className="fontFa mt-4 flex items-center justify-center text-2xl leading-none font-extrabold text-gray-900 dark:text-white">
                            <span>
                                صفر تومان ماهانه
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-5">
                            <span className="fontFa inline-block font-medium text-gray-500 dark:text-gray-400">
                                رایگان برای همیشه
                            </span>
                        </p>
                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Create your project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pricing-box max-w-lg mt-5 mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                        <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
                            Premium
                        </h3>
                        <p dir='rtl' className="fontFa mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                            کاربران تجاری و سازمانی که به دنبال سرویس  راحت و پاسخگو با کنترین هزینه هستند می توانند از نسخه پریمیوم استفاده نمایند. هزینه کرد شما در این سرویس ها به اندازه مصرف شما خواهد بود.
                        </p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                    What&#x27;s included
                                </h4>
                                <div className="flex-1 border-t-2 border-gray-200">
                                </div>
                            </div>
                            <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        کدها به صورت متن باز در گیت هاب
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        در اختیار قراردادن آخرین آپدیت ها به صورت منظم
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Bandwidth Unlimited
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Storage Unlimited per service
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        API Calls Unlimited
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        سرور ایرانی و بدون  نیاز به اینترنت بین الملل
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        امکان نصب بر روی سرور مشتری On-Premises
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        با قرارداد پشتیبانی و تعهد به خدمات
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        جوابگویی مستقیم کارشناسان
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        سرور اختصاصی
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Customized DNS
                                    </p>
                                </li>
                                <li className="flex items-start lg:col-span-1">
                                    <div className="flex-shrink-0">
                                        <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                            </path>
                                        </svg>
                                    </div>
                                    <p dir='rtl' className="fontFa ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                                        Customized SSL
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                        <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
                            Pay As You Go
                        </p>
                        <div className="fontFa mt-4 flex items-center justify-center text-2xl leading-none font-extrabold text-gray-900 dark:text-white">
                            <span>
                                از ۹۹۹ هزار تومان ماهانه
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-5">
                            <span className="fontFa inline-block font-medium text-gray-500 dark:text-gray-400">
                                پرداخت به ازای مصرف
                            </span>
                        </p>
                        <div className="mt-6">
                            <div className="rounded-md shadow">
                                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Create your project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}