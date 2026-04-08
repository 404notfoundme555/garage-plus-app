'use client'
import { useRouter } from 'next/navigation'

export default function MenuGrid() {
  const router = useRouter()

  return (
    <div className="qgrd">
            <div className="qc" onClick={()=>router.push('/booking')}>
                <div className="qic">📅</div>
                <div className="qn">จองคิว</div>
            </div>
            <div className="qc" onClick={()=>router.push('/status')}>
                <div className="qic">🔧</div>
                <div className="qn">สถานะ</div>
            </div>
            <div className="qc" onClick={()=>router.push('/history')}>
                <div className="qic">📋</div>
                <div className="qn">ประวัติ</div>
            </div>
            <div className="qc">
                <div className="qic">🎁</div>
                <div className="qn">โปรโมชั่น</div>
            </div>
          </div> 
  )
}