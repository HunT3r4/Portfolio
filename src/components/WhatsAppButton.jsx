import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL = 'https://wa.me/9779826296248?text=Hi%20Mrigendra%2C%20I%27d%20like%20to%20discuss%20a%20project.'

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-20 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center bg-[#25D366] text-white hover:bg-[#1fb956] transition-colors duration-200"
    >
      <FaWhatsapp size={23} />
    </a>
  )
}

export default WhatsAppButton