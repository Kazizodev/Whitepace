import Image from 'next/image'

const index = () => {
    return (
        <div className='flex justify-between items-center'>

            <div className='flex items-center gap-[60px] text-white'>
                <div className='flex gap-[6px] items-center cursor-pointer'>
                    <Image src={"/assets/globe.svg"} width={19} height={19} alt={"Facebook Logo"} />
                    <p className='text-[16px] leading-[20px] tracking-[-2%]'>English</p>
                    <Image src={"/assets/arrow-down.svg"} width={29} height={24} alt={"Facebook Logo"} />
                </div>

                <p className='text-[16px] leading-[20px] tracking-[-2%] cursor-pointer hover:text-sYellow'>Terms & privacy</p>

                <p className='text-[16px] leading-[20px] tracking-[-2%] cursor-pointer hover:text-sYellow'>Security</p>

                <p className='text-[16px] leading-[20px] tracking-[-2%] cursor-pointer hover:text-sYellow'>Status</p>

                <p className='text-[16px] leading-[20px] tracking-[-2%]'>©2021 Whitepace LLC.</p>
            </div>

            <div className='flex gap-[32px] items-center'>
                <Image src={"/assets/facebook.svg"} width={9} height={16.6} alt={"Facebook Logo"} />
                <Image src={"/assets/twitter.svg"} width={17} height={13.8} alt={"Twitter Logo"} />
                <Image src={"/assets/linkedin.svg"} width={15} height={15} alt={"LinkedIn Logo"} />
            </div>

        </div>
    )
}

export default index