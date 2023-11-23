import userlogin from "./ModuloDados.js";

const login = document.getElementById("login")
const cadastrar = document.getElementById("cadastro")

login.addEventListener("click", (e) => {

  let user = document.getElementById("usuario").value
  let senha = document.getElementById("senha").value

 
})

cadastrar.addEventListener("click", (e) => {
  var usuario = userlogin.find((userlogin) => userlogin.email === "victorsena301@gmail.com")
  console.log(usuario)
})
function encontraUsuario(value, index, array){
  console.table(value.email)
}