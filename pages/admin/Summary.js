import { useState, useEffect } from "react";
import { Form, Table, Card } from "antd";
import ComplexNavbar from "../Components/newNav";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSumQuestion } from "../../service/sumQuestion";

export default function Summary() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [thisYear, setYear] = useState(new Date().getFullYear().toString());
  useEffect(() => {
    syncData(thisYear);
  }, [thisYear]);

  const syncData = async (year) => {
    const data = await getSumQuestion(year);
    console.log(data);
    setData(data);
  };
  const range = (start, end) => {
    return new Array(end - start).fill().map((d, i) => i + start);
  };
  const years = range(2020, new Date().getFullYear() + 1, 1);

  const App = () => {
    const columns = [
      {
        title: "ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ",
        dataIndex: "question",
        key: "question",
        width: "50%",
      },
      {
        title: "มากที่สุด",
        dataIndex: "the_most",
        key: "the_most",
      },
      {
        title: "มาก",
        dataIndex: "lots",
        key: "lots",
      },
      {
        title: "ปานกลาง",
        dataIndex: "middle",
        key: "middle",
      },
      {
        title: "น้อย",
        key: "little",
        dataIndex: "little",
      },
      {
        title: "น้อยที่สุด",
        key: "minimal",
        dataIndex: "minimal",
      },
    ];

    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  return (
    <div className="relative isolate overflow-hidden py-3 sm:py-5 lg:py-5 tracking-wider bg-slate-50 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ComplexNavbar />
        <div className="h-full py-2 mb-5 px-4 align-item-center flex justify-center">
          <dl className="grid grid-cols-1 lg:gap-x-40 lg:ml-14 gap-y-2 lg:grid-cols-3 lg:pt-2">
            <div>
              <p className="lg:text-4xl text-xl tracking-widest sm:text-left lg:mt-12 my-5 sm:my-auto text-center lg:text-start text-green-700 sm:text-4xl">
                <span className="text-red-500">Faculty</span>
                &nbsp;of&nbsp;Industrial&nbsp;Technology
              </p>
            </div>
          </dl>
        </div>
        <Form layout="inline" className="gap-x-1 text-center align-middle">
          <div className="w-1/8 mt-2 ">
            <p>ปีการศึกษา : &nbsp;</p>
          </div>
          <div className="w-full lg:w-1/6 ">
            <Form.Item initialValue={thisYear}>
              <select
                id="year"
                onChange={(e) => setYear(e.target.value)}
                defaultValue={thisYear}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year + 543}
                  </option>
                ))}
              </select>
            </Form.Item>
          </div>
          <div className="w-full text-end lg:items-center my-5 lg:my-0 lg:w-1/12">
            <Link href={"/"}>
              <button
                type="button"
                className="hover:translate-1 hover:scale-110 duration-300 text-rose-600 hover:bg-rose-700 shadow bg-orange-50 hover:text-white font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2"
              >
                &nbsp;&nbsp;Dashboard
              </button>
            </Link>
          </div>
        </Form>
        <Card className="w-full border-gray-100 border-2 mt-0 lg:mt-5">
          <App />
        </Card>
      </div>
    </div>
  );
}
