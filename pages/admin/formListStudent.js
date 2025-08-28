import React, { useEffect, useRef, useState } from 'react';
import { Form, Col, Row, Space, Table, Tag, Button, Modal, StyleSheet, Card, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import ComplexNavbar from '../Components/newNav'
import Link from 'next/link';
import { getStudentList } from '../../service/student'
import { useRouter } from 'next/router';
import ListOfStudent from '../Components/studentEventList';
import { getEventsJoin } from '../../service/event';
import { getBranchData } from '../../service/branch'

export default function FormListStudent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stuData, setStuData] = useState([null]);
  const [stuEventData, setStuEventData] = useState()
  const [eventList, setEventList] = useState([null])
  const [eventTracking, setEventTracking] = useState(0)
  const [hourEvent, setHourEvent] = useState(null);
  const [searchTextBranch, setSearchTextBranch] = useState('')
  const [branchData, setBranchData] = useState([]);
  useEffect(() => {
    fetchStudent();
  }, [])
  const fetchStudent = async () => {
    const stuList = await getStudentList();
    setStuData(stuList.data);
    const getBranch = await getBranchData()
    setBranchData(getBranch?.data)
  }
  const fetchEventJoin = async (id) => {
    const EventList = await getEventsJoin(id);
    setEventList(EventList.data);
    setEventTracking(EventList.data.length)
  }
  useEffect(() => {
    if (eventList === undefined) return;
    let totalEventsH = 0;
    for (let eventItem of eventList) {
      totalEventsH += parseInt(eventItem?.EventToken?.Event.hour_event)
    }
    setHourEvent(totalEventsH)
  }, [eventList])


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
        title: 'ลำดับ',
        dataIndex: 'id',
        key: 'id',
        responsive: ['xs', 'sm', 'xl']
      },
      {
        title: 'รหัสนักศึกษา',
        dataIndex: 'student_id',
        key: 'student_id',
        ...getColumnSearchProps('student_id'),
        responsive: ['xs', 'sm', 'xl', 'md'],

      },
      {
        title: 'ชื่อ-นามสกุล',
        key: 'name',
        ...getColumnSearchProps('fname_TH'),
        responsive: ['xs', 'sm', 'xl', 'md'],
        render: (text) => <p>{text?.fname_TH} {text?.lname_TH}</p>
      },
      {
        title: 'สาขาวิชา',
        dataIndex: 'branchJoin',
        key: 'branchJoin',
        responsive: ['xs', 'sm', 'xl', 'md'],
        render: (text) => (<p>{text?.branch_name}</p>),
        filteredValue: [searchTextBranch],
        onFilter: (value, record) => {
          return (
            String(record?.branchJoin?.branch_name).includes(value)
          );
        }
      },

      {
        title: 'ตรวจสอบ',
        key: 'action',
        width: '10%',
        render: (_, record) => (
          <Space size="middle">
            <Button className={'hover:translate-1 hover:scale-110 duration-300 border-amber-300 text-amber-400 hover:bg-amber-300 hover:text-white'} onClick={(e) => showModal(record)} type='button'>
              ตรวจสอบ
            </Button>
          </Space>
        ),
        responsive: ['xs', 'sm', 'xl']
      },

    ];

    return <Table
      columns={columns}
      dataSource={stuData}

    />
  };


  const showModal = (value) => {
    setIsModalOpen(true);
    setStuEventData(value)
    fetchEventJoin(value.id)
  };
  const onCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="relative isolate overflow-hidden py-3 sm:py-5 lg:py-5 tracking-wider bg-slate-50 ">
      <ComplexNavbar />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-full py-2 mb-5 px-4 align-item-center flex justify-center">
          <dl className="grid grid-cols-1 lg:gap-x-40 lg:ml-14 gap-y-2 lg:grid-cols-3 lg:pt-2">

            <div>
              <p className="lg:text-4xl text-xl tracking-widest sm:text-left lg:mt-12 my-5 sm:my-auto text-center lg:text-start text-green-700 sm:text-4xl"><span className='text-red-500'>Faculty</span>&nbsp;of&nbsp;Industrial&nbsp;Technology</p>
            </div>
          </dl>
        </div>

        <div className='w-full ' >
          <Form
            layout="inline" className='gap-x-1 text-center align-middle '
          >
            <div className='w-1/8 mt-2'>
              <p>สาขาวิชา : &nbsp;</p>
            </div>
            <div className=' lg:w-1/3 w-full '>
              <Form.Item name={"branch"} initialValue={""}>
                <select id="subject" onChange={(e) => setSearchTextBranch(e.target.value)} className="bg-white border tracking-wider border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-slate-400 focus:border-blue-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={""}>ทั้งหมด</option>
                  {branchData.map((text) => (
                    <option key={text?.id} value={text?.branch_name}>{text?.branch_name}</option>
                  ))}
                </select>
              </Form.Item>
            </div>
            <div className='w-full text-end lg:items-center my-5 lg:my-0 lg:w-1/12'>
              <Link href={"/admin/Summary"}>
                <button type="button" className="hover:translate-1 hover:scale-110 duration-300 text-rose-600 hover:bg-rose-700 shadow bg-orange-50 hover:text-white font-medium rounded-lg text-sm px-9 py-2.5 text-center inline-flex items-center mr-2">
                  &nbsp;&nbsp;Dashboard
                </button>
              </Link>
            </div>
          </Form>
        </div>
        <Card className='w-full border-gray-100 border-2 mt-0 lg:mt-5'><App /></Card>
      </div>

      <Modal
        width={'80%'}
        title="ตรวจสอบกิจกรรม"
        open={isModalOpen}
        key={stuEventData?.student_id}
        onCancel={onCancel}
        footer={[
          <div className="grid grid-cols-6 gap-4 text-base" key={stuEventData?.student_id} >
            <p >{stuEventData?.student_id} : </p>
            <p className=' text-start'>{stuEventData?.fname_TH} {stuEventData?.lname_TH}</p>
            <p>จำนวนกิจกรรมที่เข้าร่วม :</p>
            <p className=' text-start'>{eventTracking}</p>
            <p >รวมทั้งหมด :</p>
            <p className=' text-start'>{hourEvent} ชั่วโมง</p>
          </div>
        ]}
      >
        <ListOfStudent eventList={eventList} />
      </Modal>

    </div>


  )
}