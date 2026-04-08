'use client'
import { useRouter } from 'next/navigation'

export default function MenuGrid() {
  const router = useRouter()

  return (
    <div className="qgrd">

      <div className="qc" onClick={() => router.push('/booking')}>
        📅 จองคิว
      </div>

      <div className="qc" onClick={() => router.push('/status')}>
        🔧 สถานะ
      </div>

      <div className="qc" onClick={() => router.push('/history')}>
        📋 ประวัติ
      </div>

      <div className="qc">
        🎁 โปร
      </div>

    </div>
  )
}