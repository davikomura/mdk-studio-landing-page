import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiEye, FiDatabase, FiTrash2, FiMail, FiAlertCircle, FiLock, FiRefreshCw } from 'react-icons/fi';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const sections = [
  {
    id: 'coleta',
    icon: FiDatabase,
    title: 'Informações que Coletamos',
    content: [
      {
        subtitle: 'Dados que NÃO coletamos',
        text: 'O Enigma Case é um jogo offline. Não coletamos nome, e-mail, número de telefone, localização ou qualquer informação de identificação pessoal.',
      },
      {
        subtitle: 'Progresso do jogo (armazenamento local)',
        text: 'Dados de progresso, como casos desbloqueados, conquistas e configurações, são salvos exclusivamente no armazenamento local do seu dispositivo, usando AsyncStorage/MMKV. Esses dados nunca saem do seu aparelho.',
      },
    ],
  },
  {
    id: 'uso',
    icon: FiEye,
    title: 'Como Usamos as Informações',
    content: [
      {
        subtitle: 'Funcionamento do jogo',
        text: 'Os dados salvos localmente são usados exclusivamente para manter seu progresso entre sessões,exatamente como você esperaria de qualquer jogo.',
      },
      {
        subtitle: 'Melhorias de qualidade',
        text: 'Relatórios de falha anônimos nos ajudam a identificar e corrigir bugs, garantindo uma experiência melhor para todos os jogadores.',
      },
    ],
  },
  {
    id: 'compartilhamento',
    icon: FiShield,
    title: 'Compartilhamento de Dados',
    content: [
      {
        subtitle: 'Não vendemos seus dados',
        text: 'Jamais vendemos, alugamos ou comercializamos informações dos usuários com terceiros para fins publicitários ou qualquer outro fim.',
      },
      {
        subtitle: 'Terceiros de infraestrutura',
        text: 'Podemos utilizar serviços como Expo Application Services (EAS) para distribuição e análise técnica. Esses serviços seguem suas próprias políticas de privacidade e tratam apenas dados técnicos agregados.',
      },
    ],
  },
  {
    id: 'seguranca',
    icon: FiLock,
    title: 'Segurança',
    content: [
      {
        subtitle: 'Dados locais protegidos pelo sistema operacional',
        text: 'Como todos os dados ficam no seu dispositivo, eles são protegidos pelas salvaguardas nativas do Android (sandbox de aplicativo, criptografia de disco quando habilitada pelo dispositivo).',
      },
      {
        subtitle: 'Sem transmissão de dados pessoais',
        text: 'Pelo fato de não transmitirmos dados pessoais a servidores externos, o risco de violação de dados pessoais é inerentemente mínimo.',
      },
    ],
  },
  {
    id: 'direitos',
    icon: FiTrash2,
    title: 'Seus Direitos e Controle',
    content: [
      {
        subtitle: 'Exclusão de dados',
        text: 'Para apagar todos os dados do jogo, basta desinstalar o aplicativo do seu dispositivo. Todos os dados locais serão removidos automaticamente pelo sistema operacional.',
      },
      {
        subtitle: 'Sem necessidade de conta',
        text: 'O Enigma Case não requer criação de conta. Você pode jogar completamente de forma anônima.',
      },
      {
        subtitle: 'Crianças',
        text: 'O aplicativo é classificado para maiores de 10 anos, conforme indicado na Google Play Store. Não coletamos dados de crianças de forma intencional.',
      },
    ],
  },
  {
    id: 'atualizacoes',
    icon: FiRefreshCw,
    title: 'Atualizações desta Política',
    content: [
      {
        subtitle: 'Notificações de mudança',
        text: 'Caso esta política seja atualizada de forma material, publicaremos a nova versão nesta página com a data de vigência atualizada. Recomendamos revisar periodicamente.',
      },
      {
        subtitle: 'Uso continuado',
        text: 'O uso continuado do aplicativo após a publicação de alterações constitui aceitação das mudanças.',
      },
    ],
  },
  {
    id: 'contato',
    icon: FiMail,
    title: 'Contato',
    content: [
      {
        subtitle: 'Dúvidas ou solicitações',
        text: 'Se tiver dúvidas sobre esta Política de Privacidade ou quiser exercer qualquer direito relacionado a dados pessoais, entre em contato pelo e-mail:',
        email: 'contato@mdkstudio.com.br',
      },
    ],
  },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const lastUpdated = '07 de maio de 2025';

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
            <FiShield className="w-4 h-4" />
            Google Play Store — Requisito de Publicação
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
            Política de{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              Privacidade
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-4">
            Aplicativo <strong className="text-white font-medium">Enigma Case</strong> — desenvolvido por{' '}
            <strong className="text-white font-medium">MDK Studios</strong>
          </p>

          <p className="text-gray-600 text-sm">
            Última atualização: <span className="text-gray-400">{lastUpdated}</span>
          </p>
        </motion.div>
      </section>

      {/* ── Aviso rápido ─────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-16"
      >
        <div className="flex gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
          <FiAlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-emerald-400">Resumo rápido:</strong> O Enigma Case é um jogo offline
            que <strong className="text-white">não coleta dados pessoais</strong>. Todo o progresso é
            salvo localmente no seu dispositivo. Não há conta, não há servidor, não há rastreamento.
          </p>
        </div>
      </motion.div>

      {/* ── Sections ─────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
        {sections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              id={section.id}
              variants={fadeUp}
              custom={sIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-emerald-500/20 transition-colors duration-500"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Header */}
              <div className="relative flex items-center gap-4 px-8 py-6 border-b border-white/5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-display font-semibold text-white">
                  {section.title}
                </h2>
              </div>

              {/* Content */}
              <div className="relative px-8 py-6 space-y-6">
                {section.content.map((item, iIdx) => (
                  <div key={iIdx} className={iIdx > 0 ? 'pt-6 border-t border-white/5' : ''}>
                    <h3 className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-2">
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.text}
                      {item.email && (
                        <>
                          {' '}
                          <a
                            href={`mailto:${item.email}`}
                            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors duration-200"
                          >
                            {item.email}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Footer strip ─────────────────────────────────── */}
      <div className="border-t border-white/10 py-10 text-center px-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MDK Studio. Todos os direitos reservados. &nbsp;|&nbsp;{' '}
          <a
            href="/"
            className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
          >
            mdkstudio.com.br
          </a>
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Enigma Case · Google Play Store
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
