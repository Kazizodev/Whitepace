import Image from 'next/image'

const index = () => {
  return (
    <div className="container mx-auto flex flex-col py-[140px] gap-[100px]">

      {/* Part 1 */}
      <div className="flex h-[550px] items-center gap-[60px]">

        <div className="flex flex-col gap-[60px] w-[48%]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-sBlack">Project Management</h1>
            <p className="text-[18px] leading-[30px] track-[-2%] text-sBlack">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
          </div>
          <div>
            <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
              Get Started
              <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
            </button>
          </div>
        </div>

        <div className="h-full w-[52%]">
          <Image src={"/assets/work-illustration.svg"} draggable={false} className={'h-full w-full'} width={720} height={620} alt={"Arrow pointing to the right"} />
        </div>

      </div>

      {/* Part 2 */}
      <div className="flex h-[660px] items-center gap-[100px]">
        <div className="h-full w-[50%] flex items-center">
          <Image src={"/assets/worktogether.png"} width={710} height={660} alt={"Work together"} />
        </div>

        <div className="flex flex-col gap-[60px] w-[50%]">
          <div className="flex flex-col gap-[24px]">
            <h1 className="font-bold text-[72px] leading-[90px] track-[-2%] text-sBlack">Work together</h1>
            <p className="text-[18px] leading-[30px] track-[-2%] text-sBlack">With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.</p>
          </div>
          <div>
            <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[23px] tracking-[-2%] bg-pLight hover:bg-pLightHover transition-[background-color] px-[40px] py-[20px] rounded-[8px]">
              Try it Now
              <Image src={"/assets/arrow-right.svg"} width={14} height={14} alt={"Arrow pointing to the right"} />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default index