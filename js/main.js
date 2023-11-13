let btn = document.getElementById("button")
btn.addEventListener("click", function(){
    grigliaGen()
    
})

function grigliaGen(){


    const select = difficoltaLivello();
    let grid = document.getElementById("grid")
    grid.innerHTML = "";
    let numeroCelleTotali;
    let numCellePerRiga;
    
    if (select==1) {
        
        numeroCelleTotali = 49;
        numCellePerRiga = 7;
    } else if (select==2){
        
        numeroCelleTotali = 81;
        numCellePerRiga = 9;

    } else if (select==3){
        
        numeroCelleTotali = 100;
        
    }
    
    for (let i = 1; i <= numeroCelleTotali; i++) {


        let nCelle = i + 0;
        const cella = document.createElement("div");
        cella.classList.add("square");
        cella.classList.add("spazio")
        grid.appendChild(cella);
        cella.innerHTML = nCelle
        cella.style.width = `calc(100% / ${numCellePerRiga})`;
        cella.style.height = `calc(100% / ${numCellePerRiga})`;

        

        cella.addEventListener("click", function(){
        console.log("cliccata", nCelle)
        cella.classList.toggle("colorsqaure")
             
        
        if (nCelle==listaBombe) 
        {
                 console.log("Bomba")
             }
    
    
        });
    }
    
    
}    

function difficoltaLivello() {
    
    const select = parseInt(document.getElementById("select").value);
    console.log (select);
    return select;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const listaBombe = []
for (let i = 0; i < 16; i++) {
    
    const numeroCasuale = getRndInteger(1, 100)
    listaBombe[i] = getRndInteger(1, 100)
    console.log(listaBombe)
    
}