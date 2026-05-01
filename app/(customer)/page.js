'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'

export default function SplashPage() {
  const router      = useRouter()
  const { loading, isLoggedIn } = useAuthContext()

  useEffect(() => {
    if (loading) return
    const timer = setTimeout(() => {
      router.replace(isLoggedIn ? '/home' : '/login')
    }, 1800)
    return () => clearTimeout(timer)
  }, [loading, isLoggedIn, router])

  return (
    <div className="min-h-screen bg-token flex flex-col items-center justify-center">
      <div
        className="w-24 h-24 rounded-full bg-adim flex items-center justify-center mb-6 animate-gear-spin"
        style={{ border: '2px solid var(--abrd)' }}
      >
        <span style={{ fontSize: 44 }}>⚙️</span>
      </div>
      <h1 className="font-syne text-3xl font-extrabold text-t1 tracking-tight">
        Garage<span className="text-acc">Plus</span>
      </h1>
      <p className="text-t2 text-xs uppercase tracking-[0.18em] mt-1">
        179 Auto · Doi Saket
      </p>
      <div className="flex gap-2 mt-12">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full animate-dpulse"
            style={{
              backgroundColor: i === 1 ? 'var(--acc)' : 'var(--t3)',
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
