import React, { useEffect, useState } from 'react'

import { Table, Tag, Space } from 'antd';
import dayjs from 'dayjs';
export default function TableJoin(props) {
    const items = props.data
    console.log(items);
    const columns = [
        {
            title: 'รหัสนักศึกษา',
            dataIndex: 'student',
            key: 'studentID',
            render: (text) => <a>{text?.student_id}</a>,
        },
        {
            title: 'ชื่อ-นามสกุล',
            dataIndex: 'student',
            key: 'Name',
            render: (text) => (`${text?.fname_TH} ${text?.lname_TH}`)
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

    const TableList = () => <Table columns={columns} dataSource={items} scroll={{ y: 300 }} />;
    return (
        <TableList />
    )
}

// export default App;