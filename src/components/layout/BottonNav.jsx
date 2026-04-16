'use client'

import { useRouter } from 'next/navigation'

export default function BottomNav() {
  const router = useRouter()

  return (
    <div className="bnav">

      <div className="bni on" onClick={() => router.push('/home')}>
        <div className="bnic">🏠</div>
        <div className="bnil">หน้าหลัก</div>
      </div>

      <div className="bni" onClick={() => router.push('/booking')}>
        <div className="bnic">📅</div>
        <div className="bnil">จองคิว</div>
      </div>

      <div className="bni" onClick={() => router.push('/status')}>
        <div className="bnic">🔧</div>
        <div className="bnil">สถานะ</div>
      </div>

      <div className="bni" onClick={() => router.push('/history')}>
        <div className="bnic">📋</div>
        <div className="bnil">ประวัติ</div>
      </div>

      <div className="bni" onClick={() => router.push('/profile')}>
        <div className="bnic">👤</div>
        <div className="bnil">ฉัน</div>
      </div>

    </div>
  )
}