
const PriButton = ({ title, brdrColor, txtColor, hoverbg }) => {
    
    return (

        <button className={`text-xl font-medium text-center uppercase btn border-0  border-b-5 bg-transparent ${ txtColor ? `${txtColor}` : 'text-black' } ${ brdrColor ? `${brdrColor}` : 'border-b-black' }    rounded-2xl ${ hoverbg ? `hover:${hoverbg}` : 'hover:bg-amber-500' }  hover:border-transparent`}>{title}</button>

    );
};

export default PriButton;




// ${borderColoer ? `$border-b-[${borderColoer}]` : ""}