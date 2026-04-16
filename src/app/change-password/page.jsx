'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function ChangePasswordPage() {
  const router = useRouter()

  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')

  // 🔥 คำนวณความแข็งแรงรหัสผ่าน
  const getStrength = () => {
    if (newPw.length < 4) return { width: '20%', label: 'อ่อนมาก' }
    if (newPw.length < 8) return { width: '40%', label: 'อ่อน' }
    if (/[A-Z]/.test(newPw) && /\d/.test(newPw)) {
      return { width: '100%', label: 'แข็งแรงมาก' }
    }
    return { width: '70%', label: 'ปานกลาง' }
  }

  const strength = getStrength()

  const handleSubmit = () => {
    if (!currentPw || !newPw || !confirmPw) {
      alert('กรอกข้อมูลให้ครบ')
      return
    }

    if (newPw.length < 8) {
      alert('รหัสผ่านต้องอย่างน้อย 8 ตัว')
      return
    }

    if (newPw !== confirmPw) {
      alert('รหัสผ่านไม่ตรงกัน')
      return
    }

    alert('เปลี่ยนรหัสผ่านสำเร็จ')
    router.push('/settings')
  }

  return (
    <div id="sc-change-pw">

      {/* HEADER */}
      <div className="pghd">
        <div className="pbk" onClick={() => router.push('/settings')}>
          ‹
        </div>
        <div className="pgt">เปลี่ยนรหัสผ่าน</div>
      </div>

      <div style={{ padding: '0 18px' }}>

        {/* INFO BOX */}
        <div
          style={{
            background: 'var(--s2)',
            borderRadius: '12px',
            padding: '12px',
            marginBottom: '16px',
            fontSize: '12px',
            color: 'var(--t2)',
            lineHeight: '1.6',
            border: '.5px solid var(--brd)'
          }}
        >
          🔒 รหัสผ่านใหม่ควรมีความยาวอย่างน้อย 8 ตัวอักษร
          ประกอบด้วยตัวอักษรและตัวเลข
        </div>

        {/* CURRENT PASSWORD */}
        <div className="fld">
          <div className="fl">
            รหัสผ่านปัจจุบัน<span className="req">*</span>
          </div>

          <div className="pw-wrap">
            <input
              className="fi"
              type="password"
              placeholder="••••••••"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
            />
            <span className="pw-eye">👁</span>
          </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="fld">
          <div className="fl">
            รหัสผ่านใหม่<span className="req">*</span>
          </div>

          <div className="pw-wrap">
            <input
              className="fi"
              type="password"
              placeholder="อย่างน้อย 8 ตัวอักษร"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
            />
            <span className="pw-eye">👁</span>
          </div>

          {/* STRENGTH BAR */}
          <div className="pw-strength">
            <div
              className="pw-str-fill"
              style={{ width: strength.width }}
            ></div>
          </div>

          <div
            style={{
              fontSize: '10px',
              color: 'var(--t3)',
              marginTop: '3px'
            }}
          >
            {strength.label}
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="fld" style={{ marginBottom: '22px' }}>
          <div className="fl">
            ยืนยันรหัสผ่านใหม่<span className="req">*</span>
          </div>

          <div className="pw-wrap">
            <input
              className="fi"
              type="password"
              placeholder="••••••••"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
            />
            <span className="pw-eye">👁</span>
          </div>
        </div>

        {/* BUTTON */}
        <button className="btnp" onClick={handleSubmit}>
          บันทึกรหัสผ่านใหม่
        </button>

        {/* CANCEL */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '13px',
            color: 'var(--t2)',
            cursor: 'pointer'
          }}
          onClick={() => router.push('/settings')}
        >
          ยกเลิก
        </div>

      </div>
    </div>
  )
}