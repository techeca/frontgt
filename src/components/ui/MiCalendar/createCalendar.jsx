import getDay from '../../../utils/getDay'

export default function createCalendar(year, month, data) {
    let mon = month //- 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);
    
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let table = `<div class='px-4'>
                    <table id='cal${months[(d.getMonth())]}' class='w-full font-regular p-2 text-sm mb-8 mt-2'>
                        <p class='font-[600] text-slate-700 cursor-pointer'>${months[(d.getMonth())]}</p>
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
                        </thead>
                    <tbody>
                <tr>`;

    // spaces for the first row
    // from Monday till the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
      table += `<td class='my-2 text-slate-800 font-[600] border-[1px] border-solid border-slate-300/30 py-3'><p className='my-2'></p></td>`;
    }

    // <td> with actual dates
    while (d.getMonth() == mon) {
        //let btnDay = document.createElement('button').addEventListener('onclick', () => console.log('aaa'))
        let btnBlank = `<button id='${d.getDate()}-${month}-${year}' class='hover:bg-slate-200/60 w-full py-3'>${d.getDate()}</button>`
        let btnFill = `<button id='${d.getDate()}-${month}-${year}' class='hover:bg-slate-200/60 w-full py-3 bg-red-500'>${d.getDate()}</button>`
      
        table += `<td class='my-2 text-slate-800 font-[500] border-[1px] border-slate-300/30 border-solid hover:cursor-pointer '>` + 
        `${data.filter(i => i.fecha.dia === d.getDate()).length > 0 ? btnFill : btnBlank}` + 
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
    let test = document.getElementById('calendar')
    let calNode = document.createElement('div')
    calNode.innerHTML = table
    test.appendChild(calNode)
  }