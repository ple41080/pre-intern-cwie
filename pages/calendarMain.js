import { Card } from 'antd';
import CalendarStudent from "./Components/calendarStudent";
import { useRouter } from 'next/router';

export default function calendarMain() {
const router = useRouter();

    return (
        <>
            <Card className="sm:px:20 lg:px-36 px-5 md:h-14 h-5" title={(<a  onClick={()=>router.push('/')} className=" w-40"><svg style={{ height: 20, width: 20 }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"></path>
            </svg></a>)} >

                <CalendarStudent />
            </Card>
        </>
    )
}