'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    if (!email || !password) {
      alert('กรอกข้อมูลให้ครบ')
      return
    }
    router.push('/home')
  }

  return (
    <div id="sc-login">
      <div className="auth">

        <div className="alogo">
          <div className="alogo-ic">⚙️</div>
          <div className="alogo-t">Garage<em>Plus</em></div>
        </div>

        <div className="ah">ยินดีต้อนรับ 👋</div>
        <div className="as">เข้าสู่ระบบเพื่อจัดการรถของคุณ</div>

        {/* EMAIL */}
        <div className="fld">
          <div className="fl">
            อีเมล<span className="req">*</span>
          </div>

          <input
            className="fi"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="fld">
          <div className="fl">
            รหัสผ่าน<span className="req">*</span>
          </div>

          <div className="pw-wrap">
            <input
              className="fi"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="pw-eye">👁</span>
          </div>
        </div>

        <div className="forgot">ลืมรหัสผ่าน?</div>

        <button className="btnp" onClick={login}>
          เข้าสู่ระบบ
        </button>

        <div className="divdr">
          <div className="dvl"></div>
          <div className="dvt">หรือเข้าสู่ระบบด้วย</div>
          <div className="dvl"></div>
        </div>

        <div className="socs">
          <div className="soc" style={{ color: '#00B900' }}>🟢 LINE</div>
          <div className="soc">🔵 Google</div>
          <div className="soc">📞 เบอร์โทร</div>
        </div>

        <div className="aft">
          ยังไม่มีบัญชี?{' '}
          <a onClick={() => router.push('/signup')}>
            สมัครสมาชิก
          </a>
        </div>

      </div>

    </div>
  )
}