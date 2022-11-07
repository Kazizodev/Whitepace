import Links from './links'
import Foot from './foot'

const index = () => {
  return (
    <div className='bg-pDark pt-[140px] pb-[32px]'>
        <div className="container mx-auto flex flex-col h-[302px] justify-between">

            <Links />

            <Foot />

        </div>
    </div>
  )
}

export default index