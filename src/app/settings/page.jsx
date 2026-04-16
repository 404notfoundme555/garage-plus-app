'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SettingsPage() {
  const router = useRouter()

  const [theme, setTheme] = useState('dark')
  const [lang, setLang] = useState('th')

  const [notif, setNotif] = useState({
    status: true,
    promo: true,
    maintenance: true,
    line: false
  })

  return (
    <div id="sc-settings">

      {/* HEADER */}
      <div className="pghd">
        <div className="pbk" onClick={() => router.push('/profile')}>
          ‹
        </div>
        <div className="pgt">การตั้งค่า</div>
      </div>

      {/* DISPLAY */}
      <div className="psec">
        <div className="psec-title">การแสดงผล</div>
      </div>

      <div style={{ padding: '0 18px' }}>

        {/* THEME */}
        <div className="prow">
          <div className="prow-ic ic-b">🌙</div>

          <div className="prow-body">
            <div className="prow-title">โหมดสี</div>
            <div className="prow-sub">เลือกธีมที่ชอบ</div>
          </div>

          <div style={{ display: 'flex', gap: '5px' }}>
            <div
              className={`sel-pill ${theme === 'dark' ? 'on' : ''}`}
              onClick={() => setTheme('dark')}
            >
              Dark
            </div>

            <div
              className={`sel-pill ${theme === 'light' ? 'on' : ''}`}
              onClick={() => setTheme('light')}
            >
              Light
            </div>
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="prow">
          <div className="prow-ic ic-y">🌐</div>

          <div className="prow-body">
            <div className="prow-title">ภาษา</div>
            <div className="prow-sub">Language</div>
          </div>

          <div style={{ display: 'flex', gap: '5px' }}>
            <div
              className={`sel-pill ${lang === 'th' ? 'on' : ''}`}
              onClick={() => setLang('th')}
            >
              ไทย
            </div>

            <div
              className={`sel-pill ${lang === 'en' ? 'on' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </div>
          </div>
        </div>

      </div>

      {/* NOTIFICATION */}
      <div className="psec">
        <div className="psec-title">การแจ้งเตือน</div>
      </div>

      <div style={{ padding: '0 18px' }}>

        {[
          { key: 'status', label: 'อัปเดตสถานะซ่อม', icon: '🔧' },
          { key: 'promo', label: 'โปรโมชั่น & ส่วนลด', icon: '🎁' },
          { key: 'maintenance', label: 'เตือนบำรุงรักษา', icon: '📅' },
          { key: 'line', label: 'แจ้งเตือนผ่าน LINE', icon: '💬' }
        ].map((item) => (
          <div className="prow" key={item.key}>
            <div className="prow-ic">{item.icon}</div>

            <div className="prow-body">
              <div className="prow-title">{item.label}</div>
            </div>

            <div
              className={`tog ${notif[item.key] ? 'on' : ''}`}
              onClick={() =>
                setNotif({
                  ...notif,
                  [item.key]: !notif[item.key]
                })
              }
            ></div>
          </div>
        ))}

      </div>

      {/* PRIVACY */}
      <div className="psec">
        <div className="psec-title">ความเป็นส่วนตัว</div>
      </div>

      <div style={{ padding: '0 18px' }}>

        <div
          className="prow"
          onClick={() => router.push('/change-password')}
        >
          <div className="prow-ic ic-r">🔒</div>

          <div className="prow-body">
            <div className="prow-title">เปลี่ยนรหัสผ่าน</div>
          </div>

          <div className="chv">›</div>
        </div>

        <div className="prow" style={{ border: 'none' }}>
          <div className="prow-ic ic-r">🗑️</div>

          <div className="prow-body">
            <div className="prow-title" style={{ color: 'var(--err)' }}>
              ลบบัญชี
            </div>
            <div className="prow-sub">
              ข้อมูลทั้งหมดจะถูกลบถาวร
            </div>
          </div>

          <div className="chv">›</div>
        </div>

      </div>

      <div style={{ height: '16px' }}></div>

    </div>
  )
}