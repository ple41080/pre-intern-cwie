import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Radio, Card, Select, } from 'antd';


const levelData = ['คณะ', 'สาขา'];
const areaData = {
    คณะ: [''],
    สาขา: [
        'วิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์',
        'วิศวกรรมการออกแบบและผลิต',
        'วิศวกรรมการจัดการอุตสาหกรรม',
        'วิศวกรรมโยธาและบริหารงานก่อสร้าง',
        'อุตสาหกรรมศิลป์']
};
export default function SEcalendar() {
    const [areas, setAreas] = useState(areaData[levelData[0]]);
    const [secondAreas, setSecondAreas] = useState(areaData[levelData[0]][0]);
    const handleLevelChange = (value) => {
        setAreas(areaData[value]);
        setSecondAreas(areaData[value]);

    };
    const onSecondAreasChange = (value) => {
        setSecondAreas(value);
    };
    return (
        <div className="flex min-h-full items-center justify-center mt-6 sm:px-6 lg:px-8">
            <Card style={{ width: "90%" }}>
                <Form
                    layout="inline"
                    name='registerForm'
                    action='#'
                >
                    <div className='w-full sm:w-2/4 mt-2'>
                        <label htmlFor="nameEvent">ชื่อกิจกรรม</label>
                        <Form.Item
                            name="nameEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อกิจกรรม'
                                },
                            ]}
                        >
                            <Input disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="peopleEvent">จำนวนคนที่รับ</label>
                        <Form.Item
                            name="poepleEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนผู้เข้าร่วม'
                                },
                            ]}
                        >
                            <Input disabled type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label htmlFor="houreEvent">จำนวนชั่วโมง</label>
                        <Form.Item
                            name="houreEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่จำนวนชั่วโมง'
                                },
                            ]}
                        >
                            <Input disabled type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className=' mt-2 w-full sm:w-1/4'>
                        <label>ระดับกิจกรรม</label>
                        <Form.Item
                            name="levelEvent"
                            rules={[{ required: true, message: 'กรุณาเลือกระดับกิจกรรม' }]}
                        >
                            <Select disabled id="levelEvent" defaultValue={levelData[0]}
                                placeholder='กรุณาเลือกระดับกิจกรรม'
                                onChange={handleLevelChange}
                                options={levelData.map((level) => ({
                                    label: level,
                                    value: level,
                                }))} className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-2/4'>
                        <label>สาขา <span className=' text-red-700'>*หากเลือกระดับกิจกรรมเป็นคณะจะไม่ทำการเลือกสาขาได้</span></label>
                        <Form.Item
                            name="courseEvent"
                        // rules={[{ required: true, message: 'กรุณาเลือกสาขา' }]}
                        >
                            <Select disabled
                                placeholder="กรุณาเลือกสาขา"
                                value={secondAreas}
                                onChange={onSecondAreasChange}
                                options={areas.map((area) => ({
                                    label: area,
                                    value: area,
                                }))}
                                id="courseEvent" className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </Select>
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/4'>
                        <label>ปีการศึกษา</label>
                        <Form.Item
                            name="yearEvent"
                            rules={[{ required: true, message: 'กรุณากรอกปีการศึกษา' }]}
                        >
                            <Input disabled type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-3/4 mt-2'>
                        <label htmlFor="placeEvent">สถานที่จัดกิจกรรม</label>
                        <Form.Item
                            name="placeEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่ชื่อสถานที่',
                                },
                            ]}
                        >
                            <Input disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full sm:w-1/4 mt-2'>
                        <label htmlFor="seasonEvent">ภาคเรียนที่</label>
                        <Form.Item
                            name="seasonEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณากรอกภาคเรียน',
                                },
                            ]}
                        >
                            <Input disabled type='number' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="startDEvent">วันที่เริ่มกิจกรรม</label>
                        <Form.Item
                            name="startDEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่เริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input disabled type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endDEvent">วันที่สิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="endDEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่สิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input disabled type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="startTEvent">เวลาเริ่มกิจกรรม</label>
                        <Form.Item
                            name="startTEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาเริ่มกิจกรรม'
                                },
                            ]}
                        >
                            <Input disabled type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endTEvent">เวลาสิ้นสุดกิจกรรม</label>
                        <Form.Item
                            name="endTEvent"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาสิ้นสุดกิจกรรม'
                                },
                            ]}
                        >
                            <Input disabled type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endDToken">วันที่ปิดรับ token </label>
                        <Form.Item
                            name="endDToken"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่วันที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input disabled type='date' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='mt-2 w-full sm:w-1/2'>
                        <label htmlFor="endTToken">เวลาปิดรับ token </label>
                        <Form.Item
                            name="endTToken"
                            rules={[
                                {
                                    required: true,
                                    message: 'กรุณาใส่เวลาที่ปิดรับ Token'
                                },
                            ]}
                        >
                            <Input disabled type='time' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </Form.Item>
                    </div>
                    <div className='w-full mt-4 text-center'>
                        <Card>
                            <label>จำนวน Token</label>
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message: 'กรุณาเลือกจำนวน Token'
                                    },
                                ]}>
                                <Radio.Group>
                                    <Radio disabled value="1"> 1 Token </Radio>
                                    <Radio disabled value="2"> 2 Token</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Card>
                    </div>
                </Form>
            </Card></div>
    )
}