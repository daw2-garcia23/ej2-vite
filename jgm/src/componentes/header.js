import { login } from "../vistas/login.js"
import { panel } from "../vistas/panel.js"
import { registro } from "../vistas/registro.js"

export const header = {
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <p class="nav-link">Gestió d'incidències FPLLEFIA<span class="sr-only">(current)</span></p>
            </li>
        </ul>
        <div class="ps-2">
            <button id="btnPanel" class="btn btn-outline-success my-2 my-sm-0 " type="submit">Panel</button>
        </div>  
        <div class="ps-2">
            <button id="btnReg"class="btn btn-outline-success my-2 my-sm-0" type="submit">Registro</button>
        </div>
        <div class="ps-2">
            <button id="btnLog" class="btn btn-outline-success my-2 my-sm-0 " type="submit">Login</button>
        </div>
    </div>
</nav>
`,
script: () =>{

document.querySelector('#btnReg').addEventListener('click', ()=>{
console.log('hola desde el boton de registro')
document.querySelector('main').innerHTML=registro.template
})
   
document.querySelector('#btnLog').addEventListener('click', ()=>{
console.log('hola desde el boton de login')
document.querySelector('main').innerHTML=login.template

   })

document.querySelector('#btnPanel').addEventListener('click', ()=>{
console.log('hola desde el boton de panel')
document.querySelector('main').innerHTML=panel.template
    
       })


}
}