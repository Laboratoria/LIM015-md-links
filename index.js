module.exports = () => {
  // ...
};
//Una promesa es un objeto de js que vincula codigo
//que produce un resultado y puede demorar
//con codigo que quiere consumir el resultado

//ejempl

//*fecth
//*promise then cath
//*new promise (setTimeout, callbacks)
//*promise all

const promise = fetch("https://api.discogs.com/releases/4").then((resp)=>{
    console.log("resolved", resp.status);
    return resp.json();
})

.catch(()=>{
    console.log("rejected")
});

console.log(promise);

//ejemplo de delivery
const pedirHamburguesa = (cantidad) =>{
    setTimeout(()=>{
        const arr=[];
        for (let i=0; i= cantidad; i++){
            arr.push("burger");

        }
        callbackFn(arr);
        return arr;

    }, 10000);
}
const entrega = pedirHamburguesa(4);
console.log("mi pedido es ", entrega);