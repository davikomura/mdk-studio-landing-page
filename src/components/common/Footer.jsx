import zapzap from '../../assets/wpp.png';

const Footer = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5598981600041"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-transparent fixed bottom-0 right-0 z-50 pr-12 pb-12 w-20 md:w-24 lg:w-28"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src={zapzap} alt="WhatsApp" className="w-full h-auto" />
    </a>
  );
};

export default Footer;
