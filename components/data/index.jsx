import Image from 'next/image'

const index = () => {
    return (
        <div className='py-[140px] bg-white'>
            <div className='container mx-auto flex items-center'>

                <div className="flex flex-col gap-[60px] w-[54%]">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-sBlack">100% your data</h1>
                        <p className="text-[18px] leading-[30px] track-[-2%] text-sBlack">The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                    </div>
                    <div>
                        <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                            Read More
                            <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                        </button>
                    </div>
                </div>

                <div className="h-full w-[46%] flex items-center">
                    <Image src={"/assets/data.png"} width={710} height={660} alt={"Work together"} />
                </div>

            </div>
        </div>
    )
}

export default index