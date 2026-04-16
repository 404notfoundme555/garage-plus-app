'use client'

export default function LogoutDialog({ open, onClose, onConfirm }) {
  if (!open) return null

  return (
    <div className="overlay">
      <div className="dlg">
        <div className="dlg-ic">🚪</div>
        <div className="dlg-t">ออกจากระบบ?</div>
        <div className="dlg-s">
          คุณต้องการออกจากระบบใช่หรือไม่?
          <br />
          คุณจะต้องเข้าสู่ระบบใหม่อีกครั้ง
        </div>

        <div className="dlg-btns">
          <div className="dlg-btn cancel" onClick={onClose}>
            ยกเลิก
          </div>

          <div className="dlg-btn confirm" onClick={onConfirm}>
            ออกจากระบบ
          </div>
        </div>
      </div>
    </div>
  )
}