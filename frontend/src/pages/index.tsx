import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>DentalPro Supplies</title>
        <meta name="description" content="Tu distribuidor de confianza para insumos odontológicos de calidad y servicio técnico especializado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#0f7d80] to-[#0a5c5e] text-white py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">DentalPro Supplies</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Innovación, calidad superior y soporte técnico para tu práctica dental</p>
          <button className="bg-white text-[#0f7d80] hover:bg-[#888786] hover:text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Explorar Productos
          </button>
        </section>

        {/* Featured Products */}
        <section className="py-20">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#0f7d80]">Productos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Guantes de Nitrilo', 'Resina Compuesta', 'Instrumental Quirúrgico'].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-full h-48 bg-[#888786] bg-opacity-20 rounded-md mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-[#0f7d80]">{product}</h3>
                <p className="text-[#888786]">Calidad superior para tu práctica diaria</p>
              </div>
            ))}
          </div>
        </section>

        {/* Servicio Técnico */}
        <section className="py-20 bg-[#f4f4f4]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#0f7d80]">Servicio Técnico Especializado</h2>
            <p className="text-xl mb-8 text-[#888786]">Nuestro equipo de expertos está listo para mantener tu equipo en óptimas condiciones.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#0f7d80]">Mantenimiento Preventivo</h3>
                <p className="text-[#888786]">Programas personalizados para extender la vida útil de tus equipos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-[#0f7d80]">Reparaciones Rápidas</h3>
                <p className="text-[#888786]">Soluciones eficientes para minimizar el tiempo de inactividad de tu consultorio.</p>
              </div>
            </div>
            <button className="mt-12 bg-[#0f7d80] hover:bg-[#0a5c5e] text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Solicitar Servicio Técnico
            </button>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-[#f4f4f4]">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#0f7d80]">Lo que dicen nuestros clientes</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-[#888786] mb-4">"DentalPro ha revolucionado mi práctica. Sus productos son de primera calidad y su servicio técnico es inigualable."</p>
                <p className="font-semibold text-[#0f7d80]">Dra. María Rodríguez</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-[#888786] mb-4">"Los webinars de educación continua son excelentes. Me mantienen actualizado sin salir de mi consultorio."</p>
                <p className="font-semibold text-[#0f7d80]">Dr. Carlos Mendoza</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-[#888786] bg-opacity-10 py-20 px-4 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-[#0f7d80]">¿Listo para elevar tu práctica dental?</h2>
            <p className="text-xl mb-8 text-[#888786]">Descubre cómo nuestros productos, servicio técnico y programas educativos pueden transformar tu consultorio.</p>
            <button className="bg-[#0f7d80] hover:bg-[#0a5c5e] text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Contáctanos Hoy
            </button>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home