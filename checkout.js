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
        
        // productList.childNodes.forEach(product => {
        //     product.remove();
        // });
        
        productList.innerHTML="No Product "
        calculateCardPrice();


    }
})


productList.addEventListener("click", (e) =>{

    //*minus

    if(e.target.className == "fa-solid fa-minus"){

        if(e.target.nextElementSibling.innerText > 1){
            e.target.nextElementSibling.innerText--;
        }
        
        else{
            if(confirm(`${e.target.closest(".main__product-info").querySelector("h2").innerText} will be removed!`)){
                e.target.closest(".main__product").remove();
            }
        }
        console.log(document);
        calculateProductPrice();

    }

    //*plus

    //? en effective'i classList ve id ile kullanmak
    else if(e.target.classList.contains("fa-plus")){
        e.target.previousElementSibling.innerText++;
        calculateProductPrice();
    }

    //*remove

    else if(e.target.id == "remove-product"){
    }

    else{
    }
    
    calculateCardPrice();
});


//* bubbling childdaki işlemleri parenta yapabilmek
//* capturing parenttaki işlemleri childa yapabilmek

const calculateProductPrice = () =>{

    //*product line calculations


}

const calculateCardPrice = () =>{

    //*card line calculations


}















