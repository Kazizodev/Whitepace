import Image from 'next/image'

const index = () => {
    return (
        <div className="bg-white py-[140px]">
            <div className="container mx-auto flex flex-col gap-[60px]">
                <h1 className="font-bold text-[72px] leading-[84px] text-sDark text-center">What Our Clients Says</h1>

                <div className='flex justify-between gap-[32px]'>

                    {/* Card 1 */}
                    <div className='flex flex-col bg-white gap-[60px] py-[60px] px-[40px] shadow-lg max-w-[472px] rounded-[10px]'>
                        <div className='flex flex-col gap-[32px]'>
                            <Image src={"/assets/quotedark.svg"} width={86} height={61.5} alt="Quote image" />
                            <p className='text-[18px] text-sBlack leading-[30px] tracking-[-2%]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className='text-sBlack' />
                        </div>

                        <div className='flex gap-[42px]'>
                            <Image src={"/assets/avatar1.png"} className={"w-[95px] h-[95px]"} width={95} height={95} alt="Quote image" />

                            <div className='flex flex-col justify-between'>
                                <p className='text-[24px] text-sBlack leading-[36px] font-semibold tracking-[0%]'>Oberon Shaw, MCH</p>
                                <p className='text-[16px] text-sBlack leading-[20px] tracking-[-2%]'>Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='flex flex-col bg-pLight gap-[60px] py-[60px] px-[40px] shadow-lg max-w-[472px] rounded-[10px]'>
                        <div className='flex flex-col gap-[32px]'>
                            <Image src={"/assets/quotelight.svg"} width={86} height={61.5} alt="Quote image" />
                            <p className='text-[18px] text-white leading-[30px] tracking-[-2%]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className='text-sBlack' />
                        </div>

                        <div className='flex gap-[42px]'>
                            <Image src={"/assets/avatar2.png"} className={"w-[95px] h-[95px]"} width={95} height={95} alt="Quote image" />

                            <div className='flex flex-col justify-between'>
                                <p className='text-[24px] text-pDark leading-[36px] font-semibold tracking-[0%]'>Oberon Shaw, MCH</p>
                                <p className='text-[16px] text-white leading-[20px] tracking-[-2%]'>Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='flex flex-col bg-pLight gap-[60px] py-[60px] px-[40px] shadow-lg max-w-[472px] rounded-[10px]'>
                        <div className='flex flex-col gap-[32px]'>
                            <Image src={"/assets/quotelight.svg"} width={86} height={61.5} alt="Quote image" />
                            <p className='text-[18px] text-white leading-[30px] tracking-[-2%]'>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>
                            <hr className='text-sBlack' />
                        </div>

                        <div className='flex gap-[42px]'>
                            <Image src={"/assets/avatar3.png"} className={"w-[95px] h-[95px]"} width={95} height={95} alt="Quote image" />

                            <div className='flex flex-col justify-between'>
                                <p className='text-[24px] text-pDark leading-[36px] font-semibold tracking-[0%]'>Oberon Shaw, MCH</p>
                                <p className='text-[16px] text-white leading-[20px] tracking-[-2%]'>Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default index