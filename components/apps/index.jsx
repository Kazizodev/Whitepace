import Image from 'next/image'

const index = () => {
    return (
        <div className='bg-pDark py-[140px] apps'>
            <div className="container mx-auto flex items-center gap-[100px]">

                <div className="h-full w-[45%] flex items-center">
                    <Image src={"/assets/apps.svg"} draggable={false} width={710} height={0} alt={"Work together"} />
                </div>

                <div className='flex flex-col gap-[60px] w-[55%]'>
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-white">Work with Your Favorite Apps Using whitepace</h1>
                        <p className="text-[18px] leading-[30px] track-[-2%] text-white">Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                            Read More
                            <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index