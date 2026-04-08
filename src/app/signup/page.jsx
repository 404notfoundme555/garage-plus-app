'use client'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()

  return (
    <div className="auth">
      <h2>สมัครสมาชิก</h2>

      <input className="fi" placeholder="ชื่อ" />
      <input className="fi" placeholder="เบอร์" />
      <input className="fi" placeholder="Email" />
      <input className="fi" type="password" placeholder="Password" />

      <button className="btnp" onClick={()=>router.push('/home')}>
        สมัคร
      </button>
    </div>
  )
}