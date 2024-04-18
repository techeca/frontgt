export default function DayCalendar(data){
    const dataofDay = data.data //dataAtencion.filter(t => t.fecha.anio === dateActual.getFullYear() && t.fecha.mes === dateSelected && t.fecha.dia === daySelected)
    
    return(
        <table className="w-full">
            <tbody>
                {[...Array(24).keys()].slice(6).concat([...Array(24).keys()].slice(0, 6)).map(i => 
                    <tr key={i} className='w-full'>
                        <td className="text-xs w-1/12 border-y-0 border-[1px]">{i < 10 ? `0${i}:00` : `${i}:00`}</td>
                            <td width={100} className="border-[1px]"> 
                                                    
                                {dataofDay.length > 0 ? 
                                <>
                                    <div className=" w-full h-12 border-0 ">
                                        {i === dataofDay.filter(t => t.hora.min === 0)[0]?.hora.hora ? 
                                            <div className="w-full h-full rounded-md flex text-xs font-[600] gap-2 hover:bg-violet-600/30 text-violet-800 bg-violet-200/30 hover:cursor-pointer">
                                                <p className="font-[500] self-start ml-1">{dataofDay.filter(t => t.hora.min === 0)[0]?.hora.hora}:{dataofDay.filter(t => t.hora.min === 0)[0].hora.min}0<span className="ml-2 text-xs font-[600]">{dataofDay.filter(t => t.hora.min === 0)[0].cliente} </span></p>
                                            </div> 
                                        : 
                                        <div className="py-3 border-gray-300/40 border-b-[1px] h-12 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                        }
                                    </div>
                                    <div className="w-full h-12 border-0 ">
                                        {i === dataofDay.filter(t => t.hora.min === 30)[0]?.hora.hora ?
                                            <div className="w-full h-full rounded-md items-center flex text-xs font-[600] gap-2 hover:bg-blue-600/30 text-blue-800 bg-blue-200/30 hover:cursor-pointer">
                                                <p className="font-[500] self-start ml-1">{dataofDay.filter(t => t.hora.min === 30)[0].hora.hora}:{dataofDay.filter(t => t.hora.min === 30)[0].hora.min}<span className="ml-2 text-xs font-[600]">{dataofDay.filter(t => t.hora.min === 30)[0].cliente} </span></p>
                                            </div> 
                                        : 
                                        <div className="py-3 border-gray-300/40 h-12 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                        }
                                    </div>
                                </>
                                :
                                <>
                                    <div className="py-3 h-12 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                    <div className="py-3 h-12 hover:cursor-pointer hover:bg-slate-400/20"></div>
                                </>
                                }
                            </td>
                                        
                    </tr>    
                )}
            </tbody>
        </table>
    )
}