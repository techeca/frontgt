import { fetchWrapper } from "./fetchWrapper"; 
import userdataExample from "./userdataExample.json"

const URL_BACKEND = 'https://apitestdb-dev-gqra.3.us-1.fl0.io/api/user/login'

export const userService = {
    usuario: localStorage.getItem('user') !== null ? localStorage.getItem('user') : undefined,
    negocio: localStorage.getItem('negocio') !== null ? localStorage.getItem('negocio') : undefined,
    login,
    logout
} 

function login(correo, contrasena){
    return fetchWrapper.postSnH(URL_BACKEND, {correo, contrasena})
           .then(user => {
            localStorage.setItem('user', JSON.stringify(user)) 
            localStorage.setItem('negocio', JSON.stringify(userdataExample))
            userService.usuario = localStorage.getItem('user')
            userService.negocio = JSON.stringify(userdataExample)
            return user
           }).catch(err => {
            console.error(`Error: ${err}`);
            return null
           })
}

function logout(){ 
    userService.usuario = undefined;
    userService.negocio = undefined;
    localStorage.removeItem('user'); 
    localStorage.removeItem('negocio');
}