import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section id='notfound' className='grid-content h-[80vh] flex gap-y-[12px] flex-col justify-center items-center bg-[#ebebeb]'>
            <h2 className='text-[4rem] text-[#2b2b2b] uppercase'>Không tìm thấy trang</h2>
            <p className='text-[1.8rem] text-[#646464]'>Click để quay lại trang chủ</p>
            <a href='/Sweetsoft-test-NhaTrangXanh/' className='text-white text-[1.6rem] rounded-[8px] bg--primary py-[8px] px-[16px] hover:scale-[1.1] hover:opacity-[0.8] transition-all'>Quay lại trang chủ</a>
        </section>
    );
};

export default NotFound;