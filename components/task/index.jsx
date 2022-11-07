import Image from 'next/image'

const index = () => {
    return (
        <div className="bg-pDark py-[140px]">
            <div className="container mx-auto flex flex-col items-center text-center gap-[60px]">
                <div className="flex flex-col gap-[24px]">
                    <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-white">Your work, everywhere you are</h1>
                    <p className="text-[18px] leading-[30px] track-[-2%] text-white px-[208px]">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                </div>
                <div>
                    <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
                        Try Taskey
                        <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index