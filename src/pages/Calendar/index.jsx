import { Button, Card, Dropdown, Label, TextInput, Datepicker, Select, Table, Textarea, Radio } from "flowbite-react"
import { Drawer } from "flowbite";
import { LuSearch } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

function createCalendar(year, month) {
    

    let mon = month //- 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);
    
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    //console.log(months[0]);

    let table = `<div class='px-4'><table id='cal${months[(d.getMonth())]}' class='w-full font-regular p-2 text-sm mb-8 mt-2'>
                    <p class='font-[600] text-slate-700'>${months[(d.getMonth())]}</p>
                    <thead>
                        <tr>
                            <th><p class='my-2 text-slate-400'>L</p></th>
                            <th><p class='my-2 text-slate-400'>M</p></th>
                            <th><p class='my-2 text-slate-400'>M</p></th>
                            <th><p class='my-2 text-slate-400'>J</p></th>
                            <th><p class='my-2 text-slate-400'>V</p></th>
                            <th><p class='my-2 text-slate-400'>S</p></th>
                            <th><p class='my-2 text-slate-400'>D</p></th>
                        </tr>
                        </div>
                    </thead>
                    <tbody>
                <tr>`;

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += `<td class='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'><p className='my-2'></></td>`;
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
      table += `<td class='my-2 text-slate-800 font-[500] border-[1px] border-slate-300/30 border-solid hover:cursor-pointer '>` + `<button class='hover:bg-slate-200/60 w-full py-3'>${d.getDate()}</button>` + '</td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += `<td class='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'></td>`;
      }
    }

    // close the table
    table += '</tr></tbody></table></div>';
    //const resp = table.replace('`', '')
    //console.log(resp);

    //return(resp)
    //console.log(document.getElementById(`cal${months[d.getMonth()]}`));
    let test = document.getElementById('calendar')
    let calNode = document.createElement('div')
    //calNode.setAttribute('id', `cal${months[d.getMonth()]}`)
    calNode.innerHTML = table
    test.appendChild(calNode)
    
    //test.innerHTML = table  
  }

function createCalendarMonth(year, month) {
    

    let mon = month //- 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);
    
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    //console.log(months[0]);

    let table = `<div class=''><table id='cal${months[(d.getMonth())]}' class='w-full font-regular text-sm'>
                    <tbody>
                <tr>`;

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += `<td class='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'><p class='my-2'></></td>`;
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
      table += `<td class='my-2 text-slate-800 font-[500] border-[1px] border-slate-300/30 border-solid hover:cursor-pointer h-[150px]'>` + 
      `<button class='hover:bg-slate-200/60 w-full h-full py-3'><p class='flex flex-col text-center justify-start items-center h-full'>${d.getDate()}</p></button>` + 
      '</td>';

      if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += `<td class='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'></td>`;
      }
    }

    // close the table
    table += '</tr></tbody></table></div>';
    //const resp = table.replace('`', '')
    //console.log(resp);

    //return(resp)
    //console.log(document.getElementById(`cal${months[d.getMonth()]}`));
    let test = document.getElementById('calendarMonth')
    let calNode = document.createElement('div')
    //calNode.setAttribute('id', `cal${months[d.getMonth()]}`)
    calNode.innerHTML = table
    test.appendChild(calNode)
    
    //test.innerHTML = table  
}

function createCalendarWeek(year, month, week) {
    let mon = month //- 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);

    let table = `<td className='border-t-0 border-[1px] border-solid w-[50px]'></td>`

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += `<td className='my-2 text-slate-800 font-[600] border-t-0 border-[1px] text-lg'>&nbsp</td>`;
    }

    while (d.getMonth() == mon) {
        table += `<td className='border-t-0 text-slate-800 font-[600] border-[1px] text-lg h-9'><p className='my-2'>${d.getDate()}</p></td>`; //${d.getDate()}

        if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
          //table += '</tr>';
          d.setDate(d.getDate() + 1);
          //console.log('corte');
          break
        }else{
            d.setDate(d.getDate() + 1); 
        }
        
    }
    // add spaces after last days of month for the last row
    // 29 30 31 * * * *
    /*if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += `<td className='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'></td>`;
      }
    }*/

    // close the table
    let test = document.getElementById('calendarWeek') 
    test.innerHTML = table
}

function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
}

