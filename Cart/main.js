var shop = document.getElementById('shop');
let shopitemsAll = [
    {
        id: "prod1",
        name: "Black Shoe",
        img: "img-1.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 45
    },
    {
        id: "prod1",
        name: "Black Shoe type 2",
        img: "img-2.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 40
    },
    {
        id: "prod1",
        name: "Red & white Combo",
        img: "img-3.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 80
    },
    {
        id: "prod1",
        name: "Orange and white Cmbo",
        img: "img-4.jpg",
        details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        price: 60
    }


]


let shopitems = () => {
    return (shop.innerHTML = shopitemsAll.map((x)=>{
        return `
    <div class="images">
            <img src=${x.img} alt="">
            <div class="description">
                <h1>${x.name} </h1>
                <p>${x.details}</p>
                    <div class="inputs">
                        <button class="same-button">-</button>
                        <input type="number" name="number" id="amount" value="0" min="0">
                        <button class="same-button">+</button>
                    </div>
                    <button class="btn">Add to Cart</button>

            </div>
        </div
    
    
    `;
}).join(""));
};
shopitems();
