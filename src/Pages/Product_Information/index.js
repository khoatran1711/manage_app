import React, { useState }  from "react";

import test_image from "./../assets/test_product.png"
import './style.css'


const Product_Information =()=>{
   
    let base64code = ''
    
	const onChange = (e) => {
		const files = e.target.files
		const file = files[0]
        getBase64(file)
      
     
        //base64code.replace('data:image/png;base64,','')
        console.log("mybase",base64code)
        //var imageURL=myFunction(base64code)
        
	}

	const onLoad = (fileString) => {
		console.log(fileString)
		base64code = fileString
	}

	const getBase64 = (file) => {
		let reader = new FileReader()
		reader.readAsDataURL(file)
		
        reader.onload = () => {
			onLoad(reader.result)
            //base64code.replace('data:image/png;base64,','')
            var code = base64code.slice(22)
            var type =  base64code.split(';')[0].slice(5)
            console.log(type)
            var image_value = document.getElementById('image_value')
            image_value.value = base64code
            var imageURL=myFunction(code,type)
            console.log("my URL",imageURL)
            var image = document.getElementById('image_product')
            image.src=imageURL
		}
      
	}


    function myFunction(basecode,typeofdata) {
        var str =
          basecode;
        var enc = window.atob(str);
      
        var image = new File([enc], {
          type: typeofdata
        });
        var file = b64toBlob(str, typeofdata);
        console.log(file.size);
     
        var imgURL = URL.createObjectURL(file);
        console.log("myURL", imgURL);
        return imgURL
      }

      function b64toBlob(b64Data, contentType, sliceSize) {
        contentType = contentType || "";
        sliceSize = sliceSize || 512;
      
        var byteCharacters = window.atob(b64Data);
        var byteArrays = [];
      
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          var slice = byteCharacters.slice(offset, offset + sliceSize);
      
          var byteNumbers = new Array(slice.length);
          for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
      
          var byteArray = new Uint8Array(byteNumbers);
      
          byteArrays.push(byteArray);
        }
      
        return new File(byteArrays, "pot", { type: contentType });
      }
    

     
    
    return(
        <div id='info_area'>
            <input className="input_place" type="text" defaultValue="ID" disabled={true}/>
            <br/>
            <input className="input_place" type="text" defaultValue="name"/>
            <br/>
            <input className="input_place" type="text" defaultValue="Price"/>
            <br/>
            <input className="input_place" type="text" defaultValue="Status"/>
            <br/>
            <input className="input_place" type="text" defaultValue="Description"/>
            <br/>
            <input id='change_image_button' type='file' onChange={onChange} />
            <br/>
            <input id='image_value' type="text" hidden={true} ></input>
            <img id="image_product" src={test_image}></img>
        </div>
    )
}

export default Product_Information;