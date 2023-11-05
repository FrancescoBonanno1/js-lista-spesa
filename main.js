const listspesa=["carote", "formaggio", "piselli", "patate", "ak-47", "3 pacchi di 7.62x39"];
console.log(listspesa);


i = 0
while (i< listspesa.length) {
    document.getElementById("spesa").innerHTML= listspesa;
    i++;
    document.getElementById("spesa").innerHTML= listspesa;
}



