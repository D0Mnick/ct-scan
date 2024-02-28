import ProductData from "../data/ProductData.js"
import ProductCard from "./ProductCard"

function Products() {
  return (
    <div className="product-container" data-aos="fade-up">
        <h1>OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum vel quasi iste minus debitis optio quisquam impedit, voluptate eius magni non molestias tempore, nostrum alias eveniet possimus doloribus consectetur.</p>
        <div className="project-container">
        {ProductData.map ((val, index) => {
            return(
                <ProductCard 
                key={index}
                img={val.img}
                h1={val.h1}
                text={val.text}
                text1={val.text1}
                text2={val.text2}

                />
            )
          })}

        </div>
    </div>
  )
}

export default Products