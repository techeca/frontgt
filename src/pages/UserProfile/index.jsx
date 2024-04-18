import { Avatar, Badge, Card, Button } from "flowbite-react";
import { FaUserEdit, FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import ChangePassword from "../../components/forms/ChangePassword";
import EditUserDetails from "../../components/forms/EditUserDetails";
import { userService } from "../../services/user.service";

export default function UserProfile(){
    const userData = userService.usuario ? JSON.parse(userService.usuario) : null

    return(
        <>
        {
            userData ?
            <div className="flex flex-col gap-4 w-full font-regular">
                <div className="flex gap-4">
                <Card className=" flex w-full shadow-sm">
                    <h1 className="text-start font-[600]">Perfil</h1>
                    <div className="flex">
                        <Avatar size={'lg'} className='rounde-xl'></Avatar>
                        <div className="flex flex-col items-start ml-3 mt-1">
                            <Badge className="bg-blue-800 text-blue-400 font-[500]">Administrador</Badge>
                            <h2 className="font-[600] text-lg mt-1">Jim Vásquez</h2>
                            <h3 className="text-sm mt-[-3px]">{userData.correo}</h3>
                        </div>
                    </div>
                    <hr></hr>
                    <Button className="self-start"><FaUserEdit className="h5 w-5 mr-2" />Editar</Button>
                </Card>
                <Card className="gap-6 w-full shadow-sm">
                    <EditUserDetails/>
                </Card>
                </div>
                <Card className="text-start gap-6 w-full shadow-sm">
                    <p className=" font-[600] text-lg">Contraseña</p>
                    <div className="w-full flex">
                        <div className="w-full pr-6">
                            <ChangePassword />
                        </div>
                    <div className="w-full rounded-lg text-start">
                        <div className="bg-gray-200/70 rounded-lg p-4">
                        <p className="flex items-center text-slate-700 font-[600]">Requisitos de contraseña</p>
                        <p className="flex items-center">Asegúrate de cumplir estos requisitos</p>
                        <p className="flex items-center mt-4"><FaCheck className="bg-green-500/60 rounded-full w-4 m-2 p-1" />Asegúrate de cumplir estos requisitos</p>
                        <p className="flex items-center"><FaCheck className="bg-green-500/60 rounded-full w-4 m-2 p-1" />Mínimo de caracteres</p>
                        <p className="flex items-center"><FaXmark className="bg-slate-300 rounded-full w-4 m-2 p-[3px]" />Debe tener un símbolo especial como ! ? @ #</p>
                        <p className="flex items-center"><FaXmark className="bg-slate-300 rounded-full w-4 m-2 p-[3px]" />Diferente a tu última contraseña</p>
                        </div>
                    </div>
                    </div>
                </Card>
            </div>
            :
            <></>
        }
        </>
    )
}