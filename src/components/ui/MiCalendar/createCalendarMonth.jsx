import getDay from "../../../utils/getDay";

export default function createCalendarMonth(year, month, data) {
    let mon = month //- 1; // months in JS are 0..11, not 1..12
    let d = new Date(year, mon);
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

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
        let btnBlack = `<button class='hover:bg-slate-200/60 w-full h-full py-3'><p class='flex flex-col text-center justify-start items-center h-full'>${d.getDate()}</p></button>`
        let btnFill = `<button class='hover:bg-slate-200/60 bg-red-500 w-full h-full py-3'><p class='flex flex-col text-center justify-start items-center h-full'>${d.getDate()}</p></button>`
        
        table += `<td class='my-2 text-slate-800 font-[500] border-[1px] border-slate-300/30 border-solid hover:cursor-pointer h-[150px]'>` + 
        `${data.filter(i => i.fecha.dia === d.getDate()).length > 0  ? btnFill : btnBlack}` + 
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
    let test = document.getElementById('calendarMonth')
    let calNode = document.createElement('div')
    //calNode.setAttribute('id', `cal${months[d.getMonth()]}`)
    calNode.innerHTML = table
    test.appendChild(calNode)
}