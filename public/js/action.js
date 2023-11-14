
function calculanumeros(){
  let n1 = parseInt(document.getElementById("usuario").value)
  let n2 = parseInt(document.getElementById("senha").value)
  let op = document.getElementById("operation").value
  let resultado
  if (op === "+") {
    resultado = (n1+n2)
    alert("Soma: " +n1+" "+op+" "+n2+ " = " +resultado)
  }
  else if(op === "-"){
    resultado = (n1-n2)
    alert("subtração: " +n1+" "+op+" "+n2+ " = " +resultado)
  }
  else if(op === "*"){
    resultado = (n1*n2)
    alert("multiplicação: " +n1+" "+op+" "+n2+ " = " +resultado)
  }
  else if(op === "/"){
    resultado = (n1/n2)
    alert("divisão: " +n1+" "+op+" "+n2+ " = " +resultado)
  }
  else if(op === "sqrt"){
    resultado = Math.sqrt(n1+n2)
    alert("raiz" +resultado)
  }
  
}

