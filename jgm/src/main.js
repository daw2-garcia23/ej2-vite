import { header } from './componentes/header'
import { login } from './vistas/login.js'
import { panel } from './vistas/panel.js'


//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()

document.querySelector('main').innerHTML = panel.template

