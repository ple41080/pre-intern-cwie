import { Badge, Calendar, Card, Modal, Row, Col } from 'antd';
import InputEventBranch from './InputEventBranch';
import React, { useEffect, useRef, useState } from 'react';
import { getEventData } from '../../service/event';




const CalendarEvent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvent()
  }, [])

  const fetchEvent = async () => {
    const getEvent = await getEventData();
    setData(getEvent.data)
  }

  const getListData = (value) => {
    let listData = [];
    let textIcon = ["warning", "error", "success"];
    var randomColor = Math.floor(Math.random() * textIcon.length);
    data?.map((item) => {
      if (item?.start_date <= value.format("YYYY-MM-DD") && value.format("YYYY-MM-DD") <= item?.end_date) {
        let dayEvent = {
          type: `${textIcon[randomColor]}`,
          content: `${item?.title}`,
          s_token: `${item?.secret_token}`,
          data: item
        };
        listData.push(dayEvent)
      }
    })
    return listData || [];
  };
  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const DateCellRender = (value) => {
    const listData = getListData(value);
    const [modalDetail, setDetailOpen] = useState(false);
    const [setIsList, setIsListOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState();
    const showDetail = (value) => {
      setDataDetail(value);
      setDetailOpen(true);
    };
    const cancelAdd = () => {
      setDetailOpen(false);
    };
    const showList = () => {
      setIsListOpen(true);
    };
    const cancelList = () => {
      setIsListOpen(false);
    };
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content} onClick={showList}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
        {!!setIsList &&
          <Modal
            title="รายชื่อกิจกรรม"
            open={setIsList}
            onCancel={cancelList}
            key={listData?.id}
            footer={[]}
          >
            {listData.map((item, index) => (
              index++,
              <>
                <Card key={item.key} className='mt-2' onClick={(e) => { showDetail(item) }}>
                  <div>
                    <div className='w-1/2'>
                      <label className=' font-bold'>ชื่อกิจกรรม : </label>
                      <span>{item.content}</span>
                    </div>
                    <div className='w-1/2'>
                      <label className='font-bold'>รหัสกิจกรรม : </label>
                      <span>{item.s_token}</span>
                    </div>
                  </div>
                </Card>
              </>
            ))}
          </Modal>
        }


        {!!modalDetail &&
          <Modal
            width={'50%'}
            title="รายละเอียดกิจกรรม"
            open={modalDetail}
            key={dataDetail?.data?.id}
            onCancel={cancelAdd}
            footer={[]}
          >
            {console.log(dataDetail)}
            <div className='flex-grid'>
              <div className=''>
                <label className=' font-bold'>ชื่อกิจกรรม : </label>
                <span> <span>{dataDetail.content}</span></span>
              </div>
              <div className=''>
                <label className='font-bold'>รหัสกิจกรรม : </label>
                <span>{dataDetail.s_token}</span>
              </div>
              <div className=''>
                <label className='font-bold'>ระดับกิจกรรม : </label>
                <span>{dataDetail.data?.level_event}</span>
              </div>
              {dataDetail?.data?.branchJoinEvent !== null &&
                <div className=''>
                  <label className='font-bold'>สาขาวิชา : </label>
                  <span>{dataDetail?.data?.branchJoinEvent?.branch_name}</span>
                </div>
              }
              <div className=''>
                <label className='font-bold'>วันที่เริ่มกิจกรรม : </label>
                <span>{dataDetail.data?.start_date}</span>
              </div>
              <div className=''>
                <label className='font-bold'>วันที่สิ้นสุดกิจกรรม : </label>
                <span>{dataDetail.data?.end_date}</span>
              </div>

            </div>


          </Modal>}
      </ul>
    );
  };
  return <Calendar dateCellRender={DateCellRender} monthCellRender={monthCellRender} />;
};
export default CalendarEvent;
