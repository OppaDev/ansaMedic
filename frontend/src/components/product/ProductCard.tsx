import { FaWhatsapp, FaInfoCircle } from 'react-icons/fa'

interface ProductCardProps {
  imageUrl: string
  name: string
  description: string
}

export default function Component({ imageUrl, name, description }: ProductCardProps = {
  imageUrl: 'https://via.placeholder.com/200x150',
  name: 'Nombre del Producto',
  description: 'Descripción del producto. Aquí se incluye una breve descripción de las características y beneficios del producto.'
}) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/0999120734', '_blank')
  }

  const handleLearnMoreClick = () => {
    console.log('Saber más sobre:', name)
  }

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-[0_4px_10px_rgba(20,184,166,0.1)] hover:shadow-[0_10px_20px_rgba(20,184,166,0.2)] bg-white transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="h-36 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-teal-700">{name}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
      </div>
      <div className="px-6 pt-2 pb-6">
        <div className="flex gap-2 mb-4">
          <button
            onClick={handleLearnMoreClick}
            className="flex-1 bg-white hover:bg-gray-100 text-teal-600 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center border border-teal-600"
          >
            <FaInfoCircle className="mr-2" />
            Saber más
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
          >
            <FaWhatsapp className="mr-2" />
            Contactar
          </button>
        </div>
      </div>
    </div>
  )
}