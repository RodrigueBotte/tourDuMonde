// let panier = ["insolite", "gastronomie", "traditionelle"
// ];
var insolite = 5324;
var gastronomie= 6538;
var traditionelle= 5214;

let i = 0;
let x ;
let total;

function panier() {
    i++;
    if(i===1){
        x="personne"
    }
    else{
        x="personnes"
    }
    total = i * insolite;
    count.innerHTML = `${i} ${x} = ${total}€ TTC`;
    localStorage.setItem("total", total);
    localStorage.setItem("personne", i);
}

function paniermoins(){
    i--;
    if(i===1){
        x="personne"
    }
    else{
        x="personnes"
    }
    total = i * insolite;
    if(i<0){
        i=0;
        total = 0;
    };
    if(i===0){
        x="personne"
    };
    count.innerHTML = `${i} ${x} = ${total}€ TTC`;
    localStorage.setItem("total", total);
    localStorage.setItem("personne", i);

}

