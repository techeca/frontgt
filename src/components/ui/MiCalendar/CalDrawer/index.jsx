import { Label, TextInput, Datepicker, Button, Radio, Textarea } from "flowbite-react"
import { FaUser } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

export default function CalDrawer({showDrawer, id, labelId }){

    return(
        <div id={id} className="flex flex-col fixed top-0 right-0 text-start z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-right-label">
                    <h5 id={labelId} className=" inline-flex items-center mb-4 text-start font-semibold text-gray-500 dark:text-gray-400">
                        Nueva Atención - <span className="text-cyan-700">12:30</span></h5>
                    <button onClick={() => showDrawer.hide()} type="button" data-drawer-hide={id} aria-controls={id} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>

                    <div className="flex max-w-md flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="small" className="" value="Cliente" />
                            </div>
                            <TextInput id="small" icon={FaUser} type="text" sizing="md" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="base" value="Paciente" />
                            </div>
                            <TextInput id="base" icon={MdOutlinePets} type="text" sizing="md" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                            <Label htmlFor="large" value="Descripción" />
                            </div>
                            <Textarea id="comment" placeholder="Deja un comentario..." required rows={4} />
                        </div>

                        <Datepicker weekStart={1} language="es-ES" minDate={new Date(2024, 0, 1)} maxDate={new Date(2024, 11, 30)} />
                        
                        <div className="radioDrawer">
                            <Label value="Color" />
                            <fieldset className="flex max-w-md gap-2 mt-2">             
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-violet-700 rounded-sm bg-violet-700 text-violet-700" id="united-state" name="countries" value="USA" defaultChecked />                   
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-indigo-500  rounded-sm bg-indigo-500 text-indigo-500" id="germany" name="countries" value="Germany" />                       
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-blue-500  rounded-sm bg-blue-500 text-blue-500" id="spain" name="countries" value="Spain" />                          
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-pink-500  rounded-sm bg-pink-500 text-pink-500" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-cyan-500  rounded-sm bg-cyan-500 text-cyan-500" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-green-400  rounded-sm bg-green-400 text-green-500" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-yellow-300  rounded-sm bg-yellow-300 text-yellow-300" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-orange-400  rounded-sm bg-orange-400 text-orange-400" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            <div className="flex items-center gap-2">
                                <Radio className="radioDrawer border-[2px] border-red-500  rounded-sm bg-red-500 text-red-500" id="uk" name="countries" value="United Kingdom" />
                            </div>
                            </fieldset>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 h-full items-end">
                        <Button onClick={() => showDrawer.hide()} color='gray' type='text'>Cerrar</Button>
                        <Button type='text'>Agregar</Button>
                    </div>
                    
                </div>
    )
}