export default function Calendar(){
    const [isLoad, setIsLoad] = useState(false)
    const date1 = new Date('Febrero 2, 2024 10:30:00');
    const [showDrawer, setShowDrawer] = useState(false)
    const [tipoCal, setTipoCal] = useState('year')

    const dataAtencion = {
        fecha:{dia:2, anio:2024, mes:1}, //febrero  0, 1, 2, 3,...
        cliente: 'Jim Vásquez',
        mascota: 'Cleo',
        hora: {hora:10, min:30}
    }

    useEffect(() => {
        if(document.getElementById('calendar') && document.getElementById('calendar')?.childElementCount === 0){   
            for (let index = 0; index < 12; index++) {
                //console.log(`index: ${index}`);
                createCalendar(2024, index)
            }
            setIsLoad(true)
        }

        if(document.getElementById('calendarMonth') && document.getElementById('calendarMonth')?.childElementCount === 0){      
            createCalendarMonth(2024, 0)
            setIsLoad(true)
        }

        if(document.getElementById('calendarWeek') && document.getElementById('calendarWeek')?.childElementCount === 0){      
            createCalendarWeek(2024, 1)
            setIsLoad(true)
        }

        if(document.getElementById('drawer-right-example')){
            const $targetEl = document.getElementById('drawer-right-example');

            const options = {
                placement: 'right',
                backdrop: true,
                bodyScrolling: false,
                edge: false,
                edgeOffset: '',
                backdropClasses:
                    'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
                onHide: () => {
                    console.log('drawer is hidden');
                },
                onShow: () => {
                    console.log('drawer is shown');
                },
                onToggle: () => {
                    console.log('drawer has been toggled');
                },
            };     
        
            const instanceOptions = {
                id: 'drawer-right-example',
                override: true
              };
        
              setShowDrawer(new Drawer($targetEl, options, instanceOptions));
              setIsLoad(true)
        }

    }, [tipoCal])

    return(
            <Card className="shadow-sm w-full font-regular">
                <div className="flex md:flex-row flex-col gap-4 w-full justify-between">

                    <div className="grid grid-cols-2 md:flex gap-4 w-full md:justify-start justify-between">
                        <Datepicker weekStart={1} language="es-ES" minDate={new Date(2024, 0, 1)} maxDate={new Date(2024, 11, 30)} />
                        {/*<Dropdown label='2024' color={'gray'} className=''>
                            <Dropdown.Item>
                                2024
                            </Dropdown.Item>
                        </Dropdown>*/}
                        <TextInput className="" type={'text'} icon={LuSearch} placeholder='Buscar por mascota o cliente'></TextInput>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:flex grid grid-cols-2  w-full gap-4">
                            <Button className="w-full" color={'gray'}>Hoy</Button>
                            <Dropdown arrowIcon={true} color='gray' className="" label='Vistas'>
                                <Dropdown.Item onClick={() => setTipoCal('day')} className='w-[100px]'>Día</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTipoCal('month')}>Mes</Dropdown.Item>
                                <Dropdown.Item onClick={() => setTipoCal('year')} className='rounded-md flex items-center'>Año</Dropdown.Item>
                            </Dropdown>
                        </div>
                        {<Button onClick={() => showDrawer.show()} size='sm' className="bg-cyan-600 whitespace-nowrap"><GoPlus className="w-5 h-5" />Agregar Atención</Button>}
                    </div>

                </div>
                <hr/>
                
                {tipoCal === 'year' ? 
                    <div className="mt-4">
                        <div id='calendar' className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 w-full'></div>
                    </div>
                :
                <></>
                }

                {tipoCal === 'month' ?
                    <div id='calendarMonth'></div>
                :
                <></>
                }

                {tipoCal === 'week' ?
                        <div className="mt-[-17px]">
                                            <table className="w-full">
                                                <thead className='w-full'>
                                                    <tr className='w-full'>
                                                        <th className='border-b-0 border-[1px] border-solid w-[50px]'></th>
                                                        <th className='border-b-0 border-[1px]'>LUN</th>
                                                        <th className='border-b-0 border-[1px]'>MAR</th>
                                                        <th className='border-b-0 border-[1px]'>MIE</th>
                                                        <th className='border-b-0 border-[1px]'>JUE</th>
                                                        <th className='border-b-0 border-[1px]'>VIE</th>
                                                        <th className='border-b-0 border-[1px]'>SAB</th>
                                                        <th className='border-r-[1px]'>DOM</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr id='calendarWeek'></tr>
                                                    {[...Array(24).keys()].slice(6).concat([...Array(24).keys()].slice(0, 6)).map(i => 
                                                        <tr key={i} className='w-full'>
                                                            <td className="text-xs w-[50px] border-y-0 border-[1px]">{i < 10 ? `0${i}:00` : `${i}:00`}</td>

                                                            {[...Array(7).keys()].map(r => 
                                                                <td key={`${i}${r}`} width={100} className="border-[1px]"> 
                                                                    {i === dataAtencion.hora.hora && r === (new Date('2024', '1', '2').getDay() - 1) ? 
                                                                    <>
                                                                        <div className=" w-full h-9 border-0 ">
                                                                            {dataAtencion.hora.min === 30 ? 
                                                                                <div className="w-full h-full rounded-md flex text-xs font-[600] gap-2 text-violet-800 bg-violet-200/30">
                                                                                    <p className="font-[500] self-start ml-1">{dataAtencion.hora.hora}:{dataAtencion.hora.min}<span className="ml-2 text-xs font-[600]">{dataAtencion.cliente} </span></p>
                                                                                </div> 
                                                                            : 
                                                                            <></>}
                                                                        </div>
                                                                        <div className="w-full h-9 border-0 ">
                                                                            {dataAtencion.hora.min === 30 ?
                                                                                <div className="w-full h-full rounded-md items-center flex text-xs font-[600] gap-2 text-blue-800 bg-blue-200/30">
                                                                                    <p className="font-[500] self-start ml-1">{dataAtencion.hora.hora}:{dataAtencion.hora.min}<span className="ml-2 text-xs font-[600]">{dataAtencion.cliente} </span></p>
                                                                                </div> 
                                                                            : 
                                                                            <></>}
                                                                        </div>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <div className="py-3 border-gray-300/40 border-b-[1px] h-9"></div>
                                                                        <div className="py-3 h-9"></div>
                                                                    </>
                                                                    }
                                                                </td>
                                                            )}
                                                        </tr>    
                                                    )}
                                                </tbody>
                                            </table>
                        </div>
                :
                <></>
                }

                {tipoCal === 'day' ?
                        <div className="mt-[-17px]">
                        <table className="w-full">
                            <tbody>
                                {[...Array(24).keys()].slice(6).concat([...Array(24).keys()].slice(0, 6)).map(i => 
                                    <tr key={i} className='w-full'>
                                        <td className="text-xs w-1/12 border-y-0 border-[1px]">{i < 10 ? `0${i}:00` : `${i}:00`}</td>
        
                                            <td key={`${i}`} width={100} className="border-[1px]"> 
                                                {i === dataAtencion.hora.hora ? 
                                                <>
                                                    <div className=" w-full h-9 border-0 ">
                                                        {dataAtencion.hora.min !== 30 ? 
                                                            <div className="w-full h-full rounded-md flex text-xs font-[600] gap-2 text-violet-800 bg-violet-200/30 hover:cursor-pointer">
                                                                <p className="font-[500] self-start ml-1">{dataAtencion.hora.hora}:{dataAtencion.hora.min}<span className="ml-2 text-xs font-[600]">{dataAtencion.cliente} </span></p>
                                                            </div> 
                                                        : 
                                                        <div className="py-3 border-gray-300/40 border-b-[1px] h-9 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                                        }
                                                    </div>
                                                    <div className="w-full h-9 border-0 ">
                                                        {dataAtencion.hora.min === 30 ?
                                                            <div className="w-full h-full rounded-md items-center flex text-xs font-[600] gap-2 text-blue-800 bg-blue-200/30 hover:cursor-pointer">
                                                                <p className="font-[500] self-start ml-1">{dataAtencion.hora.hora}:{dataAtencion.hora.min}<span className="ml-2 text-xs font-[600]">{dataAtencion.cliente} </span></p>
                                                            </div> 
                                                        : 
                                                        <div className="py-3 border-gray-300/40 border-b-[1px] h-9 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                                        }
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="py-3 border-gray-300/40 border-b-[1px] h-9 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                                    <div className="py-3 h-9 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                                </>
                                                }
                                            </td>
                                    
                                    </tr>    
                                )}
                            </tbody>
                        </table>
                        </div>
                :
                <></>
                }  

                <div id="drawer-right-example" className="flex flex-col fixed top-0 right-0 text-start z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-right-label">
                    <h5 id="drawer-right-label" className=" inline-flex items-center mb-4 text-start font-semibold text-gray-500 dark:text-gray-400">
                        Nueva Atención - <span className="text-cyan-700">12:30</span></h5>
                    <button onClick={() => showDrawer.hide()} type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
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
                            <TextInput id="small" icon={FaUser} type="text" sizing="sm" />
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
                        <Button type='text'>Agregar Atención</Button>
                    </div>
                    
                </div>
                
            </Card>
    )
}