import UserLogin from "../../components/UserLogin";
import { userService } from "../../services";
import { redirect } from "react-router-dom";

const loginAction = async ({ /*params,*/ request}) => {
    let fm = await request.formData()
    const user = await userService.login(fm.get('correo'), fm.get('contrasena'))
    if(user !== null){
      return redirect('/dashboard'); 
    }else{
      return null
    }
}

export default function Login(){
    //Container para formulario de login e imagen
    let imgData = {
     path: '/img/workers.png',
     alt:'logogt'
    }    

    return(
        <div className='px-6'>
            <div className='h-screen gap-24 flex items-center justify-center xl:flex-row flex-col'>
                <UserLogin moreLogin={true} />
                <div className={`xl:max-w-[50%] min-w-[50%] xl:block hidden animate-fade`}>
                    <img alt={imgData.alt} width={'auto'} height='auto' src={`${imgData.path}`} />
                </div>
            </div>
        </div>
    )
}

Login.action = loginAction