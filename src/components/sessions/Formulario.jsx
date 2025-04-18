import React from 'react';
import { useTranslation } from 'react-i18next';

const Formulario = () => {
    const { t } = useTranslation();
    return(
        <section class="bg-black">
        <div class="container px-12 py-12 mx-auto">
            <div className='mb-12'>
                <p class="font-medium text-blue-400">{t("form.contactUS")}</p>

                <h1 class="mt-2 text-2xl font-semibold md:text-3xl text-white">{t("form.title")}</h1>

                <p class="mt-3 text-gray-300">{t("form.description")}</p>
            </div>


            <div class="grid grid-cols-2 gap-12 md:grid-cols-2 mb-24">
                <div>
                    <span class="inline-block p-4 rounded-full bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-base font-medium text-white">{t("form.email.title")}</h2>
                    <p class="mt-2 text-sm text-gray-300">{t("form.email.text")}</p>
                    <a href='mailto:mdkstudioslz@gmail.com' class="mt-2 text-sm text-blue-400">{t("form.email.address")}</a>
                </div>

                <div>
                    <span class="inline-block p-4 rounded-full bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-base font-medium text-white">{t("form.phone.title")}</h2>
                    <p class="mt-2 text-sm text-gray-300">{t("form.phone.text")}</p>
                    <a href='tel:+55-98-98103-8642' class="mt-2 text-sm text-blue-400">{t("form.phone.number")}</a>
                </div>
            </div>
        </div>
    </section>
    )
       
}

export default Formulario