import Image from 'next/image'

const index = () => {
    return (
        <div className="bg-pDark flex items-center py-[140px] h-[91.4vh] hero">

            <div className="container mx-auto flex items-center">
                <div className="flex flex-col gap-[60px] w-[45%]">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="font-bold text-[64px] text-white leading-[70px] tracking-[-2%]">Get More Done with whitepace</h1>
                        <p className="text-[18px] leading-[30px] text-white tracking-[-2%]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[20px] py-[20px] rounded-[8px]">
                            Try Whitepace Free
                            <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                        </button>
                    </div>
                </div>

                <div className="h-[560px] w-[55%]">
                    <Image src={"/assets/hero-illustration.svg"} draggable={false} className={'h-full w-full'} width={720} height={620} alt={"Arrow pointing to the right"} />
                </div>
            </div>

        </div>
    )
}

export default index