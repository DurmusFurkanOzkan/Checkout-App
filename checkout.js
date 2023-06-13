// const taxRate = 0.18;
// const shippingPrice = 25.99;
// const freeShippingPrice = 3000;


// //* local Storage vs.  sessionStorage

// window.addEventListener("load",() => {

//     localStorage.setItem("taxtRate",taxRate);
//     localStorage.setItem("shippingPrice",shippingPrice);
//     localStorage.setItem("freeShippingPrice",freeShippingPrice);

// });


const navbarList = document.querySelector(".nav__list");

const productList = document.querySelector("div#product-painel");


//* capturing
navbarList.addEventListener("click",(e) =>{
    //? classname ile bütün classları belirtmek lazım
    //? tek class ile yapacaksak classList ile yapılmalı
    if(e.target.getAttribute("class") == "nav__list--btn" || "fa-regular fa-trash-can"){
 
        //? parent element ile
        // e.target.parentElement.firstElementChild.innerText= "My Cart"
        
        //? sibling ile
        // e.target.previousElementSibling.innerText="My Cart";
    

        //? e.target ile e.currentTarget arasındaki fark 
        //? current Target her zaman ilk sabit olan targettır.
        //? yani burada navbarList'in tuttuğu değerdir.

        e.currentTarget.firstElementChild.innerText = "My Cart";
        
        productList.childNodes.forEach(product => {
            product.remove();
        });
        


    }
})


productList.addEventListener("click", (e) =>{

    //*minus

    if(e.target.className == "fa-solid fa-minus"){
        alert("minus")
    }
    
    //*plus


})















