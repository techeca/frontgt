import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { userService } from "../../services/user.service"

const BASEPATH = import.meta.env.MODE === 'development' ? '/' : 'frontgt/'

export default function useNavigeishon(){
    const navigate = useNavigate() 
    const freePages = ['/login', '/register']
    //const [isLogged, setIsLogged] = useState(false)

    //Muy mejorable
    function checkPage(page){
        if(freePages.some(i => page.includes(i)) && localStorage.getItem('user')){
            //página permitida y ya tiene usuario
            navigate(`/dashboard`, { replace: true })
        }else if(freePages.some(i => page.includes(i)) && !localStorage.getItem('user')){
            //página permitida y no tiene usuario
            navigate(page)
        }else if(!freePages.some(i => page.includes(i)) && !localStorage.getItem('user')){
            //página no permitida y no tiene usuario
            //console.log(page);
            navigate(`/login`, { replace: true })
        }else{
            //localStorage.getItem('user') ? setIsLogged(true) : setIsLogged(false)
            navigate(page, { replace: true })
        }
        return true
    }

    return {
        checkPage,
        userService
    }
}