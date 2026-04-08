'use client'

import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  return (
    <div className="hhdr">
      <div>
        <div className="hbrand">
          Garage<em>Plus</em>
        </div>
        <div className="hsub">179 Auto · Doi Saket</div>
      </div>

      <div className="hbell" onClick={() => router.push('/notif')}>
        <div className="hbnum">3</div>🔔
      </div>
    </div>
  )
}