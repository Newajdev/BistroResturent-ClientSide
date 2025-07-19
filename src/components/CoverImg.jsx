

const CoverImg = ({ img, title, subTitle }) => {
    return (
        <div style={{ backgroundImage: `url("${img}")` }} className="p-32 flex bg-fixed justify-center items-center ">
            <div className="bg-[#00000080] text-center text-white px-[400px] py-36 ">
                    <h3 className="text-8xl mb-10 font-semibold uppercase">{title}</h3>
                    <p className="text-2xl">{subTitle}</p>
                </div>
        </div>
    );
};

export default CoverImg;