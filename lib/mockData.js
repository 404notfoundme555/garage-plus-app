/**
 * ⚠️ DEPRECATED — ไฟล์นี้ไม่ถูกใช้งานแล้ว
 * Mock data ทั้งหมดถูกแทนที่ด้วย Firestore จริงแล้ว
 * คงไฟล์ไว้เพื่อ reference เท่านั้น
 */

/**
 * Mock data — replace each export with a Firebase Firestore listener
 * Pattern:  onSnapshot(doc(db, 'collection', id), callback)
 */

export const MOCK_USER = {
  uid:         'user_001',
  name:        'สมหมาย ใจดี',
  phone:       '081-234-5678',
  lineId:      '@sommai',
  email:       'sommai@email.com',
  birthday:    '1995-08-12',
  memberSince: 'ม.ค. 2567',
  initials:    'สม',
  points:      320,
  usageCount:  3,
}

export const MOCK_CARS = [
  { id: 'car_001', userId: 'user_001', type: 'sedan',  brand: 'Toyota', model: 'Fortuner', year: 2022, plate: 'ชม 3847', color: 'ขาว',  vin: '',          isMain: true,  icon: '🚗', activeRepair: 'repair_001' },
  { id: 'car_002', userId: 'user_001', type: 'sedan',  brand: 'Honda',  model: 'Jazz',     year: 2019, plate: 'ชม 1122', color: 'เทา',  vin: '',          isMain: false, icon: '🚙', activeRepair: null },
]

export const MOCK_REPAIR = {
  id:              'repair_001',
  carId:           'car_001',
  userId:          'user_001',
  car:             'Toyota Fortuner 2022',
  plate:           'ชม 3847',
  mechanic:        'นายสมชาย ก.',
  mechanicId:      'mech_001',
  entryDate:       '26 มี.ค. 2568',
  entryTime:       '08:30 น.',
  estimatedDone:   '26 มี.ค. 2568 ภายใน 17:00 น.',
  bookingRef:      '#BK2568-041',
  status:          'repairing',        // 'waiting' | 'repairing' | 'checking' | 'done'
  currentStepId:   3,

  // Timeline events — like courier tracking
  timeline: [
    {
      id:       1,
      status:   'done',
      icon:     '✓',
      title:    'รับรถเข้าอู่แล้ว',
      desc:     'ช่างรับรถและบันทึกข้อมูลเรียบร้อย — Toyota Fortuner ชม 3847',
      time:     '26 มี.ค. 2568 · 08:30 น.',
      location: '179 Auto, Doi Saket',
    },
    {
      id:       2,
      status:   'done',
      icon:     '✓',
      title:    'ตรวจวินิจฉัยสภาพรถ',
      desc:     'ช่างตรวจสอบและระบุรายการซ่อมที่จำเป็นครบแล้ว',
      time:     '26 มี.ค. 2568 · 09:00 น.',
      location: '179 Auto, Doi Saket',
    },
    {
      id:       3,
      status:   'active',
      icon:     '🔧',
      title:    'กำลังดำเนินการซ่อม',
      desc:     'ช่างสมชายกำลังเปลี่ยนน้ำมันเครื่อง + ไส้กรอง คาดว่าจะแล้วเสร็จภายใน 14:00 น.',
      time:     '26 มี.ค. 2568 · 10:15 น.',
      location: '179 Auto, Doi Saket',
    },
    {
      id:       4,
      status:   'pending',
      icon:     '4',
      title:    'ตรวจสอบคุณภาพหลังซ่อม',
      desc:     'ช่างทดสอบระบบและตรวจความเรียบร้อยก่อนส่งมอบ',
      time:     null,
      location: null,
    },
    {
      id:       5,
      status:   'pending',
      icon:     '5',
      title:    'พร้อมส่งมอบรถ',
      desc:     'รถซ่อมเสร็จ คุณสามารถมารับหรือนัดช่างส่งถึงบ้านได้',
      time:     null,
      location: null,
    },
  ],

  costItems: [
    { name: 'น้ำมันเครื่อง 5W-40 (4L)', price: 520 },
    { name: 'ไส้กรองน้ำมันเครื่อง',     price: 180 },
    { name: 'ค่าแรง',                    price: 150 },
  ],
  totalEstimate: 850,
  isFinalPrice: false,
}

