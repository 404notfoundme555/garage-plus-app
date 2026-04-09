'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Signup() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [line, setLine] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPw, setConfirmPw] = useState('')

  const handleSignup = () => {
    if (!name || !phone || !email || !password || !confirmPw) {
      alert('กรอกข้อมูลให้ครบ')
      return
    }

    if (password !== confirmPw) {
      alert('รหัสผ่านไม่ตรงกัน')
      return
    }

    router.push('/home')
  }

  return (
    <div id="sc-signup">
      <div className="auth">

        <div className="alogo">
          <div className="alogo-ic">⚙️</div>
          <div className="alogo-t">Garage<em>Plus</em></div>
        </div>

        <div className="ah">สมัครสมาชิก</div>

        <div className="as">
          สร้างบัญชีเพื่อเริ่มใช้งาน
          <span style={{ color: 'var(--err)', fontSize: '11px' }}>
            * จำเป็นต้องกรอก
          </span>
        </div>

        {/* NAME */}
        <div className="fld">
          <div className="fl">ชื่อ-นามสกุล<span className="req">*</span></div>
          <input
            className="fi"
            placeholder="กรอกชื่อ-นามสกุล"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* PHONE */}
        <div className="fld">
          <div className="fl">เบอร์โทรศัพท์<span className="req">*</span></div>
          <input
            className="fi"
            placeholder="0XX-XXX-XXXX"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* LINE */}
        <div className="fld">
          <div className="fl">LINE ID</div>
          <input
            className="fi"
            placeholder="@lineID (ไม่บังคับ)"
            value={line}
            onChange={(e) => setLine(e.target.value)}
          />
        </div>

        {/* EMAIL */}
        <div className="fld">
          <div className="fl">อีเมล<span className="req">*</span></div>
          <input
            className="fi"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="fld">
          <div className="fl">รหัสผ่าน<span className="req">*</span></div>
          <div className="pw-wrap">
            <input
              className="fi"
              type="password"
              placeholder="อย่างน้อย 8 ตัวอักษร"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="pw-eye">👁</span>
          </div>

          <div className="pw-strength">
            <div className="pw-str-fill"></div>
          </div>

          <div style={{ fontSize: '10px', color: 'var(--t3)', marginTop: '3px' }}>
            ความแข็งแกร่งรหัสผ่าน
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="fld" style={{ marginBottom: '14px' }}>
          <div className="fl">
            ยืนยันรหัสผ่าน<span className="req">*</span>
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

        {/* TERMS */}
        <div className="terms-row">
          <div className="cb">✓</div>
          <div className="terms-txt">
            ฉันยอมรับ <a>ข้อกำหนดการใช้งาน</a> และ{' '}
            <a>นโยบายความเป็นส่วนตัว (PDPA)</a>
          </div>
        </div>

        {/* BUTTON */}
        <button className="btnp" onClick={handleSignup}>
          สร้างบัญชี
        </button>

        <div className="aft" style={{ marginTop: '12px' }}>
          มีบัญชีแล้ว?{' '}
          <a onClick={() => router.push('/login')}>
            เข้าสู่ระบบ
          </a>
        </div>

      </div>
    </div>
  )
}