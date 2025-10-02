let n;
//padaryti kad patikrintu kad tikrai skaicius iveda manau naudoti
// while cikla ir ismesti window alert ir paprasyti kad ivestu sveika skaiciu
document.getElementById("b1").onclick = function(){
    n = parseInt(document.getElementById("i1").value);
}

let k;
//NUSIPIRKTI BILIETA
document.getElementById("b2").onclick = function(){
    k = parseInt(document.getElementById("i2").value);
    b3.style.display = "inline-block"
}

let A = new Array(n);

document.getElementById("b3").onclick = function(){

let random;
let B = new Array(n);

for (let i = 0; i < n; i++)
{
    random = Math.floor(Math.random() * k) + 1;
    A[i] = random;
    B[i] = i;
}

const info = [{
    x: B,
    y: A,

    mode:"markers"
}];

const isdestymas = {
    dragmode: "select",
    xaxis: {range: [0, n], title: "Eilės numeris"},
    yaxis: {range: [0, k], title: "Reikšmė"},
    title: "Masyvo reikšmės"
};

Plotly.newPlot("grafikas", info, isdestymas);

//const mygtukas = document.getElementById("b4");
l1.style.display = "inline-block";
l2.style.display = "inline-block";
i3.style.display = "inline-block";
l3.style.display = "inline-block";
i4.style.display = "inline-block";
b5.style.display = "inline-block";
};

let pradzia;
let pabaiga;


document.getElementById("b5").onclick = function(){
     pradzia = parseInt(document.getElementById("i3").value);
     pabaiga = parseInt(document.getElementById("i4").value);
     b4.style.display = "inline-block";
}


document.getElementById("b4").onclick = function(){
    const tbody = document.querySelector("#t1 tbody");
    for (let i = pradzia; i <= pabaiga; i++)
    {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${i}</td><td>${A[i]}</td>`;
        tbody.appendChild(tr);
    }
    t1.style.display = "inline-block";

}
