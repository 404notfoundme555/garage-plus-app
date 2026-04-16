'use client'

import { useRouter } from 'next/navigation'

export default function BookSuccessPage() {
  const router = useRouter()

  return (
    <div id="sc-book-success">

      <div className="scr" style={{ overflow: 'visible' }}>

        <div className="success-screen">

          <div className="suc-ring">✓</div>

          <div className="suc-h">จองคิวสำเร็จ! 🎉</div>

          <div className="suc-s">
            ระบบได้รับการจองของคุณแล้ว<br />
            คุณจะได้รับการแจ้งเตือนผ่าน LINE
          </div>

          <div className="suc-card">

            <div className="suc-row">
              <div className="suc-k">วันที่</div>
              <div className="suc-v">พฤ. 3 เม.ย. 2568</div>
            </div>

            <div className="suc-row">
              <div className="suc-k">เวลา</div>
              <div className="suc-v">11:00 น.</div>
            </div>

            <div className="suc-row">
              <div className="suc-k">รถ</div>
              <div className="suc-v">Fortuner · ชม 3847</div>
            </div>

            <div className="suc-row">
              <div className="suc-k">งาน</div>
              <div className="suc-v">เปลี่ยนน้ำมันเครื่อง</div>
            </div>

            <div className="suc-row">
              <div className="suc-k">หมายเลขจอง</div>
              <div className="suc-v" style={{ color: 'var(--acc)' }}>
                #BK2568-041
              </div>
            </div>

          </div>

          <div
            className="suc-btn1"
            onClick={() => router.push('/status')}
          >
            ติดตามสถานะงานซ่อม
          </div>

          <div
            className="suc-btn2"
            onClick={() => router.push('/home')}
          >
            กลับหน้าหลัก
          </div>

        </div>

      </div>

    </div>
  )
}