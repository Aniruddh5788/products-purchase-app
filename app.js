const products =[
    {
        id:1,
        title:"T-shirts in just 249 ",
        price:109,
        description:"Branded new  T-shirts in discounte",
        category:"Clothes",
        image:"https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/7/q/w/s-all-rbc-white-one-nb-nicky-boy-original-imagjz5bgpmhcaea.jpeg?q=70&crop=false",
        customerrating:{rating:4.0,count:123},
    },
    {
        id:2,
        title:"Shirts in just 249 ",
        price:249,
        description:"Branded new  Shirts in discounte",
        category:"Clothes",
        image:"./shirt.jpg",
        customerrating:{rating:4.5,count:723},
    },
    {
        id:3,
        title:"jeans in just 349 ",
        price:349,
        description:"Branded new  jeans in discounte",
        category:"Clothes",
        image:"./JEANS.jpg",
        customerrating:{rating:4.6,count:353},
    },
    {
        id:4,
        title:"touser in just 199 ",
        price:199,
        description:"Branded new  touser in discounte",
        category:"Clothes",
        image:"touser.jpg",
        customerrating:{rating:4.7,count:7823},
    },
    {
        id:5,
        title:"underware in just 49 ",
        price:49,
        description:"Branded new  underware in discounte",
        category:"Clothes",
        image:"./underware.jpg",
        customerrating:{rating:4.5,count:723},
    },
    {
        id:6,
        title:"Shoes in just 449 ",
        price:449,
        description:"Branded new  Shoes in discounte",
        category:"Shoe-catagorey",
        image:"./Shoes.jpg",
        customerrating:{rating:3.5,count:888},
    },
    {
        id:7,
        title:"Sleeper in just 249 ",
        price:119,
        description:"Branded new  Sleeper in discounte",
        category:"Sleeper-catagorey",
        image:"./Sleeper.webp",
        customerrating:{rating:4.5,count:723},
    },
    {
        id:8,
        title:"Cricket-Bat in just 649 ",
        price:249,
        description:"Branded new  Cricket-Bat in discounte",
        category:"Sports-Categorey",
        image:"./Cricket-Bat.jpg",
        customerrating:{rating:4.5,count:723},
    },
];
let ul = document.querySelector("ul");

let count=0;
const getproduct = () => {

if (count < 1) {
    products.forEach((product) => { 
let li=document.createElement("li");
let h1=document.createElement("h1");
let img=document.createElement("img");
h1.innerText = product.title;
h1.className="display-6 text-center";
img.setAttribute("src", product.image);
img.style.height="150px";
li.appendChild(img);
li.appendChild(h1);
li.className="list-group-item";
ul.appendChild(li)
});
}else{
    window.alert("product see in your web");
}
count++;
};
let button = document.querySelector("button");
button.addEventListener("click",getproduct);