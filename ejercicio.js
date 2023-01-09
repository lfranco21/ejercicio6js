let compra = ["sal", "azucar", "harina", "huevos", "pan" ];
console.log(compra);

compra.push("aceite de girasol");

console.log(compra);

compra.pop();
console.log(compra);

let listaPeliculas = [{
    titulo: "Prisionero de Azkaban",
    director: "Alfonzo Cuaron",
    fecha: new Date(2004, 05, 03),
},
{
    titulo: "La Propuesta",
    director: "Anne Fletcher",
    fecha: new Date(2009, 06, 23),
},
{
    titulo: "Las estafadoras",
    director: "Gary Ross",
    fecha: new Date("june 05 2018" ),
}
];

const nuevaLista = listaPeliculas.filter(obj => obj.fecha >= new Date("january 01 2010"));
console.log(nuevaLista);

const nuevaLista2 = listaPeliculas.map(obj => obj.director);
console.log(nuevaLista2);

const nuevaLista3 = listaPeliculas.map(obj => obj.titulo);
console.log(nuevaLista3);

const nuevaLista4 = nuevaLista2.concat(nuevaLista3);
console.log(nuevaLista4);

const nuevaLista5= [...nuevaLista2,...nuevaLista3];
console.log(nuevaLista5);