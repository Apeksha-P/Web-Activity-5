function cal(){
    let a = parseFloat(document.getElementById("leg_1").value);
    let b = parseFloat(document.getElementById("leg_2").value);
    document.getElementById("result").value=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
}