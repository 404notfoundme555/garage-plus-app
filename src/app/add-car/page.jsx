'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AddCarPage() {
  const router = useRouter()

  const [carType, setCarType] = useState('sedan')
  const [brand, setBrand] = useState('')
  const [isOther, setIsOther] = useState(false)

  const handleBrandChange = (value) => {
    setBrand(value)
    setIsOther(value === 'other')
  }

  return (
    <div id="sc-add-car">

      {/* HEADER */}
      <div className="pghd">
        <div className="pbk" onClick={() => router.push('/profile')}>
          ‹
        </div>
        <div className="pgt">เพิ่มรถคันใหม่</div>
      </div>

      {/* CAR TYPE */}
      <div className="flbl">
        ประเภทรถ<span className="req">*</span>
      </div>

      <div className="ac-sel">

        <div
          className={`ac-type ${carType === 'sedan' ? 'on' : ''}`}
          onClick={() => setCarType('sedan')}
        >
          <div className="ac-type-ic">🚗</div>
          <div className="ac-type-t">เก๋ง / SUV</div>
        </div>

        <div
          className={`ac-type ${carType === 'pickup' ? 'on' : ''}`}
          onClick={() => setCarType('pickup')}
        >
          <div className="ac-type-ic">🚙</div>
          <div className="ac-type-t">กระบะ</div>
        </div>

        <div
          className={`ac-type ${carType === 'bike' ? 'on' : ''}`}
          onClick={() => setCarType('bike')}
        >
          <div className="ac-type-ic">🏍️</div>
          <div className="ac-type-t">มอเตอร์ไซค์</div>
        </div>

        <div
          className={`ac-type ${carType === 'van' ? 'on' : ''}`}
          onClick={() => setCarType('van')}
        >
          <div className="ac-type-ic">🚐</div>
          <div className="ac-type-t">รถตู้ / VAN</div>
        </div>

      </div>

      {/* FORM */}
      <div style={{ padding: '0 18px' }}>

        {/* BRAND */}
        <div className="fld">
          <div className="fl">
            ยี่ห้อ<span className="req">*</span>
          </div>

          <select
            className="fi"
            style={{ appearance: 'none' }}
            value={brand}
            onChange={(e) => handleBrandChange(e.target.value)}
          >
            <option value="">เลือกยี่ห้อ</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Isuzu</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option value="other">อื่นๆ (ระบุ)</option>
          </select>
        </div>

        {/* OTHER BRAND */}
        {isOther && (
          <div className="fld">
            <div className="fl">
              ระบุยี่ห้อ<span className="req">*</span>
            </div>
            <input className="fi" placeholder="พิมพ์ยี่ห้อรถ..." />
          </div>
        )}

        {/* MODEL */}
        <div className="fld">
          <div className="fl">
            รุ่น<span className="req">*</span>
          </div>
          <input className="fi" placeholder="เช่น Fortuner, Civic, D-Max" />
        </div>

        {/* YEAR */}
        <div className="fld">
          <div className="fl">
            ปีที่ผลิต<span className="req">*</span>
          </div>
          <input
            className="fi"
            type="number"
            min="1990"
            max="2026"
            placeholder="เช่น 2022"
          />
        </div>

        {/* PLATE */}
        <div className="fld">
          <div className="fl">
            ทะเบียนรถ<span className="req">*</span>
          </div>
          <input className="fi" placeholder="เช่น ชม 1234" />
        </div>

        {/* COLOR */}
        <div className="fld">
          <div className="fl">สีรถ</div>
          <input className="fi" placeholder="เช่น ขาว, เทา, ดำ" />
        </div>

        {/* VIN */}
        <div className="fld" style={{ marginBottom: '20px' }}>
          <div className="fl">เลขตัวถัง (VIN) — ไม่บังคับ</div>
          <input className="fi" placeholder="17 หลัก" />
        </div>

        {/* BUTTON */}
        <button className="btnp">
          เพิ่มรถ
        </button>

        <div style={{ height: '22px' }}></div>

      </div>
    </div>
  )
}