import React from 'react';
import data from '/data.json';

const About = () => {
    const { dadosTime } = data;

    return (
        <>
            <section id="about" className="pt-24 bg-black">
                <div className="h-[32rem] bg-black">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="sm:text-5xl font-semibold text-center capitalize text-white">Conheça nosso time</h1>

                        <div className="flex justify-center mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>

                        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-300">
                            Na MDK Studio, nossa equipe de desenvolvedores é a alma do que fazemos. Somos um grupo dedicado e apaixonado por criar soluções inovadoras que transformam ideias em realidade.
                        </p>
                    </div>
                </div>

                <div className="container px-4 py-12 mx-auto sm:px-8 lg:px-16 xl:px-32 -mt-24 sm:-mt-32 md:-mt-48">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                        {dadosTime.map(({ nome, funcao, foto, redes_sociais }, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border sm:p-6 rounded-xl border-gray-700">
                            <img className="object-cover w-full rounded-xl aspect-square" src={foto} alt={nome} />

                            <h1 className="mt-4 text-2xl font-semibold text-white capitalize">{nome}</h1>

                            <p className="mt-2 capitalize text-gray-300">{funcao}</p>

                            <div className="flex mt-3 space-x-4">
                            {redes_sociais.map((rede, i) => {
                                let iconPath;
                                switch (rede.nome) {
                                case 'linkedin':
                                    iconPath =
                                    'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z';
                                    break;
                                case 'github':
                                    iconPath =
                                    'M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z';
                                    break;
                                case 'facebook':
                                    iconPath =
                                    'M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z';
                                    break;
                                default:
                                    return null;
                                }
                                return (
                                <a
                                    key={i}
                                    href={rede.link}
                                    className="transition-colors duration-300 text-gray-300 hover:text-blue-500"
                                    aria-label={rede.nome}
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d={iconPath}></path>
                                    </svg>
                                </a>
                                );
                            })}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </section>
        </>
    );
};

export default About;
