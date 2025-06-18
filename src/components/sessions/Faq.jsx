import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = t('faqs.questions', { returnObjects: true });

  return (
    <div id="FAQ" className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t('faqs.title')}
        </h2>

        <div className="space-y-6">
          {questions.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl shadow-md overflow-hidden transition hover:shadow-blue-500/20"
            >
              <button
                onClick={() => handleClick(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-blue-400" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300 transition-all duration-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <hr className="h-px bg-gray-700 border-0" />
      </div>
    </div>
  );
};

export default Faq;
