import { toast } from "react-toastify";

const getStoredProducts = ()=>{
    const storedProductStr = localStorage.getItem("productList");
    if(storedProductStr){
        const storedProductData = JSON.parse(storedProductStr);
        return storedProductData;
    }
    else{
        return [];
    }
}

const addToDB = (id) =>{
    const storedProductData = getStoredProducts();
    if(storedProductData.includes(id)){
        toast("Already exist");
    }
    else{
        toast("Add To cart successfully!!");
        storedProductData.push(id);
        const data = JSON.stringify(storedProductData);
        localStorage.setItem("productList", data);

        window.dispatchEvent(new Event("cart-updated"));
    }
}

export {addToDB, getStoredProducts};