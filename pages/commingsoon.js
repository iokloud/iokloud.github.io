import Head from "next/head"
import { supabase } from "../lib/initialSupabase";
import Link from "next/link";

export default function joinWaitlist() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, error } = await supabase
            .from("waitlist")
            .insert([{ email: event.target.email.value }]);
        error ? console.log(error) : console.log(data);
    };

    return (
        <div>
            <Head>
                <title>ioCloud wait list</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>

            <div className="mt-5 mb-5 flex">
                <section dir='rtl' className="fontFa mx-auto max-w-screen-xl">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <p className="leading-8 text-center fontFa lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">ما در حال آماده سازی بستر سرویس ها هستیم. اگر علاقه مند هستید به محض اماده شدن شما را هم در جریان قرار دهیم و از اولین دولوپرهایی باشید که به صورت رایگان ioCloud را تست می کنید ایمیل خود را وارد نمایید.</p>
                        <div className="p-8 rounded-lg bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb] sm:mx-8">
                            <div className="max-w-xl mx-auto">
                                <div className="space-y-4 text-center">
                                    <h1 className="text-3xl text-white font-semibold">
                                        پیوستن به لیست انتظار
                                    </h1>
                                    <p className="text-gray-300 leading-relaxed">
                                        با وارد کردن ایمیل موقع راه اندازی نهایی سرویس یک لینک دعوت برای ثبت نام برای شما ارسال می شود.
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <form onSubmit={handleSubmit}
                                        className="max-w-md mx-auto flex items-center justify-center bg-white rounded-md p-1">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="ایمیل خود را وارد کنید"
                                            className="text-gray-500 w-full p-2.5 outline-none"
                                        />
                                        <button type="submit"
                                            className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                                        >
                                            پیوستن
                                        </button>
                                    </form>
                                    <p className="mt-3 mx-auto text-center max-w-lg text-[10px] text-gray-300">
                                        هیچ گونه اسپم یا استفاده نامناسب از ایمیل شما صورت نمی گیرد و تنها برای انجام امور داخلی پلتفرم از آن استفاده می شود.
                                        Read our
                                        <Link href="/privacy-policy">
                                            <a className="underline"> Privacy Policy </a>
                                        </Link>
                                        Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >
    )
}
