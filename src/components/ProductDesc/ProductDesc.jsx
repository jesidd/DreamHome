import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function ProductDesc(){
    useEffect(()=>{
        AOS.init();
    },[])
    return(
        <>
            <div className="productdesc_container">
                <div className="wrapper productdesc_container_content">
                    <div className="product-description">
                        <h2 data-aos='zoom-in'>
                            Deja 
                            <br />
                            <b>Todo en</b>
                            <br />
                            Nuestras manos           
                        </h2>
                        <div className="product-description-text">
                            <p data-aos='zoom-in'>
                            Basándonos en tus preferencias, te recomendamos las mejores propiedades de sitios como Metro Cuadrado.
                            </p>
                            
                            
                        </div>
                    </div>
                    <div className="product_image" data-aos='zoom-in'>
                        <img src="./src/assets/PdescImage.png" alt="product_image"/>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default ProductDesc