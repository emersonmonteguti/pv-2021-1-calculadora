function somar() {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    if(isNaN(n1) || (isNaN(n2)) ){
        alert('Números invalidos');
        return
    }
    alert('Soma: ' + (n1 + n2));
}
function subtrair() {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    if(isNaN(n1) || (isNaN(n2)) ){
        alert('Números invalidos');
        return
    }
    alert('Soma: ' + (n1 - n2));
}
function operacao(op){
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    if(isNaN(n1) || (isNaN(n2)) ){
        alert('Números invalidos');
        return
    }
    var resultado;
    switch(op) {
       case '+': resultado = n1 + n2; 
       break;
       case '-': resultado = n1 - n2; 
       break;
       case '*': resultado = n1 * n2; 
       break;
       case '/': resultado = n1 / n2; 
       break;
    }
    alert('Resultado:' + resultado)
}