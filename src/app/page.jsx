'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/login')
    }, 1500)
  }, [])

  return (
    <div id="sc-splash">
        <div className="splash">
          <div className="sp-ring">⚙️</div>
          <div className="sp-name">Garage<em>Plus</em></div>
          <div className="sp-sub">179 Auto · Doi Saket</div>
          <div className="sp-dots">
            <div className="sdot"></div>
            <div className="sdot"></div>
            <div className="sdot"></div>
          </div>
        </div>
    </div> 
  )
}