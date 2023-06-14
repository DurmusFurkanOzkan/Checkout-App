





























// //  const taxRate = 0.18;
// //  const shippingPrice = 25.99;
// //  const freeShippingPrice = 3000;


// //  //* local Storage vs.  sessionStorage

// //  window.addEventListener("load",() => {

// //     localStorage.setItem("taxtRate",taxRate);
// //     localStorage.setItem("shippingPrice",shippingPrice);
// //     localStorage.setItem("freeShippingPrice",freeShippingPrice);

// // });





// const navbarList = document.querySelector(".nav__list");

// const productList = document.querySelector("div#product-painel");


// //* capturing
// navbarList.addEventListener("click",(e) =>{
//     //? classname ile bütün classları belirtmek lazım
//     //? tek class ile yapacaksak classList ile yapılmalı
//     if(e.target.getAttribute("class") == "nav__list--btn" || "fa-regular fa-trash-can"){
 
//         //? parent element ile
//         // e.target.parentElement.firstElementChild.innerText= "My Cart"
        
//         //? sibling ile
//         // e.target.previousElementSibling.innerText="My Cart";
    

//         //? e.target ile e.currentTarget arasındaki fark 
//         //? current Target her zaman ilk sabit olan targettır.
//         //? yani burada navbarList'in tuttuğu değerdir.

//         e.currentTarget.firstElementChild.innerText = "My Cart";
        
//         // productList.childNodes.forEach(product => {
//         //     product.remove();
//         // });
        
//         productList.innerHTML="No Product "
//         calculateCardPrice();


//     }
// })


// productList.addEventListener("click", (e) =>{

//     //*minus

//     if(e.target.className == "fa-solid fa-minus"){

//         if(e.target.nextElementSibling.innerText > 1){
//             e.target.nextElementSibling.innerText--;
//             calculateProductPrice(e.target);
            
//         }
        
//         else{
//             if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
//                 e.target.closest(".main__product").remove();
//             }
           
//         }
        
        

//     }

//     //*plus

//     //? en effective'i classList ve id ile kullanmak
//     else if(e.target.classList.contains("fa-plus")){
//         e.target.previousElementSibling.innerText++;
//         calculateProductPrice(e.target);
//     }

//     //*remove

//     else if(e.target.id == "remove-product"){
//         if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
//             e.target.closest(".main__product").remove();
//         }
//     }

//     else{
//     }
    
//     calculateCardPrice();
// });


// //* bubbling childdaki işlemleri parenta yapabilmek
// //* capturing parenttaki işlemleri childa yapabilmek

// const calculateProductPrice = (btn) =>{

//     //*product line calculations

//     const infoDiv = btn.closest(".main__product-info");
    
//     const price = infoDiv.querySelector(".main__product-price strong").innerText;

//     const quantity = infoDiv.querySelector("#quantity").innerText;

//     infoDiv.querySelector(".main__product-line-price").innerText = (price*quantity).toFixed(2);


// }

// const calculateCardPrice = () =>{

//     //*card line calculations
//     const productPriceDivs = productList.querySelectorAll(".main__product-line-price");

//     let subtotal = 0;
//     productPriceDivs.forEach(price => {
//         subtotal += parseFloat( price.innerText ) ;


//     });

//     const taxPrice = subtotal * localStorage.getItem("taxRate");
//     console.log(taxPrice);

//     const shippingPrice = parseFloat(subtotal > 0 &&  subtotal < localStorage.getItem("freeShippingPrice") ? localStorage.getItem("shippingPrice") : 0).toFixed(2);

//     const totalPrice = subtotal + shippingPrice + taxPrice;

//     console.log(totalPrice);

    
// }















