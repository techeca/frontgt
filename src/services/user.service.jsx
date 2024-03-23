import { fetchWrapper } from "./fetchWrapper"; 

const URL_BACKEND = 'https://apitestgt-dev-qmcq.2.us-1.fl0.io/api/user/login'


export const userService = {
    usuario: localStorage.getItem('user') !== undefined ? localStorage.getItem('user') : undefined,
    login,
    logout
} 

function login(correo, contrasena){
    return fetchWrapper.postSnH(URL_BACKEND, {correo, contrasena})
           .then(user => {
            localStorage.setItem('user', JSON.stringify(user)) 
            userService.usuario = localStorage.getItem('user')
            return user;
           }).catch(err => {
            console.error(`Error: ${err}`);
           })
}

function logout(){ 
    userService.usuario = undefined;
    localStorage.removeItem('user'); 
}