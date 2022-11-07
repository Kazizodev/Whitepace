import Image from 'next/image'

const index = () => {
    return (
        <div className='bg-pDark py-[140px]'>
            <div className='container mx-auto flex items-center gap-[100px]'>

                <div className="flex flex-col gap-[60px] w-[47%]">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-white">Use as Extension</h1>
                        <p className="text-[18px] leading-[30px] track-[-2%] text-white">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                            Let's Go
                            <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                        </button>
                    </div>
                </div>

                <div className="h-[480px] w-[53%]">
                    <Image src={"/assets/extension-illustration.svg"} draggable={false} className={'h-full w-full'} width={720} height={620} alt={"Arrow pointing to the right"} />
                </div>
            </div>
        </div>
    )
}

export default index