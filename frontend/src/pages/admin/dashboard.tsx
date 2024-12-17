import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout/Layout'

const AdminDashboard: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Admin Dashboard - Dental Supplies Store</title>
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        <nav className="bg-white shadow rounded-lg p-6">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/admin/products" 
                className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
              >
                <span className="text-lg">Manage Products </span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/orders" 
                className="flex items-center text-teal-600 hover:text-teal-800 transition-colors"
              >
                <span className="text-lg">View Orders</span>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </Layout>
  )
}

export default AdminDashboard