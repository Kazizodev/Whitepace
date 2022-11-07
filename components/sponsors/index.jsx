import Image from 'next/image'

const index = () => {
    return (
        <div className='bg-white py-[140px]'>
            <div className="container mx-auto flex flex-col gap-[100px]">
                <h1 className='font-bold text-[72px] tracking-[-2%] text-center'>Our sponsors</h1>
                <div className='flex items-center justify-between'>
                    <Image src={"/assets/apple.svg"} className="cursor-pointer" width={55} height={68} alt={"Apple Logo"} />
                    <Image src={"/assets/microsoft.svg"} className="cursor-pointer" width={287} height={62} alt={"Microsoft Logo"} />
                    <Image src={"/assets/slack.svg"} className="cursor-pointer" width={280} height={71} alt={"Microsoft Logo"} />
                    <Image src={"/assets/google.svg"} className="cursor-pointer" width={211} height={70} alt={"Microsoft Logo"} />
                </div>
            </div>
        </div>
    )
}

export default index