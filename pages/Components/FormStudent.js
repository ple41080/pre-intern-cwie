import React, { use, useEffect, useState } from 'react'
import getBranch from '../../service/branch'
import { radio } from '@material-tailwind/react';
import { Button, Radio, Card, Space, Input, Table, Tag, Checkbox, Row, Form, Divider, message } from 'antd';
import axiosInstance from '../../service/axios';
import { useRouter } from 'next/router';


export default function FormStudent() {

    const router = useRouter();
    const [studentId, setStudentId] = useState();
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        setStudentId(router?.query?.id)
    }, [router])

    // const messageError = () => {
    //     messageApi.open({
    //         type: 'error',
    //         content: 'มีข้อมูลนี้แล้ว',
    //     });
    // }
    const messageSuccess = () => {
        messageApi.open({
            type: 'success',
            content: 'เพิ่มข้อมูลเรียบร้อย',
        });

        setTimeout(() => {
            router.back();
        }, 1500)

    }

    const dataName = [
        {
            key: 'f_academy',
            columnName: '1.ปัจจัยผลต่อการตัดสินใจเข้าศีกษาต่อ',

        },
        {
            key: 'f_a1',
            columnName: '1.1 ความมีชื่อเสียงของมหาวิทยาลัยและเป็นที่ยอมรับของสังคม',
        },
        {
            key: 'f_a2',
            columnName: '1.2 เป็นมหาวิทยาลัยที่จบออกมาแล้วเป็นที่ยอมรับในตลาดแรงงาน',
        },
        {
            key: 'f_a3',
            columnName: '1.3 เป็นมหาวิทยาลัยที่มีความทันสมัยและมีความพร้อมในทุกด้าน',
        },
        {
            key: 'f_a4',
            columnName: '1.4 สถานที่ตั้งของมหาวิทยาลัยเดินทางมาเล่าเรียนสะดวกสบาย',
        },
        {
            key: 'f_a5',
            columnName: '1.5 นักเรียนมีความปรารถนาที่จะเรียนสาขาที่เลือกในมหาวิทยาลัยนี้',
        },
        {
            key: 'f_finance',
            columnName: '2.ปัจจัยด้านการเงิน',
        },
        {
            key: 'f_f1',
            columnName: '2.1 ค่าธรรมเนียมการศึกษา เช่น ค่าหน่วยกิตและค่าลงทะเบียน มีราคาเหมาะสม',
        },
        {
            key: 'f_f2',
            columnName: '2.2 ทุนการศึกษามีผลต่อการตัดสินใจในการเลือกเรียน',
        },
        {
            key: 'f_f3',
            columnName: '2.3 ค่าครองชีพเพียงพอจากผู้ปกครองหรือแหล่งทุน',
        },
        {
            key: 'f_f4',
            columnName: '2.4 ค่าอาหารจากโรงอาหารหรือร้านค้าอื่นๆในมหาวิทยาลัย',
        },
        {
            key: 'f_course',
            columnName: '3.ปัจจัยด้านหลักสูตร',
        },
        {
            key: 'f_c1',
            columnName: '3.1 หลักสูตรที่เปิดสอนเป็นที่นิยม และเป็นที่ต้องการของตลาดแรงงาน ในปัจจุบัน',
        },
        {
            key: 'f_c2',
            columnName: '3.2 คณาจารย์ประจำหลักสูตรได้รับการยอมรับจากภายนอก',
        },
        {
            key: 'f_c3',
            columnName: '3.3 มีห้องเรียนที่ได้มาตรฐานและบรรยากาศดี',
        },
        {
            key: 'f_c4',
            columnName: '3.4 ทักษะ ความรู้ และความสามารถที่นักศึกษาเป็นที่ยอมรับ',
        }