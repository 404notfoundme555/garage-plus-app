'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getSession } from '@/lib/staff/session'
import Topbar  from '@/components/staff/Topbar'
import Sidebar from '@/components/staff/Sidebar'

export default function DashboardShell({ children, requiredRole }) {
  const router = useRouter()
  const [user,   setUser]   = useState(null)
  const [isDark, setIsDark] = useState(true)
  const [ready,  setReady]  = useState(false)

  useEffect(() => {
    const session = getSession()
    if (!session) {
      // ถ้า URL เป็น /staff แต่ไม่มี staff session → ส่งกลับหน้า login หลัก
      router.replace('/staff/login')
      return
    }
    if (requiredRole && session.role !== requiredRole) {
      router.replace(session.role === 'admin' ? '/staff/dashboard' : '/staff/mech/queue')
      return
    }
    setUser(session)
    const dark = localStorage.getItem('gp_staff_dark') !== '0'
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)
    setReady(true)
  }, [])

  const toggleMode = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('gp_staff_dark', next ? '1' : '0')
  }

  if (!ready) return (
    <div className="flex items-center justify-center min-h-screen bg-tok">
      <span className="inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor:'var(--acc)', borderTopColor:'transparent' }}/>
    </div>
  )

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-tok">
      <Topbar user={user} onToggleMode={toggleMode} isDark={isDark} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar role={user.role} />
        <main className="flex-1 overflow-y-auto p-5 bg-tok">{children}</main>
      </div>
    </div>
  )
}
