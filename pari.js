document.getElementById("richiesta").style.display="none"; 
/*
document.getElementById("0").style.display="none";
document.getElementById("1").style.display="none";
document.getElementById("2").style.display="none";
document.getElementById("3").style.display="none";
document.getElementById("4").style.display="none";
document.getElementById("5").style.display="none";
*/



var sceltautente;
var numeroScelto;

function hoclicpari(){
    sceltautente="pari";
    document.getElementById("SceltaPariDispari").innerHTML="<h2 style='color: red; text-decoration-line: none;'>hai scelto pari e adesso scegli il numero da giocare</h2>";
    MostraSceltaNumeri();
}
function hoclicdispari(){
    sceltautente="dispari";
    document.getElementById("SceltaPariDispari").innerHTML="<h2 style='color: red; text-decoration-line: none;'>hai scelto dispari e adesso scegli il numero da giocare</h2>";
    MostraSceltaNumeri();
}

function MostraSceltaNumeri(){
    document.getElementById("SceltaNumeri").style.display="block"; 
}
//sto impazzendo//
function hoclicnumero(numeroSceltoHTML){
    numeroScelto = numeroSceltoHTML;
    alert ("hai scelto il numero: "+numeroScelto);
    Giocata();
}

function GeneraNumeroCasuale(){
    var numcomp = Math.floor(Math.random() * 6); //numcomp=randint(0, 5);
    return numcomp;
}

function CalcolaPari(numero) {
    return numero % 2 === 0;
}

function Giocata(){
    var numeroComputer = GeneraNumeroCasuale();
    // Somma dei numeri
    var somma= numeroScelto+numeroComputer;
    // Vedere se la somma è pari o dispari
    // var pari= EPari(somma) 
    // verdetto
    if (sceltautente == "pari"){
        if (CalcolaPari(somma)==true){
            alert("Hai vinto perche' inizialmente hai scelto "+sceltautente+". Tu hai giocato "+ numeroScelto+" e il computer ha giocato "+numeroComputer);
        }
        else  {if (CalcolaPari(somma) == false)
            alert("Hai perso perche' inizialmente hai scelto "+sceltautente+". Tu hai giocato "+ numeroScelto+" e il computer ha giocato "+numeroComputer);
        }
    }   
    if (sceltautente == "dispari"){
        if (CalcolaPari(somma)==false){
            alert("Hai vinto perche' inizialmente hai scelto "+sceltautente+". Tu hai giocato "+ numeroScelto+" e il computer ha giocato "+numeroComputer);
        }
        else  {if (CalcolaPari(somma) == true)
            alert("Hai perso perche' inizialmente hai scelto "+sceltautente+". Tu hai giocato "+ numeroScelto+" e il computer ha giocato "+numeroComputer);
        }
    }   
        

} 

