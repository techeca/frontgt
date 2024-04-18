import { Card, Badge } from "flowbite-react" 
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function CardResume({label, value, oldValue}){

    const dif = value - oldValue
    const calcValue = (dif  / oldValue)* 100

    //console.log();

    return(
        <Card className="w-full shadow-sm">
            <div className="flex flex-col gap-2">
                <div className="flex">
                    <Badge size={'xs'} color={dif < 0 ? 'failure' : 'success'} className=''>
                        <p className="flex items-center">{dif < 0 ? <AiOutlineArrowDown className=" mr-1" /> : <AiOutlineArrowUp className=" mr-1" /> } 
                            <span className="font-regular">{calcValue.toFixed(0)}%</span>
                        </p>
                    </Badge>
                </div>
                <p className="text-3xl font-bold">{value}</p>
                <p>{label}</p>
            </div>
        </Card>
    )
}