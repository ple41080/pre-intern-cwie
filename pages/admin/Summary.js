import React, { useRef, useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet, Card, Input } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import InputEventBranch from '../Components/InputEventBranch';
import App1 from '../Components/showCalendar';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ComplexNavbar from '../Components/newNav'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Summary() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [setIsModalCalendar, setIsCalendarOpen] = useState(false);
  const [setIsModaladd, setIsAddOpen] = useState(false);
  const router = useRouter();
  
  const data = [
    {
      key: '1',
      factors: "1.1 ความมีชื่อเสียงของมหาวิทยาลัยและเป็นที่ยอมรับของสังคม",
      the_most: 6,
      lots: 2,
      middle: 1,
      little: 1,
      minimal: 0,
    },
    {
      key: '2',
      factors: "1.2 เป็นมหาวิทยาลัยที่จบออกมาแล้วเป็นที่ยอมรับในตลาดแรงงาน",
      the_most: 4,
      lots: 2,
      middle: 1,
      little: 3,
      minimal: 0,
    },
    {
      key: '3',
      factors: "1.3 เป็นมหาวิทยาลัยที่มีความทันสมัยและมีความพร้อมในทุกด้าน",
      the_most: 6,
      lots: 1,
      middle: 3,
      little: 0,
      minimal: 0,
    },
    {
      key: '4',
      factors: "1.4 สถานที่ตั้งของมหาวิทยาลัยเดินทางมาเล่าเรียนสะดวกสบาย",
      the_most: 2,
      lots: 2,
      middle: 1,
      little: 2,
      minimal: 3,
    },
    {
      key: '5',
      factors: "1.5 นักเรียนมีความปรารถนาที่จะเรียนสาขาที่เลือกในมหาวิทยาลัยนี้ เพราะพ่อ แม่ และผู้ปกครองจบจากมหาวิทยาลัยนี้ หรือ เพื่อนๆ ชักชวน",
      the_most: 1,
      lots: 8,
      middle: 0,
      little: 0,
      minimal: 1,
    },
    {
      key: '6',
      factors: "2.1 ค่าธรรมเนียมการศึกษา เช่น ค่าหน่วยกิตและค่าลงทะเบียน มีราคาเหมาะสม",
      the_most: 4,
      lots: 1,
      middle: 1,
      little: 0,
      minimal: 4,
    },
    {
      key: '7',
      factors: "2.2 ทุนการศึกษามีผลต่อการตัดสินใจในการเลือกเรียน",
      the_most: 2,
      lots: 1,
      middle: 4,
      little: 3,
      minimal: 0,
    },
    {
      key: '8',
      factors: "2.3 ค่าครองชีพเพียงพอจากผู้ปกครองหรือแหล่งทุน",
      the_most: 4,
      lots: 2,
      middle: 1,
      little: 2,
      minimal: 1,
    },
    {
      key: '9',
      factors: "2.4 ค่าอาหารจากโรงอาหารหรือร้านค้าอื่นๆในมหาวิทยาลัย",
      the_most: 1,
      lots: 2,
      middle: 7,
      little: 0,
      minimal: 0,
    },
    {
      key: '10',
      factors: "3.1 หลักสูตรที่เปิดสอนเป็นที่นิยม และเป็นที่ต้องการของตลาดแรงงาน ในปัจจุบัน",
      the_most: 7,
      lots: 1,
      middle: 1,
      little: 1,
      minimal: 0,
    },
    {
      key: '11',
      factors: "3.2 คณาจารย์ประจำหลักสูตรได้รับการยอมรับจากภายนอก",
      the_most: 4,
      lots: 4,
      middle: 1,
      little: 1,
      minimal: 0,
    },
    {
        key: '12',
        factors: "3.3 มีห้องเรียนที่ได้มาตรฐานและบรรยากาศดี",
        the_most: 10,
        lots: 0,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '13',
        factors: "3.4 ทักษะ ความรู้ และความสามารถที่นักศึกษาเป็นที่ยอมรับ",
        the_most: 1,
        lots: 9,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '14',
        factors: "3.5 มีความคาดหวังในโอกาสและอาชีพที่รองรับหลังสำเร็จการศึกษา",
        the_most: 3,
        lots: 3,
        middle: 3,
        little: 1,
        minimal: 0,
      },
      {
        key: '15',
        factors: "4.1 รายได้ของครอบครัวเพียงพอต่อการเรียนตลอดหลักสูตร",
        the_most: 8,
        lots: 2,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '16',
        factors: "4.2 ครอบครัวสนับสนุนทุกๆด้านของการเข้าศึกษาต่อ",
        the_most: 1,
        lots: 2,
        middle: 3,
        little: 4,
        minimal: 0,
      },
      {
        key: '17',
        factors: "4.3 ทุนการศึกษา หรือ สิทธิประโยชน์ ที่คาดว่าจะได้รับ",
        the_most: 2,
        lots: 8,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '18',
        factors: "5.1 	ความเห็นของเพื่อนในการแนะนำศึกษาต่อ",
        the_most: 0,
        lots: 10,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '19',
        factors: "5.2 ความเห็นของคนรักในการแนะนำศึกษาต่อ",
        the_most: 0,
        lots: 0,
        middle: 5,
        little: 5,
        minimal: 0,
      },
      {
        key: '20',
        factors: "5.3 ความเห็นของคุณครูในการแนะนำศึกษาต่อ",
        the_most: 5,
        lots: 4,
        middle: 0,
        little: 1,
        minimal: 0,
      },
      {
        key: '21',
        factors: "5.4 ความเห็นของครอบครัวในการแนะนำศึกษาต่อ",
        the_most: 7,
        lots: 3,
        middle: 0,
        little: 0,
        minimal: 0,
      },
      {
        key: '22',
        factors: "5.5 ความเห็นของมหาวิทยาลัยในการแนะนำศึกษาต่อ",
        the_most: 2,
        lots: 4,
        middle: 1,
        little: 3,
        minimal: 0,
      },


  ];



  const App = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
   
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            className=' rounded-lg'
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              className=' bg-teal-500'
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              size="small"
              style={{
                width: 90,
              }}
            >
              ค้นหา
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              ล้าง
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
    const columns = [
      {
        title: 'ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ',
        dataIndex: 'factors',
        key: 'factors',
        width: '50%',

      },
      {
        title: 'มากที่สุด',
        dataIndex: 'the_most',
        key: 'the_most',

      },
      {
        title: 'มาก',
        dataIndex: 'lots',
        key: 'lots',

      },
      {
        title: 'ปานกลาง',
        dataIndex: 'middle',
        key: 'middle',

      },
      {
        title: 'น้อย',
        key: 'little',
        dataIndex: 'little',

      },
      {
        title: 'น้อยที่สุด',
        key: 'minimal',
        dataIndex: 'minimal',
      },
    ];

    return <Table
      columns={columns}
      dataSource={data}
      scroll={{
        y: 300
      }}
    />
  };
  
  
  const showCalendar = () => {
    setIsCalendarOpen(true);
  };
  const cancelCalendar = () => {
    setIsCalendarOpen(false);
  };
  const showAdd = () => {
    setIsAddOpen(true);
  };
  const cancelAdd = () => {
    setIsAddOpen(false);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onOk = () => {
    setIsModalOpen(false);
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative isolate overflow-hidden py-3 sm:py-5 lg:py-5 tracking-wider bg-slate-50 ">
      <ComplexNavbar/>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
     
        <div className="h-full py-2 mb-5 px-4 align-item-center flex justify-center">
          <dl className="grid grid-cols-1 lg:gap-x-40 lg:ml-14 gap-y-2 lg:grid-cols-3 lg:pt-2">

            <div>
              <p className="lg:text-4xl text-xl tracking-widest sm:text-left lg:mt-12 my-5 sm:my-auto text-center lg:text-start text-green-700 sm:text-4xl"><span className='text-red-500'>Faculty</span>&nbsp;of&nbsp;Industrial&nbsp;Technology</p>
            </div>

           
          </dl>

        </div>

        <Form
          layout="inline" className='gap-x-1 text-center align-middle'
        >
          <div className='w-1/8 mt-2'>
            <p>สาขาวิชา : &nbsp;</p>
          </div>
          <div className=' lg:w-1/3 w-full '>
            <Form.Item >
              <select id="subject" class="bg-white border tracking-wider border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
                <option value="">สาขาทั้งหมด</option>
                <option value="">วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์</option>
                <option value="">วิศวกรรมการออกแบบและผลิต</option>
                <option value="">วิศวกรรมการจัดการอุตสาหกรรม</option>
                <option value="">วิศวกรรมโยธาและบริหารงานก่อสร้าง</option>
                <option value="">อุตสาหกรรมศิลป์</option>
              </select>
            </Form.Item>
          </div>
          <div className='w-1/8 mt-2 '>
            <p>ปีการศึกษา : &nbsp;</p>
          </div>
          <div className='w-full lg:w-1/6 '>
            <Form.Item>
              <select id="YearS" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
                <option value="">2566</option>
                <option value="">2565</option>
              </select>
            </Form.Item>
          </div>
          <div className='w-1/8 mt-2 '>
            <p>ภาคเรียน : &nbsp;</p>
          </div>
          <div className='w-full lg:w-1/6'>
            <Form.Item>
              <select id="Path" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">ทั้งหมด</option>
                <option value="">ภาคเรียนที่ 1</option>
                <option value="">ภาคเรียนที่ 2</option>
              </select>
            </Form.Item>
          </div>
          <div className='w-full text-end lg:items-center my-5 lg:my-0 lg:w-1/12'>
          <Link  href={"/admin"}>
            <button type="button" class="hover:translate-1 hover:scale-110 duration-300 text-rose-600 hover:bg-rose-700 shadow bg-orange-50 hover:text-white font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2">
              &nbsp;&nbsp;Dashboard
            </button>
          </Link>
          </div></Form>
        <Card className='w-full border-gray-100 border-2 mt-0 lg:mt-5'><App /></Card>
      </div>
      
    </div>

  )
}