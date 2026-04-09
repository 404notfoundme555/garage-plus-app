'use client'
import { useRouter } from 'next/navigation'

export default function HistorySection() {
  const router = useRouter()

  return (
    <>
      <div className="sxhd">
        <div className="sxt">ประวัติล่าสุด</div>
        <div
          className="sxl"
          onClick={() => router.push('/history')}
        >
          ดูทั้งหมด
        </div>
      </div>

      <div className="hrow">
        <div className="hric">🛢️</div>
        <div style={{ flex: 1 }}>
          <div className="hrn">เปลี่ยนน้ำมันเครื่อง</div>
          <div className="hrd">12 มี.ค. 2568</div>
        </div>
        <div className="hrp">฿850</div>
      </div>

      <div className="hrow" style={{ marginBottom: 14 }}>
        <div className="hric">🔩</div>
        <div style={{ flex: 1 }}>
          <div className="hrn">เปลี่ยนผ้าเบรก</div>
          <div className="hrd">28 ก.พ. 2568</div>
        </div>
        <div className="hrp">฿1,200</div>
      </div>
    </>
  )
}