import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = t('faqs.questions', { returnObjects: true });

  return (
    <div id="FAQ" className="bg-black bg-cover relative bg-center">
      <section className="text-gray-100 py-8">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
            {t('faqs.title')}
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            {questions.map((faq, index) => (
              <div key={index}>
                <summary
                  className="py-2 outline-none cursor-pointer focus:underline"
                  onClick={() => handleClick(index)}
                >
                  {faq.question}
                </summary>
                {openIndex === index && (
                  <div className="px-4 pb-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Faq;
