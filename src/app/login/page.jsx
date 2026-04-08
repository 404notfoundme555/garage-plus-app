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
    <div className="auth">

      <div className="alogo">
        <div className="alogo-ic">⚙️</div>
        <div className="alogo-t">Garage<em>Plus</em></div>
      </div>

      <div className="ah">ยินดีต้อนรับ 👋</div>
      <div className="as">เข้าสู่ระบบเพื่อจัดการรถของคุณ</div>

      <input
        className="fi"
        placeholder="your@email.com"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        className="fi"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button className="btnp" onClick={login}>
        เข้าสู่ระบบ
      </button>

      <div className="aft">
        ยังไม่มีบัญชี? 
        <span onClick={()=>router.push('/signup')} style={{color:'#E8863A',cursor:'pointer'}}>
          สมัครสมาชิก
        </span>
      </div>

    </div>
  )
}