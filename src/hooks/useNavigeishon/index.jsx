//import { userService } from "../../services/user.service"

//const GITPAGE = true
//const BASEPATH = GITPAGE ? '' : '/frontgt'

export default function useNavigeishon(){
    //const navigate = useNavigate() 
    //const freePages = ['/login', '/register', '/']

    //Muy mejorable
    /*function checkPage(page){
        //console.log(page)
        if(freePages.some(i => page === i)){
            //página permitida y ya tiene usuario
            //console.log(page)
            //console.log(userService.usuario);
            if(userService.usuario){
                navigate("/dashboard", { replace: true })
            }else{
                navigate("/login", { replace: true })
            }
        }else if(freePages.some(i => page === i) && !userService.usuario){
                //página permitida y no tiene usuario
                navigate(`${BASEPATH}${page}`)
        }else if(!freePages.some(i => page === i) && !userService.usuario){
                //página no permitida y no tiene usuario
                navigate(`${BASEPATH ? '/login' : '/login'}`, { replace: true })
        }else{
            //console.log(page)
            if(page === '/' && freePages.some(i => page === i)){
                //console.log(page)
                navigate(`/dashboard}`, { replace: true })
            }
            navigate(`${page}`, { replace: true })
        }
    }*/

    return {
        nones:'nones'
    }
}