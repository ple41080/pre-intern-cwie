import React, { useEffect } from "react";
import { Button, Form, Table } from "antd";
import { BulbOutlined, FormOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useState } from 'react';
import { getAllEventStudentData } from "../../service/event";
import SimpleForm from "./Form";

export default function EventTable() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEventOpen, setIsEventOpen] = useState(false);
    const [selectedTokenIndex, setSelectedTokenIndex] = useState();
    const [selecteddetailIndex, setSelectedDetailIndex] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        syncData()
    }, [])

    const syncData = async () => {
        const getEventStudent = await getAllEventStudentData();
        setData(getEventStudent?.data)
    }

    const columns = [
        {
            title: 'เข้าร่วม',
            dataIndex: 'join',
            key: 'join',
            responsive: ['xs', 'sm', 'xl'],
            render: (text, record, index) =>
                <div>
                    <Button onClick={tokenShow(record)} >
                        <FormOutlined /> เข้าร่วมกิจกรรม
                    </Button>
                </div>
        },
        {
            title: "รหัสกิจกรรม",
            dataIndex: "secret_token",
            key: "secret_token",
            responsive: ['xl'],
        },
        {
            title: "ชื่อกิจกรรม",
            dataIndex: "title",
            key: "title",
            responsive: ['xs', 'sm', 'xl'],
            render: (text, record, index) =>
                <a onClick={eventShow(index)} className="underline">{record.title}</a>

            ,
        },
        {
            title: 'ปีการศึกษา',
            key: 'year',
            responsive: ['xl'],
            render: (text) => <p>{text.term}/{text.year}</p>,
        },

        {
            title: "ระดับกิจกรรม",
            key: "level_event",
            dataIndex: "level_event",
            responsive: ['xl'],

        },
        {
            title: "จำนวนที่รับ",
            key: "quota",
            responsive: ['xl'],
            render: (_, record) => {
                let list = 0;
                for (let i of record.Token) {
                    if (i.EventStudentList !== null) {
                        list += 1
                    }
                }
                return <p>{list}/{_.quota}</p>
            }
        },
        {
            title: "จำนวนชั่วโมง",
            key: "hour_event",
            dataIndex: "hour_event",
            responsive: ['xs', 'sm', 'xl'],
        },
    ];
    const DetailColumn = [
        // {
        //     title: "_",
        //     dataIndex: "title",
        //     key: "title",
        //     responsive: ['xs', 'sm', 'xl'],
        //     render: (text) =>
        //         <th>{text}</th>

        //     ,
        // },
        // {
        //     title: "_",
        //     dataIndex: "detail",
        //     key: "detail",
        //     responsive: ['xs', 'sm', 'xl'],
        // }
    ];
    //Info modal
    const tokenShow = (index) => () => {
        setSelectedTokenIndex(index);
        setIsModalOpen(true);
    };

    const tokenOk = () => {
        setIsModalOpen(false);
    };

    const tokenCancel = () => {
        setIsModalOpen(false);
    };
    // Event modal
    const eventShow = (index) => () => {
        setSelectedDetailIndex(index)
        setIsEventOpen(true);
    };

    const eventOk = () => {
        setIsEventOpen(false);
    };

    const eventCancel = () => {
        setIsEventOpen(false);
    };

    return (
        <div>

            <Table columns={columns} dataSource={data} style={{ overflow: "auto" }} />

            <Modal
                title={[<BulbOutlined key={Form} />, ' กรอกโทเคนคีย์ให้ถูกต้อง']}
                open={isModalOpen}
                onCancel={tokenCancel}
                footer={[

                ]}>
                <SimpleForm data={selectedTokenIndex} />
            </Modal>
            <Modal
                title={[<BulbOutlined key={data?.id} />, 'ข้อมูลกิจกรรม']}
                open={isEventOpen} onCancel={eventCancel}
                footer={[
                    <button key={data?.id} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={eventCancel}>
                        Cancel
                    </button>,
                ]}>
                <Table columns={DetailColumn} dataSource={selecteddetailIndex} />
            </Modal>
        </div>
    );
}
