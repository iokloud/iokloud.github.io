import Link from 'next/link'
import Head from 'next/head'

const faq = [{
    question: 'آیا ioCloud همیشه opensource باقی می ماند ؟',
    answer: 'سیاست ما این است که از ابزارهای منبع باز استفاده نماییم و در برابر کاربران مان همیشه شفاف باشیم. بله همیشه اپن سورس باقی خواهیم ماند.'
},
{
    question: 'اگر میزان هزینه ی استفاده از منابع بیشتر از اعتبار مالی حساب من شود سرویس چگونه متوقف می شود؟',
    answer: 'سرویس تا ۲۴ ساعت وضعیت خود را حفظ خواهد کرد و پس از آن تا ۳۰ روز اطلاعات نگهداری می شود. چنانچه در این مدت سقف اعتبار مالی جابجا شود همه چیز به حالت عادی باز خواهد گشت.'
},
{
    question: 'نسخه پشتیبان چگونه تهیه می شود؟',
    answer: 'هر ۲۴ ساعت از کل ایمیج ها نسخه پشتیبان تهیه می شود.'
},
{
    question: 'اپدیت سرویسها چگونه عرضه می شود؟',
    answer: 'به صورت دوره ای نسخه اپدیت شده ایمیج ها عرضه می گردد و تنها با درخواست کتبی کاربر امکان اپدیت نسخه ایمیج ها امکان پذیر است.'
},
]

export default function FAQ() {
    return (
        <div>
            <Head>
                <title>ioCloud FAQ</title>
                <meta name="description" content="Cloud I/O streaming platform" />
                <link rel="icon" href="/iocloud-logo.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ff0000" />
            </Head>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                        {faq.map((item) => (
                            <div key={item.key}>
                                <div className="mb-10">
                                    <h3 dir='rtl' className="fontFa flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                        <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                                        {item.question}
                                    </h3>
                                    <p dir='rtl' className="fontFa text-gray-500 dark:text-gray-400">{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
