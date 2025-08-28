import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Form, Input, Radio, Card, Select, message, } from 'antd';

import axiosInstance from '../../service/axios'
const levelData = ['คณะ', 'สาขา'];

export default function InputEventLeader() {
    const [selectLevel, setSelectLevel] = useState(false);
    const [departData, setAepartData] = useState([null]);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        axiosInstance.get(`branch/allBranch`)
            .then(response => {
                const data = response.data;
                setAepartData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleLevelChange = (value) => {
        if (value === "คณะ") {
            setSelectLevel(false)
        } else {
            setSelectLevel(true)
        }
    };

    const sendData = async (value) => {
        const data = {

            "branch_id": value.branch_id,
            "end_date": value.end_date,
            "end_time": value.end_time,
            "exdTime_token": value.exdTime_token,
            "hour_event": value.hour_event,
            "level_event": value.level_event,
            "exdDate_token": value.exdDate_token,
            "quota": value.quota,
            "start_date": value.start_date,
            "start_time": value.start_time,
            "term": value.term,
            "title": value.title,
            "venue": value.venue,
            "year": value.year


        }
        const sendForm = await axiosInstance.post(`/events/createEvent`, data)

        if (sendForm.data.status === 200) {
            messageApi.open({
                type: 'success',
                content: 'เพิ่มข้อมูลเรียบร้อย',
            });
        }
        else if (sendForm.data.status === 201) {
            messageApi.open({
                type: 'error',
                content: 'กิจกรรมนี้มีในระบบแล้ว',
            });
        }
    }
    return (
        <>
            {contextHolder}
            <div className="flex min-h-full items-center justify-center mt-6 sm:px-6 lg:px-8">

                <Form
                    layout="inline"
                    name='registerForm'
                    onFinish={sendData}
                >
                    <div className='w-full sm:w-2/4 mt-2'>
                        <label htmlFor="title">ชื่อกิจกรรม</label>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อกิจกรรม'
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="quota">จำนวนคนที่รับ</label>
                        <Form.Item
                            name="quota"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนผู้เข้าร่วม'
                                },
                            ]}
                        >
                            <Input type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="hour_event">จำนวนชั่วโมง</label>
                        <Form.Item
                            name="hour_event"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนชั่วโมง'
                                },
                            ]}
                        >
                            <Input type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className=' mt-2 w-full sm:w-1/4'>
                        <label>ระดับกิจกรรม</label>
                        <Form.Item
                            name="level_event"
                            rules={[{ required: true, message: 'กรุณาเลือกระดับกิจกรรม' }]}
                            initialValue={"คณะ"}
                        >
                            <Select size='large' id="levelEvent"
                                placeholder='กรุณาเลือกระดับกิจกรรม'
                                onChange={handleLevelChange}
                                options={levelData.map((level) => ({
                                    label: level,
                                    value: level,
                                }))} className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </Select>
                        </Form.Item>
                    </div>
                    {selectLevel === true &&
                        <div className='mt-2 w-full sm:w-2/4'>
                            <label>สาขา <span className=' text-red-700'>*หากเลือกระดับกิจกรรมเป็นคณะจะไม่ทำการเลือกสาขาได้</span></label>
                            <Form.Item
                                name="branch_id"
                                rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                            >
                                <Select
                                    placeholder="กรุณาเลือกสาขา"
                                    size='large'
                                    options={departData?.map((depart) => ({
                                        label: depart?.branch_name,
                                        value: depart?.id,
                                    }))}
                                    id="courseEvent" className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                </Select  >
                            </Form.Item>
                        </div>
                    }

                    <div className='mt-2 w-full sm:w-1/4'>
                        <label>ปีการศึกษา</label>
                        <Form.Item
                            name="year"
                            rules={[{ required: true, message: 'กรุณากรอกปีการศึกษา' }]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-3/4 mt-2'>
                        <label htmlFor="venue">สถานที่จัดกิจกรรม</label>
                        <Form.Item
                            name="venue"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อสถานที่',
                                },
                            ]}
                        >
                            <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-1/4 mt-2'>
                        <label htmlFor="seasonEvent">ภาคเรียนที่</label>
                        <Form.Item
                            name="term"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกภาคเรียน',
                                },
                            ]}
                        >
                            <Select
                                size='large'
                            >
                                <Select.Option value="1">ภาคเรียนที่ 1</Select.Option>
                                <Select.Option value="2">ภาคเรียนที่ 2</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="start_date">วันที่เริ่มกิจกรรม</label>
                        <Form.Item
                            name="start_date"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่เริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="end_date">วันที่สิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="end_date"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่สิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="start_time">เวลาเริ่มกิจกรรม</label>
                        <Form.Item
                            name="start_time"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาเริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="end_time">เวลาสิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="end_time"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาสิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="exdDate_token">วันที่ปิดรับ token </label>
                        <Form.Item
                            name="exdDate_token"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="exdTime_token">เวลาปิดรับ token </label>
                        <Form.Item
                            name="exdTime_token"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>

                    <div className='mt-2 w-full'>
                        <button
                            type="submit"
                            className="text-white bg-green-600 hover:bg-green-800 float-right focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                            เพิ่มกิจกรรม
                        </button>
                    </div>

                </Form>


            </div>
        </>

    )
}