export const MOCK_HISTORY = [
  { id: 'h1', name: 'เปลี่ยนน้ำมันเครื่อง',   date: '12 มี.ค. 2568', year: 2568, mechanic: 'ช่างสมชาย', price: 850,   icon: '🛢️', free: false },
  { id: 'h2', name: 'เปลี่ยนผ้าเบรก (หน้า)',  date: '28 ก.พ. 2568',  year: 2568, mechanic: 'ช่างสมชาย', price: 1200,  icon: '🔩', free: false },
  { id: 'h3', name: 'ตรวจเช็คสภาพ 32 รายการ', date: '10 ม.ค. 2568',  year: 2568, mechanic: 'ช่างวิชัย',  price: 0,     icon: '🚗', free: true,  promoRef: 'ใช้บริการครบ 3 ครั้ง' },
  { id: 'h4', name: 'เปลี่ยนแบตเตอรี่',       date: '5 ธ.ค. 2567',   year: 2567, mechanic: 'ช่างสมชาย', price: 2800,  icon: '🔋', free: false },
  { id: 'h5', name: 'เปลี่ยนยางหน้า 2 เส้น',  date: '20 ต.ค. 2567',  year: 2567, mechanic: 'ช่างวิชัย',  price: 3600,  icon: '🔄', free: false },
]

export const MOCK_NOTIFICATIONS = [
  { id: 'n1', icon: '🔧', bg: 'rgba(232,134,58,.12)', title: 'งานซ่อมเสร็จแล้ว!',       body: 'Toyota Fortuner ชม 3847 ซ่อมเสร็จแล้ว พร้อมรับรถได้',    time: '10 นาทีที่แล้ว',  unread: true,  href: '/status'     },
  { id: 'n2', icon: '🎁', bg: 'rgba(45,158,101,.10)', title: 'คุณได้รับสิทธิ์พิเศษ!',   body: 'ใช้บริการครบ 3 ครั้งแล้ว รับตรวจเช็คฟรี 32 รายการ',      time: '2 ชั่วโมงที่แล้ว', unread: true,  href: '/promotions' },
  { id: 'n3', icon: '📅', bg: 'rgba(59,130,246,.10)', title: 'เตือนบำรุงรักษา',          body: 'ถึงเวลาเปลี่ยนน้ำมันเครื่องแล้ว (ครบ 5,000 กม.)',          time: '1 วันที่แล้ว',    unread: true,  href: '/book'       },
  { id: 'n4', icon: '🔧', bg: 'rgba(232,134,58,.12)', title: 'สถานะงานซ่อมเปลี่ยน',     body: 'รถของคุณเข้าสู่ขั้นตอน "ดำเนินการซ่อม" แล้ว',             time: '3 วันที่แล้ว',    unread: false, href: '/status'     },
  { id: 'n5', icon: '📅', bg: 'rgba(45,158,101,.10)', title: 'ยืนยันการจอง',             body: 'จองคิววันพฤ.ที่ 3 เม.ย. เวลา 11:00 น. สำเร็จแล้ว',       time: '5 วันที่แล้ว',    unread: false, href: '/status'     },
]

export const MOCK_ARTICLES = [
  { id: 1, title: 'เปลี่ยนน้ำมันเครื่องบ่อยแค่ไหน ดีที่สุด?',           cat: 'ดูแลรักษา', min: 5,  bg: 'linear-gradient(135deg,#1a2f45,#2D4A6E)', icon: '🔧' },
  { id: 2, title: 'สัญญาณที่บอกว่าน้ำมันเบรกต้องเปลี่ยนแล้ว',          cat: 'Tips',       min: 3,  bg: 'linear-gradient(135deg,#3D2B1A,#6B3A1F)', icon: '🛢️' },
  { id: 3, title: 'ตรวจเช็ค 32 รายการฟรี ใช้บริการครบ 3 ครั้ง',        cat: 'โปรโมชั่น',  min: 2,  bg: 'linear-gradient(135deg,#1A3D2B,#0F5C3A)', icon: '🏎️' },
  { id: 4, title: 'หน้าร้อนนี้ดูแลระบบระบายความร้อนยังไง',              cat: 'ฤดูร้อน',    min: 4,  bg: 'linear-gradient(135deg,#3D1A1A,#6B1F1F)', icon: '🌡️' },
  { id: 5, title: 'แบตรถยนต์หมด รู้ก่อนป้องกันได้ง่ายๆ',               cat: 'แบตเตอรี่',  min: 3,  bg: 'linear-gradient(135deg,#1A2D3D,#154060)', icon: '🔋' },
]
