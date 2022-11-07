import Image from 'next/image'

const index = () => {
    return (
        <div className="bg-white py-[140px] flex flex-col gap-[60px]">

            <div className="container mx-auto text-center flex flex-col gap-[24px]">
                <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-sBlack">Choose Your Plan</h1>
                <p className="text-[18px] leading-[30px] track-[-2%] text-sBlack w-[1100px] mx-auto">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
            </div>

            <div className="container mx-auto flex items-center justify-between gap-[32px]">

                {/* Card 1 */}
                <div className="rounded-[10px] border-sYellow border-[1px] max-w-[472px] flex flex-col py-[40px] px-[44px] gap-[25px]">
                    <div className="flex flex-col gap-[25px]">
                        <p className="font-semibold text-[24px] leading-[36px] tracking-[0%]">Free</p>
                        <h4 className="font-bold text-[36px] tracking-[-2%]">$0</h4>
                        <p className="font-medium text-[18px] leading-[23px] tracking-[-2%]">Capture ideas and find them quickly</p>
                    </div>

                    <div className='flex flex-col gap-[28px]'>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Sync unlimited devices</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>10 GB monthly uploads</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>200 MB max. note size</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Customize Home dashboard and access extra widgets</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Connect primary Google Calendar account</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </div>

                    <div>
                        <button className='rounded-[8px] px-[40px] py-[16px] border-sYellow hover:bg-sYellow transition-[background-color] border-[1px]'>Get Started</button>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className='rounded-[10px] min-w-[472px] flex flex-col py-[80px] px-[44px] bg-pDark gap-[25px]'>
                    <div className="flex flex-col gap-[25px] text-white">
                        <p className="font-semibold text-[24px] leading-[36px] tracking-[0%]">Personal</p>
                        <h4 className="font-bold text-sYellow text-[36px] tracking-[-2%]">$11.99</h4>
                        <p className="font-medium text-[18px] leading-[23px] tracking-[-2%]">Keep home and family on track</p>
                    </div>

                    <div className='flex flex-col gap-[28px] text-white'>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Sync unlimited devices</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>10 GB monthly uploads</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>200 MB max. note size</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Customize Home dashboard and access extra widgets</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Connect primary Google Calendar account</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpointyellow.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </div>

                    <div>
                        <button className='rounded-[8px] px-[40px] py-[16px] bg-pLight hover:bg-pLightHover transition-[background-color] text-white'>Get Started</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="rounded-[10px] border-sYellow border-[1px] max-w-[472px] flex flex-col py-[40px] px-[44px] gap-[25px]">
                    <div className="flex flex-col gap-[25px]">
                        <p className="font-semibold text-[24px] leading-[36px] tracking-[0%]">Organization</p>
                        <h4 className="font-bold text-[36px] tracking-[-2%]">$49.99</h4>
                        <p className="font-medium text-[18px] leading-[23px] tracking-[-2%]">Capture ideas and find them quickly</p>
                    </div>

                    <div className='flex flex-col gap-[28px]'>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Sync unlimited devices</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>10 GB monthly uploads</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>200 MB max. note size</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Customize Home dashboard and access extra widgets</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Connect primary Google Calendar account</p>
                        </div>
                        <div className='flex items-center gap-[19px]'>
                            <Image src={"/assets/checkpoint.svg"} className="w-[18px] h-[18px]" width={18} height={18} alt={"Checkpoint"} />
                            <p className='text-[16px] leading-[20px] tracking-[-2%]'>Add due dates, reminders, and notifications to your tasks</p>
                        </div>
                    </div>

                    <div>
                        <button className='rounded-[8px] px-[40px] py-[16px] border-sYellow hover:bg-sYellow transition-[background-color] border-[1px]'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index