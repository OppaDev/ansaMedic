import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import ProductList from '../components/product/ProductList'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/product/ProductCard'

const Products: NextPage = () => {
  const { products, loading, error } = useProducts()

  return (
    <Layout>
      <Head>
        <title>Products - Dental Supplies Store</title>
        <meta name="description" content="Browse our dental supplies" />
      </Head>

      <main>
        <ProductList products={products} />
        
      </main>
    </Layout>
  )
}

export default Products