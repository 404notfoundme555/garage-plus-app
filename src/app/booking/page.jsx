'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BookingPage() {
  const router = useRouter()

  const [pickupType, setPickupType] = useState('self')
  const [time, setTime] = useState('11:00')
  const [service, setService] = useState('oil')

  return (
    <div id="sc-book">

      {/* HEADER */}
      <div className="pghd">
        <div className="pbk" onClick={() => router.push('/home')}>
          ‹
        </div>
        <div className="pgt">จองคิวซ่อม</div>
      </div>

      {/* TYPE */}
      <div className="flbl">เลือกประเภทบริการ</div>

      <div className="pickup-opt" style={{ marginBottom: 0 }}>

        <div
          className={`po ${pickupType === 'self' ? 'on' : ''}`}
          onClick={() => setPickupType('self')}
        >
          <div className="po-ic">🏪</div>
          <div className="po-t">นำรถมาเอง</div>
          <div className="po-s">เข้าอู่ด้วยตัวเอง</div>
        </div>

        <div
          className={`po ${pickupType === 'home' ? 'on' : ''}`}
          onClick={() => setPickupType('home')}
        >
          <div className="po-ic">🏠</div>
          <div className="po-t">รับรถถึงบ้าน</div>
          <div className="po-s">ช่างไปรับ-ส่ง</div>
        </div>

      </div>

      {/* CALENDAR (static ก่อน) */}
      <div className="flbl" style={{ paddingTop: 12 }}>เลือกวันที่</div>

      <div className="cal-header">
        <div className="cal-nav">‹</div>
        <div className="cal-month">เมษายน 2568</div>
        <div className="cal-nav">›</div>
      </div>

      <div className="cal-grid">
        <div className="cal-day-label">อา</div>
        <div className="cal-day-label">จ</div>
        <div className="cal-day-label">อ</div>
        <div className="cal-day-label">พ</div>
        <div className="cal-day-label">พฤ</div>
        <div className="cal-day-label">ศ</div>
        <div className="cal-day-label">ส</div>

        <div className="cal-day off">30</div>
        <div className="cal-day today">31</div>
        <div className="cal-day">1</div>
        <div className="cal-day">2</div>

        <div className="cal-day sel">
          3
          <div className="cal-dot ok"></div>
        </div>

        <div className="cal-day">
          4
          <div className="cal-dot few"></div>
        </div>

        <div className="cal-day off">5</div>
      </div>

      {/* TIME */}
      <div className="flbl">ช่วงเวลา</div>

      <div className="slts">

        {['08:00', '09:00', '10:00', '11:00', '13:00', '14:00'].map((t) => (
          <div
            key={t}
            className={`slt ${time === t ? 'on' : 'av'}`}
            onClick={() => setTime(t)}
          >
            {t}
            <div className="slt-q">
              {time === t ? 'เลือก ✓' : 'ว่าง'}
            </div>
          </div>
        ))}

      </div>

      {/* SERVICE */}
      <div className="flbl">ประเภทงาน</div>

      <div className="svcs">

        {[
          { key: 'oil', label: 'เปลี่ยนน้ำมัน' },
          { key: 'check', label: 'ตรวจเช็ค' },
          { key: 'brake', label: 'เบรก' },
          { key: 'tire', label: 'ยาง' },
          { key: 'other', label: 'อื่นๆ' }
        ].map((s) => (
          <div
            key={s.key}
            className={`svc ${service === s.key ? 'on' : ''}`}
            onClick={() => setService(s.key)}
          >
            {s.label}
          </div>
        ))}

      </div>

      {/* NOTE */}
      <div className="flbl" style={{ marginBottom: 4 }}>หมายเหตุ</div>

      <div style={{ padding: '0 18px 14px' }}>
        <textarea
          className="fi"
          style={{
            resize: 'none',
            height: '50px',
            fontSize: '12px'
          }}
          placeholder="รายละเอียดเพิ่มเติม..."
        />
      </div>

      {/* CONFIRM */}
      <div
        className="cfbar"
        onClick={() => router.push('/book-success')}
      >
        ยืนยันการจอง — {time} น.
      </div>

    </div>
  )
}