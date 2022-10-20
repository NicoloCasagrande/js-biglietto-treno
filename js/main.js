const distance = prompt("Inserisci il numero di chilometri che vuoi percorrere!");
const age = Number( prompt("Inserisci la tuà età"));

// 0.21 cent al km 

let price = (distance * 0.21).toFixed(2);
console.log("il prezzo base del biglietto è di euro:", price);

if(age < 16){
    price = price - (price/100*20);
}else if(age > 65){
    price = price - (price/100*40);
}else{
    price = price;
}

console.log("il prezzo finale del biglietto è di euro:", price);
