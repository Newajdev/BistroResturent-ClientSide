import React from 'react';

const sectionHeader = ({subTitle, Title}) => {
    return (
        <div className='text-center my-12'>
            <p className='text-orange-400 text-xl'>---{subTitle}---</p>
            <div className='flex justify-center mt-4'>
                <h3 className='text-4xl py-5 border-y-4 px-16 border-[#E8E8E8] uppercase'>{Title}</h3>
            </div>
        </div>
    );
};

export default sectionHeader;