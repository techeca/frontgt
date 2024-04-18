export default function WeekCalendar({data}){

    const dataAtencion = data.data

    return(
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
                                                {dataAtencion.hora.min === 0 ? 
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
    )
}