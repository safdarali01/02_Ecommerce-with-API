import React, {useContext} from 'react'
//import Product Context  
import {ProductContext} from '../contexts/ProductContext'
//import Product Component  
import Product from '../components/Product'

const Home = () => {
  //Get products from product context
  const {products} = useContext(ProductContext)
  //Get only Men's and Women's Clothing Categories
  const filteredProducts = products.filter((item) => {
    return (item.category === "men's clothing" || item.category === "women's clothing")
  });

  return (
    <div>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
