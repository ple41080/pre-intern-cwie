import { useState, useRef, useEffect } from 'react';
import { Space, Table, Tag, Button, Modal, Input } from 'antd';
import { UsergroupAddOutlined, EyeOutlined, AudioOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import NavS from '../Components/navStudent';
import { getEventsJoin } from '../../service/event';

export default function Event() {
  const iconSize = "large"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [data, setData] = useState();
  const [storeData, setStoreData] = useState();
  const [value, setValue] = useState();
  useEffect(() => {
    const stored = localStorage.getItem("user");
    setValue(stored ? JSON.parse(stored) : undefined);
  }, []);
  useEffect(() => {
    if (value === undefined) return
    setStoreData(value.data)
  }, [value])

  useEffect(() => {
    if (storeData === undefined) return
    syncData(storeData?.id)
  }, [storeData])

  const syncData = async (id) => {
    const getEvent = await getEventsJoin(id)
    setData(getEvent.data)
  }
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
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
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
        render: (text, record, index) => {
          index++;
          return <p>{index}</p>
        },
        responsive: ['xs', 'sm', 'xl']
      },

      {
        title: 'รหัสกิจกรรม',
        key: 'secret_token',
        responsive: ['xs', 'sm', 'xl'],
        render: (text) => <p>{text.EventToken?.Event?.secret_token}</p>,
      },
      {
        title: 'ชื่อกิจกรรม',
        key: 'title',
        render: (text) => <p>{text.EventToken?.Event?.title}</p>,
        responsive: ['xs', 'sm', 'xl']
      },
      {
        title: 'ระดับกิจกรรม',
        key: 'level',
        render: (text) => <p>{text.EventToken?.Event?.level_event}</p>,
        responsive: ['md']
      },
      {
        title: 'ปีการศึกษา',
        key: 'EventToken.Event.year',
        responsive: ['md'],
        render: (text) => <p>{text.EventToken?.Event?.term}/{text.EventToken?.Event?.year}</p>,
      },
      {
        title: 'จำนวนชั่วโมง',
        key: 'hour_event',
        render: (text) => <p>{text.EventToken?.Event?.hour_event}</p>,
        responsive: ['md']
      },
      {
        title: 'วันที่เข้าร่วม',
        key: 'date',
        render: (text) => <p>{text.EventToken?.Event?.start_date}</p>,
        responsive: ['md']

      },

    ];
    return <Table columns={columns} dataSource={data} style={{ overflow:"auto" }}/>;
  }



  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setLoading(true);
    // setTimeout(() => {
    //     setLoading(false);
    //     setOpen(false);
    // }, 3000);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };


  const showModal2 = () => {
    setOpenAdd(true);
  };
  const handleOkAdd = () => {
    // setLoading(true);
    // setTimeout(() => {
    //     setLoading(false);
    //     setOpen(false);
    // }, 3000);
    setOpenAdd(false);
  };
  const handleCancelAdd = () => {
    setOpenAdd(false);
  };



  return (
    <>
      <header className="bg-white shadow mt-5">
        <NavS className='my-10' />
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">กิจกรรมที่เข้าร่วม</h1>

        </div>

      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mt-5">
          <App />
        </div>
      </main>

    </>

  )
}