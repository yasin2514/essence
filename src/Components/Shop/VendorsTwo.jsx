import data from "../../../public/data/vendorsTwo.json";

const VendorsTwo = () => {
    return (
        <div className='grid grid-cols-3 gap-5 mt-16'>
            {
                data?.map((item,index)=>(
                    <div key={index} title={item?.name} className='shadow-md'>
                        <img src={item?.img} alt="image" />
                    </div>
                ))
            }

            
        </div>
    );
};

export default VendorsTwo;