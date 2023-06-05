import React from 'react'
import { Card, Col, Row } from 'antd'
import { UsergroupAddOutlined } from '@ant-design/icons';
import EventTable from '../Components/EventTable';
import { Button, Modal, } from 'antd';
import { useState } from 'react';
import NavS from '../Components/navStudent';

export default function Event() {
    const iconSize = "large"
    return (
        <>
            <header className="bg-white shadow mt-5">
                <NavS className='my-10' />
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">กิจกรรมที่เปิดรับ</h1>
                </div>
            </header>

            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className=' justify-center mt-5'>
                    <EventTable />
                </div>
            </div>
        </>
    )
}
