'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase/config'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { useAuthContext } from '@/context/AuthContext'

function useUnreadCount() {
  const { uid } = useAuthContext()
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!uid) return
    const unsub = onSnapshot(
      query(collection(db,'notifications'), where('userId','==',uid), where('unread','==',true)),
      snap => setCount(snap.size)
    )
    return () => unsub()
  }, [uid])
  return count
}

const ADMIN_NAV = [
  { id:'staff/dashboard',     icon:'📊', label:'Dashboard' },
  { id:'staff/queue',         icon:'📋', label:'จัดการคิว' },
  { id:'staff/repairs',       icon:'🔧', label:'งานซ่อม' },
  { divider:true },
  { id:'staff/assign',        icon:'👥', label:'มอบหมายงาน' },
  { id:'staff/customers',     icon:'👤', label:'ข้อมูลลูกค้า' },
  { id:'staff/reports',       icon:'📈', label:'รายงาน' },
  { divider:true },
  { id:'staff/employees',     icon:'🧑‍🔧', label:'พนักงาน' },
  { id:'staff/promotions',    icon:'🎁', label:'โปรโมชั่น' },
  { id:'staff/articles',      icon:'📰', label:'บทความ' },
  { divider:true },
  { id:'staff/notifications', icon:'🔔', label:'แจ้งเตือน', dynamic:true },
  { id:'staff/settings',      icon:'⚙️',  label:'ตั้งค่า' },
]
const MECH_NAV = [
  { section:'เมนูช่างซ่อม' },
  { id:'staff/mech/queue',    icon:'📋', label:'คิวของฉัน' },
  { id:'staff/mech/repair',   icon:'🔧', label:'บันทึกซ่อม' },
  { id:'staff/mech/history',  icon:'📂', label:'ประวัติลูกค้า' },
  { divider:true },
  { id:'staff/notifications', icon:'🔔', label:'แจ้งเตือน', dynamic:true },
]

export default function Sidebar({ role }) {
  const pathname    = usePathname()
  const unreadCount = useUnreadCount()
  const nav     = role === 'admin' ? ADMIN_NAV : MECH_NAV
  const isAdmin = role === 'admin'
  const isActive = (id) => pathname === `/${id}` || pathname.startsWith(`/${id}/`)

  return (
    <nav className="w-44 bg-surf flex-shrink-0 overflow-y-auto py-3"
      style={{ borderRight:'0.5px solid var(--brd)' }}>
      {nav.map((item,i) => {
        if (item.divider)  return <div key={i} className="my-2 mx-4" style={{ height:'0.5px',background:'var(--brd)' }}/>
        if (item.section)  return <div key={i} className="px-4 pt-2 pb-1 text-t3 font-bold uppercase tracking-wider" style={{ fontSize:9 }}>{item.section}</div>
        const on    = isActive(item.id)
        const badge = item.dynamic ? unreadCount : 0
        return (
          <Link key={item.id} href={`/${item.id}`}
            className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium cursor-pointer transition-colors"
            style={{ borderRight:on?`2.5px solid ${isAdmin?'var(--acc)':'var(--grn)'}`:'2.5px solid transparent', background:on?(isAdmin?'var(--adim)':'var(--gdim)'):'transparent', color:on?(isAdmin?'var(--acc)':'var(--grn)'):'var(--t2)', fontWeight:on?700:500 }}>
            <span style={{ fontSize:14 }}>{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {badge > 0 && (
              <span className="text-white rounded-full flex items-center justify-center font-bold"
                style={{ background:'var(--err)',fontSize:9,minWidth:16,height:16,padding:'0 3px' }}>
                {badge > 9 ? '9+' : badge}
              </span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
