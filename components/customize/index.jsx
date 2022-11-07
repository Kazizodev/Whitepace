import Image from 'next/image'

const index = () => {
    return (
        <div className="bg-white py-[140px]">
            <div className="container mx-auto flex items-center gap-[100px]">

                <div className="h-[533px] w-[52%]">
                    <Image src={"/assets/customize-illustration.svg"} draggable={false} className={'h-full w-full'} width={720} height={620} alt={"Arrow pointing to the right"} />
                </div>

                <div className="flex flex-col gap-[60px] w-[48%]">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-sBlack">Customise it to your needs</h1>
                        <p className="text-[18px] leading-[30px] track-[-2%] text-sBlack">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                            Let's Go
                            <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index