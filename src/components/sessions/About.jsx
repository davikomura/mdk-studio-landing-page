import React from 'react';
import fundo from '../../assets/fundosobre.png';

const About = () => {
    return (
        <div className="relative h-screen">
            <img src={fundo} alt="Background Image" className="absolute inset-0 object-cover object-center w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                    <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
                        </div>
                    </div>
                    <div className="headings *:text-center *:leading-4">
                        <p className="text-xl font-serif font-semibold text-[#434955]">FELIPE MACÊDO</p>
                        <p className="text-sm font-semibold text-[#434955]">DESENVOLVEDOR</p>
                    </div>
                    <div className="w-full items-center justify-center flex">
                        <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                            <li>
                                <p>macedoflp.com</p>
                            </li>
                        </ul>
                    </div>
                    <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
                </div>
                <div className="ml-4 profile-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                    <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
                        </div>
                    </div>
                    <div className="headings *:text-center *:leading-4">
                        <p className="text-xl font-serif font-semibold text-[#434955]">DAVI KOMURA</p>
                        <p className="text-sm font-semibold text-[#434955]">GAROTÃO DO SEU ZÉ</p>
                    </div>
                    <div className="w-full items-center justify-center flex">
                        <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                            <li>
                                <p>garotao@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
                </div>
                <div className="ml-4 profile-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                    <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                        <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
                        </div>
                    </div>
                    <div className="headings *:text-center *:leading-4">
                        <p className="text-xl font-serif font-semibold text-[#434955]">DANIEL KORBAN</p>
                        <p className="text-sm font-semibold text-[#434955]">DESAPARECIDO</p>
                    </div>
                    <div className="w-full items-center justify-center flex">
                        <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                            <li>
                                <p>sotelodk8@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
                </div>
            </div>
        </div>
    );
};

export default About;
