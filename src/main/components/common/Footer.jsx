import LogoNextWire from '../../../assets/img/LogoNextWire.png';

export const Footer = () => {
  return (
    <footer className="relative bg-blue-950 text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center md:items-center h-full">
          <img src={LogoNextWire} alt="Logo ConduLimex" className="h-16 w-auto" />
        </div>
        {/* Mapa y dirección */}
        <div className="flex flex-col items-center gap-4">
          <iframe
            title="Ubicación ConduLimex"
            src="https://www.google.com/maps?q=19.508611,-99.217389&z=17&output=embed"
            width="300"
            height="200"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-base font-semibold text-center">
            Dirección:<span className="font-normal"> Callejón Priv. Morelos No. 7, Tlalnepantla de Baz | Estado de México | C.P. 54080 | México</span>
          </div>
        </div>
        {/* Contacto y enlaces */}
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="mb-2">
            <div className="font-bold">Email:</div>
            <div>contacto@condulimex.com</div>
          </div>
          <div className="mb-2">
            <div className="font-bold">Teléfonos:</div>
            <div>800 248 0211 y 55 5393 3007</div>
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <a href="https://random-url.com/privacidad" target="_blank" rel="noopener noreferrer" className="font-semibold py-1 px-3 rounded transition-colors text-sm text-left hover:text-orange-400">Aviso de Privacidad</a>
            <a href="https://random-url.com/calidad" target="_blank" rel="noopener noreferrer" className="font-semibold py-1 px-3 rounded transition-colors text-sm text-left hover:text-orange-400">Política de calidad</a>
            <a href="https://random-url.com/mision" target="_blank" rel="noopener noreferrer" className="font-semibold py-1 px-3 rounded transition-colors text-sm text-left hover:text-orange-400">Misión y Visión</a>
            <a href="https://random-url.com/alcance" target="_blank" rel="noopener noreferrer" className="font-semibold py-1 px-3 rounded transition-colors text-sm text-left hover:text-orange-400">Alcance del Sistema de Gestión</a>
            <a href="https://random-url.com/etica" target="_blank" rel="noopener noreferrer" className="font-semibold py-1 px-3 rounded transition-colors text-sm text-left hover:text-orange-400">Código de Etica</a>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-sm text-white mt-8">
        Copyright 2021, Condulimex. Todos los derechos reservados.
      </div>
      {/* Botón flotante WhatsApp */}
      <a
        href="https://wa.me/5215553933007"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-white rounded-full shadow-lg px-4 py-2 hover:bg-green-100 transition-colors"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      >
        <span className="sr-only">Contáctanos por WhatsApp</span>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M23.5 17.5c-.3-.2-1.8-.9-2.1-1-..." fill="#fff"/>
          <path d="M16 7.5c-4.7 0-8.5 3.8-8.5 8.5 0 1.5.4 2.9 1.1 4.2L7 25l4.9-1.3c1.2.6 2.5.9 3.8.9 4.7 0 8.5-3.8 8.5-8.5s-3.8-8.6-8.5-8.6zm0 15.3c-1.2 0-2.4-.3-3.5-.8l-.2-.1-2.9.8.8-2.8-.1-.2c-.7-1.1-1.1-2.4-1.1-3.7 0-4 3.3-7.3 7.3-7.3s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z" fill="#fff"/>
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-xs text-gray-700">¿Necesitas ayuda?</span>
          <span className="text-sm font-semibold text-gray-900">Contáctanos</span>
        </div>
      </a>
    </footer>
  );
};
