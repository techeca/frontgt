import RegisterForm from "../../components/forms/RegisterForm";

export default function Register(){

    return(
        <div className='px-6'>
            <div className='h-screen gap-24 flex items-center justify-center xl:flex-row flex-col'>
                <RegisterForm />
                {<div className={`xl:max-w-[50%] xl:block hidden`}>
                    <img width={'auto'} height='auto' src='/img/workers.png'></img>
                </div>}
            </div>
        </div>
    )
}