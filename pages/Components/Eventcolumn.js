import React from 'react'
import { Button } from 'antd';
import { FormOutlined} from '@ant-design/icons';
import {Table} from "antd";

export default function TableEvent({tokenShow, eventShow}){
  
    const columns = [
        {
            title: 'เข้าร่วม',
            dataIndex: 'join',
            key: 'join',
            responsive: ['xs', 'sm', 'xl'],
            render: (text, record, index) =>
                <div>
                    <Button onClick={tokenShow(index)} >
                        <FormOutlined /> {record.join}
                    </Button>
                </div>
        },
        {
            title: "รหัสกิจกรรม",
            dataIndex: "EventKey",
            key: "EventKey",
            responsive: ['xl'],
        },
        {
            title: "ชื่อกิจกรรม",
            dataIndex: "EventName",
            key: "EventName",
            responsive: ['xs', 'sm', 'xl'],
            render: (text,record,index) =>
                <a onClick={eventShow(index)} className="underline">{record.EventName}</a>

            ,
        },
        {
            title: "ปีการศึกษา",
            dataIndex: "Eduterm",
            key: "Eduterm",
            responsive: ['xl'],
        },
        {
            title: "ภาคเรียนที่",
            key: "TermNum",
            dataIndex: "TermNum",
            responsive: ['xl'],
        },
        {
            title: "ระดับกิจกรรม",
            key: "EventRank",
            dataIndex: "EventRank",
            responsive: ['xl'],
        },
        {
            title: "จำนวนที่รับ",
            key: "Summarycount",
            dataIndex: "Summarycount",
            responsive: ['xl'],
        },
        {
            title: "จำนวนชั่วโมง",
            key: "HourCount",
            dataIndex: "HourCount",
            responsive: ['xs', 'sm', 'xl'],
        },
    ];
    return(
        <Table columns={columns} dataSource={Data} style={{ overflow: "auto" }} />
    )
}
