export const WhatsApp = () => {
  return (
    <div className="fixed bottom-4 right-4 z-[9999] md:bottom-6 md:right-6">
      <a
        id="robbu-whatsapp-button"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=11947196430&text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Torres%20I%C3%A7amentos%20e%20preciso%20de%20um%20or%C3%A7amento%20para%20i%C3%A7amento.%20Podem%20me%20ajudar%3F"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16"
      >
        <img src="/public/whatsappIcon.png" alt="" />
      </a>
    </div>
  );
};
