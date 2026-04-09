'use client'

import { useState } from 'react'

export default function BookingSection() {

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const times = [
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00'
  ]

  return (
    <div>

      <h2>จองคิว</h2>

      {/* เลือกวัน */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* เลือกเวลา */}
      <div style={{ marginTop: '10px' }}>
        {times.map((t) => (
          <button
            key={t}
            onClick={() => setTime(t)}
            style={{
              margin: '5px',
              background: time === t ? 'orange' : '#eee'
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* แสดงผล */}
      <div style={{ marginTop: '20px' }}>
        <p>วันที่: {date || '-'}</p>
        <p>เวลา: {time || '-'}</p>
      </div>

      {/* ปุ่มจอง */}
      <button
        style={{ marginTop: '10px' }}
        onClick={() => alert('จองสำเร็จ')}
      >
        ยืนยันการจอง
      </button>

    </div>
  )
}