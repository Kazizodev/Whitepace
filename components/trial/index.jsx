import Image from 'next/image'

const index = () => {
    return (
        <div className='bg-pDark pt-[140px] pb-[30px]'>
            <div className="container mx-auto text-white flex flex-col justify-center gap-[40px]">

                <div className='flex flex-col gap-[24px] max-w-[608px] mx-auto text-center'>
                    <h1 className='font-bold text-[72px] leading-[95px] tracking-[-2%]'>Try Whitepace today</h1>
                    <p className='text-center text-[24px] leading-[32px] tracking-[-2%]'>Get started for free.<br />Add your whole team as your needs grow.</p>
                </div>

                <div className='flex justify-center'>
                    <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                        Try Taskey Free
                        <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                    </button>
                </div>

                <p className='text-center text-[24px] leading-[32px] tracking-[-2%]'>On a big team? Contact sales</p>

                <div className='flex items-center max-w-[608px] mx-auto gap-[40px]'>
                    <Image src={"/assets/apple-white.svg"} width={60} height={60} alt={"Arrow pointing to the right"} />
                    <Image src={"/assets/windows-white.svg"} width={60} height={60} alt={"Arrow pointing to the right"} />
                    <Image src={"/assets/android-white.svg"} width={60} height={60} alt={"Arrow pointing to the right"} />
                </div>
            </div>
        </div>
    )
}

export default index