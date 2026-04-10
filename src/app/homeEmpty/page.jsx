'use client'
import Header from "@/components/layout/Header"
import { useRouter } from 'next/navigation'

export default function HomeEmptyPage() {
  const router = useRouter()

  return (
    <div id="sc-home-empty">

      <Header />

      {/* EMPTY CAR */}
      <div
        className="hcar-empty"
        onClick={() => router.push('/add-car')}
      >
        <div className="hem-ic">🚗</div>
        <div className="hem-t">ยังไม่มีรถของคุณ</div>
        <div className="hem-s">
          เพิ่มรถคันแรกของคุณเพื่อจองคิวซ่อม<br />
          และติดตามสถานะได้ทันที
        </div>
        <div className="hem-btn">➕ เพิ่มรถคันแรก</div>
      </div>

      {/* QUICK MENU */}
      <div className="qgrd">
        <div className="qc" onClick={() => router.push('/booking')}>
          <div className="qic">📅</div>
          <div className="qn">จองคิว</div>
        </div>

        <div className="qc" onClick={() => router.push('/status')}>
          <div className="qic">🔧</div>
          <div className="qn">สถานะ</div>
        </div>

        <div className="qc" onClick={() => router.push('/history')}>
          <div className="qic">📋</div>
          <div className="qn">ประวัติ</div>
        </div>

        <div className="qc">
          <div className="qic">🎁</div>
          <div className="qn">โปรโมชั่น</div>
        </div>
      </div>

      {/* HEADER */}
      <div className="sxhd">
        <div className="sxt">บทความ & ข่าวสาร</div>
        <div className="sxl">ดูทั้งหมด</div>
      </div>

      {/* ARTICLE 1 */}
      <div
        style={{
          margin: '0 18px 14px',
          background: 'var(--surf)',
          borderRadius: '16px',
          border: '.5px solid var(--brd)',
          overflow: 'hidden'
        }}
      >
        <div
          className="aib"
          style={{ background: 'linear-gradient(135deg,#1a2f45,#2D4A6E)' }}
        >
          <span>🔧</span>
          <div className="abg">ดูแลรักษา</div>
        </div>

        <div className="ab">
          <div className="at">เปลี่ยนน้ำมันเครื่องบ่อยแค่ไหน ดีที่สุด?</div>
          <div className="art-footer">
            <span className="am">5 นาที · 2 วันที่แล้ว</span>
            <span className="art-read">อ่านต่อ →</span>
          </div>
        </div>
      </div>

      {/* ARTICLE 2 */}
      <div
        style={{
          margin: '0 18px 14px',
          background: 'var(--surf)',
          borderRadius: '16px',
          border: '.5px solid var(--brd)',
          overflow: 'hidden'
        }}
      >
        <div
          className="aib"
          style={{ background: 'linear-gradient(135deg,#1A3D2B,#0F5C3A)' }}
        >
          <span>🏎️</span>
          <div className="abg">โปรโมชั่น</div>
        </div>

        <div className="ab">
          <div className="at">ตรวจเช็ค 32 รายการฟรี ใช้บริการครบ 3 ครั้ง</div>
          <div className="art-footer">
            <span className="am">2 นาที · 1 สัปดาห์</span>
            <span className="art-read">อ่านต่อ →</span>
          </div>
        </div>
      </div>

    </div>
  )
}