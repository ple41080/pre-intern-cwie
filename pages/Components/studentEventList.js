import React, { useState } from 'react'

import { Table } from 'antd';
import dayjs from 'dayjs';

export default function ListOfStudent(params) {
    const columns = [
        {
            title: 'รหัสกิจกรรม',
            dataIndex: 'EventToken',
            key: 'EventToken',
            render: (record) => <div>{record?.Event?.secret_token}</div>,
        },
        {
            title: 'ชื่อกิจกรรม',
            dataIndex: 'EventToken',
            key: 'NameEvent',
            render: (record) => <div>{record?.Event?.title}</div>,
        },
        {
            title: 'จำนวนชั่วโมง',
            dataIndex: 'EventToken',
            key: 'Houre',
            render: (record) => <div>{record?.Event?.hour_event}</div>,
        },
        {
            title: 'วัน/เวลาที่ใช้ Token',
            key: 'Time',
            render: (record) => {
                const date = dayjs(record?.createdAt).format('DD/MM/YYYY HH:mm');
                return date
            },
        },
    ];


    return (
        <Table columns={columns} dataSource={params.eventList} scroll={{ y: 300 }} />
    )


}
