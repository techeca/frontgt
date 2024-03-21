import UserLogin from "../../components/UserLogin";

export default function Login(){

    return(
        <div className='px-6'>
            <div className='h-screen gap-24 flex items-center justify-center xl:flex-row flex-col'>
                <UserLogin />
                <div className={`xl:max-w-[50%] xl:block hidden`}>
                    <img width={'auto'} height='auto' src='/img/workers.png'></img>
                </div>
            </div>
        </div>
    )
}