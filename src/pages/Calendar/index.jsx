import { Button, Card, Dropdown, TextInput, Datepicker } from "flowbite-react"
import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { CalDrawer, DayCalendar, WeekCalendar } from "../../components/ui/MiCalendar";
import createCalendar from "../../components/ui/MiCalendar/createCalendar";
import createCalendarMonth from "../../components/ui/MiCalendar/createCalendarMonth";
//import useNavigeishon from '../../hooks/useNavigeishon'
import drawerController from '../../utils/drawerController'
import { userService } from '../../services/'
import { useMemo } from "react";

export default function Calendar(){
    const [dateActual, setDateActual] = useState(new Date());
    const [dateSelected, setDateSelected] = useState(false);
    const [daySelected, setDaySelected] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false)
    const [tipoCal, setTipoCal] = useState('year')
    //const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    //const navigeishon = useNavigeishon()
    const dataAtencion = JSON.parse(userService.negocio).agenda

    const months = useMemo(() => {
        return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }, [])

    useEffect(() => {
        if(document.getElementById('calendar') && document.getElementById('calendar')?.childElementCount === 0){   
            for (let index = 0; index < 12; index++) {
                createCalendar(dateActual.getFullYear(), index, dataAtencion.filter(i => i.fecha.anio === dateActual.getFullYear() && i.fecha.mes === index))
            }
            let node = document.getElementById(`calendar`)
            node.addEventListener('click', (e) => {
                if(months.filter(i => i === e.target.textContent).length > 0){
                    setDateSelected(months.indexOf(e.target.textContent))
                    setTipoCal('month')
                }
                if(e.target.tagName === 'BUTTON'){
                    setDaySelected(Number(e.target.textContent)) 
                    let getmonth = e.target.id.split('-') 
                    setDateSelected(Number(getmonth[1]))
                    setTipoCal('day')
                }     
            })}

        if(document.getElementById('calendarMonth') && document.getElementById('calendarMonth')?.childElementCount === 0){  
            createCalendarMonth(dateActual.getFullYear(), dateSelected ? dateSelected : dateActual.getMonth(), dataAtencion.filter(i => i.fecha.mes === dateSelected))}

        drawerController('drawer-calendario', setShowDrawer)
    }, [tipoCal, dateActual, daySelected, dataAtencion, months, dateSelected])

    return(
            <Card className="shadow-sm w-full font-regular">
                <div className="flex md:flex-row flex-col gap-4 w-full justify-between">
                    <div className="grid grid-cols-2 md:flex gap-4 w-full md:justify-start justify-between">
                        <Datepicker disabled weekStart={1} onClick={(e) => setDateActual(e.target.value)} language="es-ES" minDate={new Date(2024, 0, 1)} maxDate={new Date(2024, 11, 30)} />
                        <TextInput disabled className="" type={'text'} icon={LuSearch} placeholder='Buscar por mascota o cliente'></TextInput>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:flex grid grid-cols-2  w-full gap-4">
                            <Button onClick={() => setTipoCal('year')} className="w-full" color={'gray'}>Año</Button>
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
                    <div className="mt-4"><div id='calendar' className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-2 lg:grid-cols-2 w-full'></div></div>
                : <></>
                }

                {tipoCal === 'month' ?
                    <div id='calendarMonth'></div>
                : <></>
                }

                {tipoCal === 'week' ?
                    <div className="mt-[-17px]"><WeekCalendar /></div>
                : <></>
                }

                {tipoCal === 'day' ?
                    <div className="mt-[-17px]">     
                        <DayCalendar data={dataAtencion.filter(t => t.fecha.anio === dateActual.getFullYear() && t.fecha.mes === dateSelected && t.fecha.dia === daySelected)} />
                    </div>
                : <></>
                }  
                <CalDrawer showDrawer={showDrawer} id={'drawer-calendario'} labelId='Agregar Atención'  />
            </Card>
    )
}