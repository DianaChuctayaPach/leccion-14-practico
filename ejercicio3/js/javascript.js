function calcular() {
    var centigrado=document.getElementById("temp").value;
    var fahrenheit= 9/5 *(centigrado)+32
    var res=document.getElementById('resultado');
    res.innerHTML=fahrenheit;
    
}

