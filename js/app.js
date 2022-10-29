const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container")

const productos = [
    {
        id: 1,
        nombre: "topper",
        precio: 15500,
        img:"https://i.postimg.cc/8c6hKzjb/z1.jpg",
        
    },
    {
        id: 2,
        nombre: "converse",
        precio: 13600,
        img: "https://i.postimg.cc/1z84cYgG/z2.jpg",
    },
    {
        id: 3,
        nombre: "salomon",
        precio: 25300,
        img: "https://i.postimg.cc/1zbXWc6L/z3.jpg",
    },
];
let carrito = [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className= "card"
    content.innerHTML = `

    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });

});
///EL CARRRITO SE VERA HACIENDO CLICK AL EMOJI DEL CARRITO
verCarrito.addEventListener("click", () =>{
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    
    modalContainer.append(modalHeader);
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalHeader.append(modalbutton);

    carrito.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}</p>
        
        `;

        modalContainer.append(carritoContent);

    })

    const total= carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className ="total-content";
    totalBuying.innerHTML = `total a pagar: ${total}`;
    modalContainer.append(totalBuying);



});