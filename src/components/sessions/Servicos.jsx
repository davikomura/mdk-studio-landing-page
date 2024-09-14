import React, { useState } from "react";
import ModalServ from "../content/ModalServ";
import ModalForm from "../content/ModalForm";
import data from '/data.json';

export const Servicos = () => {
    return (
        <div id="servicos" className="bg-black w-full md-h-screen inset-0 pb-12">
            <div className="relative z-10 pt-40">
                <h2 className="text-xl text-white font-bold leading-tight text-center sm:text-5xl">Serviços</h2>
                <p className='text-center mt-8 text-gray-200 flex justify-center'>
                    Na MDK, transformamos ideias em experiências digitais incríveis. 
                    Oferecemos uma gama completa de serviços para atender às suas necessidades de tecnologia,
                    <br /> garantindo que cada projeto seja um sucesso do início ao fim.
                </p>
            </div>

            <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-10 mt-20 px-5">
                {data.Servicos.map((servico, index) => (
                    <div key={index} className="flex gap-4 items-start flex-col">
                        <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full" dangerouslySetInnerHTML={{ __html: servico.icone }} />
                        <div>
                            <h3 className="text-white font-semibold text-xl">{servico.tipo}</h3>
                            <p className="mt-1 text-gray-400" dangerouslySetInnerHTML={{ __html: servico.resumo }} />
                            <ModalServ servico={servico} onClose={() => {}} />
                        </div>
                    </div>
                ))}
            </div>
            <ModalForm onClose={() => {}} />
        </div>
    );
};
