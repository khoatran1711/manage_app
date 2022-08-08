import React,{useState} from 'react'
import './styles.css'

import Product_Information from './Product_Information'
import Add_Product from './AddProduct'



const MangagePage =()=>{
    const [option, setOption] = useState(0)
    function getImageURL(){
        var image = document.getElementById('image_product')
        console.log(image.src)
        var image_value = document.getElementById('image_value')
        console.log("image_value",image_value.value)
      }
    return(
        <div id='manage_page'>
            <section id="product_list_section">
                <input type="text" id='search_product'></input>
                <section id="products_title_area">
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                <div className='product_title' onClick={()=>setOption(0)}>ID_name</div>
                </section>
                <div id='add_new_product_button_container' onClick={()=>setOption(1)}><div id="add_new_product_button">Add new Product</div></div>
            </section>
           
            <section id="product_information_section">
                {option===0?   <Product_Information/>:""}
                {option===0?   <div id='button_area'>
                            <div className ='button_container' onClick={getImageURL}>   <div className='button'>Change</div></div>
                            <div className='button_container'> <div className='button'>Delete</div></div> 
                        </div> :""}
                {option===1? <Add_Product/> :"" }
                {option===1?   <div id='button_area'>
                            <div className ='button_container' onClick={getImageURL}>   <div className='button'>Add</div></div> 
                        </div> :""}
            </section>
        </div>
    )
}

export default MangagePage