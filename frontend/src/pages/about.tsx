import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Acerca de DentalPro Supplies - Tu Socio en Odontología</title>
        <meta name="description" content="Descubre la historia, misión y visión de DentalPro Supplies, tu proveedor confiable de insumos odontológicos y servicio técnico especializado" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#0f7d80] mb-8 text-center">Acerca de DentalPro Supplies</h1>
        
        {/* Historia */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#0f7d80] mb-4">Nuestra Historia</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <Image src="/images/dental-history.jpg" alt="Historia de DentalPro" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-[#888786] mb-4">Fundada en 1995, DentalPro Supplies nació con la visión de revolucionar la industria de suministros dentales. Desde nuestros humildes inicios como una pequeña tienda local, hemos crecido hasta convertirnos en un líder nacional en la distribución de insumos odontológicos de alta calidad.</p>
              <p className="text-[#888786]">A lo largo de nuestro viaje, hemos mantenido nuestro compromiso con la excelencia, la innovación y el servicio al cliente, valores que nos han permitido ganar la confianza de miles de profesionales dentales en todo el país.</p>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-16 bg-[#f4f4f4] p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-[#0f7d80] mb-4">Nuestra Misión</h2>
              <p className="text-[#888786]">Proporcionar a los profesionales dentales los productos y servicios de la más alta calidad, respaldados por un soporte técnico excepcional y programas de educación continua, para elevar el estándar de la atención dental en todo el país.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-[#0f7d80] mb-4">Nuestra Visión</h2>
              <p className="text-[#888786]">Ser reconocidos como el socio preferido de los profesionales dentales, liderando la innovación en productos y servicios que mejoran la salud bucal y transforman vidas a través de sonrisas saludables.</p>
            </div>
          </div>
        </section>

        {/* Servicio Técnico */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#0f7d80] mb-4">Servicio Técnico Especializado</h2>
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
              <Image src="/images/technical-service.jpg" alt="Servicio Técnico DentalPro" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-[#888786] mb-4">En DentalPro, entendemos que el tiempo de inactividad de su equipo puede ser costoso. Por eso, ofrecemos un servicio técnico rápido, eficiente y altamente especializado.</p>
              <ul className="list-disc list-inside text-[#888786] mb-4">
                <li>Mantenimiento preventivo programado</li>
                <li>Reparaciones de emergencia</li>
                <li>Calibración y actualizaciones de software</li>
                <li>Capacitación en el uso y cuidado del equipo</li>
              </ul>
              <p className="text-[#888786]">Nuestro equipo de técnicos certificados está disponible para asegurar que su práctica dental funcione sin problemas, permitiéndole concentrarse en lo que más importa: el cuidado de sus pacientes.</p>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#0f7d80] mb-4">Nuestro Equipo</h2>
          <p className="text-[#888786] mb-6">Detrás de cada producto y servicio que ofrecemos, hay un equipo dedicado de profesionales apasionados por la odontología y el servicio al cliente.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dra. Ana Martínez', role: 'Directora Técnica', image: '/images/team-member-1.jpg' },
              { name: 'Ing. Carlos Ruiz', role: 'Jefe de Servicio Técnico', image: '/images/team-member-2.jpg' },
              { name: 'Lic. Laura Sánchez', role: 'Gerente de Educación Continua', image: '/images/team-member-3.jpg' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#0f7d80]">{member.name}</h3>
                <p className="text-[#888786]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#0f7d80] text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Únete a la Familia DentalPro</h2>
          <p className="mb-6">Descubre cómo podemos ayudarte a llevar tu práctica dental al siguiente nivel.</p>
          <button className="bg-white text-[#0f7d80] font-bold py-2 px-6 rounded-full hover:bg-[#888786] hover:text-white transition duration-300">
            Contáctanos Hoy
          </button>
        </section>
      </main>
    </Layout>
  )
}

export default About