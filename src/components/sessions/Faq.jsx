import React from 'react'
import fundo from '../../assets/fundosobre.png';

const Faq = () => {
  return (
    <>
      <div id="FAQ" className=" inset-0 bg-cover object-cover relative object-center bg-center h-screen" style={{backgroundImage: "url('src/assets/fundosobre.png')"}}>
      
        <div className="relative z-10">
          <section class="text-gray-100 py-32 min-h-screen">
            <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Perguntas Frequentes</h2>
              <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Quanto custa para construir um site?</summary>
                  <div class="px-4 pb-4">
                    <p>O custo depende de vários fatores, incluindo a complexidade do projeto, o número de páginas, e as funcionalidades específicas necessárias. Oferecemos orçamentos personalizados baseados nas suas necessidades e requisitos.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Como posso atualizar o conteúdo do meu site depois que finalizado?</summary>
                  <div class="px-4 pb-4">
                    <p>Fornecemos treinamento básico para que você possa gerenciar e modificar textos, imagens e outros elementos do site. Se preferir, também podemos realizar atualizações para você, conforme necessário.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Vocês podem me ajudar a escolher um nome de domínio?</summary>
                  <div class="px-4 pb-4">
                    <p>Sim, podemos ajudar você a escolher um nome de domínio. Vamos considerar fatores como a relevância para o seu negócio, facilidade de lembrar, e disponibilidade. Oferecemos orientações e sugestões para encontrar um nome que se encaixe bem com a identidade da sua marca e esteja disponível para registro.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Quanto tempo leva para o meu site ficar pronto?</summary>
                  <div class="px-4 pb-4">
                    <p>O prazo pode variar dependendo da complexidade do projeto, mas geralmente, o desenvolvimento de um site simples leva entre 2 a 3 semanas. Projetos mais complexos, como aplicações web ou sites com funcionalidades avançadas, podem levar mais tempo.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Vocês oferecem suporte técnico após o lançamento do site?</summary>
                  <div class="px-4 pb-4">
                    <p>Sim, oferecemos suporte técnico após o lançamento do site. Isso inclui correção de problemas, atualizações de segurança, ajustes necessários e orientação sobre como gerenciar o conteúdo. Estamos aqui para garantir que seu site continue funcionando bem e atender às suas necessidades.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline"> Vocês oferecem serviços de hospedagem?</summary>
                  <div class="px-4 pb-4">
                    <p>Oferecemos recomendações para serviços de hospedagem e podemos ajudar a configurar o ambiente de hospedagem, mas não fornecemos serviços de hospedagem diretamente.</p>
                  </div>
                </details>
                <details>
                  <summary class="py-2 outline-none cursor-pointer focus:underline">Como posso entrar em contato para um orçamento ou consulta?</summary>
                  <div class="px-4 pb-4">
                    <p>Você pode entrar em contato conosco através do formulário de contato em nosso site, por e-mail, ou telefonicamente. Estamos à disposição para discutir suas necessidades e fornecer um orçamento personalizado.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Faq
