var shop = document.getElementById('shop');
let shopitemsAll = [
    {
        id: "prod1",
        name: "Black Shoe",
        img: "/Shoes/img-1.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 45
       
    },
    {
        id: "prod2",
        name: "Black Shoe ",
        img: "/Shoes/img-2.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 40
        
    },
    {
        id: "prod3",
        name: "Red & white",
        img: "/Shoes/img-3.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 80
        
    },
    {
        id: "prod4",
        name: "Orange ",
        img: "/Shoes/img-4.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 60
        
    }


];
let basket = [];


let shopitems = () => {
    return (shop.innerHTML = shopitemsAll.map((x) => {


        return `
    <div class="images" id=${x.id}>
            <img src=${x.img} alt="">
            <div class="description">
                <h1>${x.name} </h1>
                <p>${x.details}</p>
                    <div class="inputs">
                        <button onclick="decrement(${x.id})" class="same-button">-</button>
                        <div id=${x.id} class=${x.class}>0</div>
                        <button onclick= "increment(${x.id})"  class="same-button">+</button>
                    </div>
                    <button class="btn">Add to Cart</button>

            </div>
        </div>
    
    
    `;
    })
        .join(""));
};
shopitems();


let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)
    
    if (search === undefined) return;
    if(search.item === 0 ) return ;
    
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
}
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id)
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1
        })

    }
    else {
        search.item += 1;
    }


    update(selectedItem.id);
}
let update = (id) =>{
    let search = basket.find((x)=> x.id === id);
    console.log(search.item);
    // document.getElementById(id).innerHTML = search.item;
    // document.querySelector(".${x.class}").innerHTML = search.item;
    
}



