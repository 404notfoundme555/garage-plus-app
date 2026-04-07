"use client";
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({ score: 0, label: "อ่อนมาก", color: "var(--err)" });

  useEffect(() => {
    let s = 0;
    if (password.length >= 8) s += 25;
    if (password.length >= 12) s += 15;
    if (/[A-Z]/.test(password)) s += 20;
    if (/[0-9]/.test(password)) s += 20;
    if (/[^A-Za-z0-9]/.test(password)) s += 20;

    let c = 'var(--err)', t = 'อ่อนมาก';
    if (s >= 60) { c = 'var(--acc)'; t = 'ปานกลาง'; }
    if (s >= 80) { c = 'var(--grn)'; t = 'แข็งแกร่ง'; }
    setStrength({ score: Math.min(s, 100), label: t, color: c });
  }, [password]);

  return (
    <main className="min-h-[100dvh] flex flex-col justify-center px-6">
      <div className="glass-card w-full max-w-[420px] mx-auto p-10">
        
        <header className="mb-12">
          <h1 className="syne text-[36px] font-bold leading-tight tracking-tight">ยินดีต้อนรับ</h1>
          <p className="text-[var(--t2)] text-[16px] mt-2 font-medium">เข้าสู่ระบบ GaragePlus</p>
        </header>

        <form className="space-y-7">
          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase tracking-[0.1em] ml-1 text-[var(--t1)] opacity-60">อีเมล</label>
            <input type="email" placeholder="name@example.com" className="input-style text-[16px]" />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-bold uppercase tracking-[0.1em] ml-1 text-[var(--t1)] opacity-60">รหัสผ่าน</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="input-style text-[16px]" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* Strength Indicator ที่ละมุนขึ้น */}
            <div className="pt-2 px-1">
              <div className="flex justify-between text-[11px] font-bold mb-2">
                <span style={{ color: strength.color }}>{strength.label}</span>
                <span className="text-[var(--t3)]">{strength.score}%</span>
              </div>
              <div className="h-[5px] bg-[var(--s2)] rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-700 ease-out" 
                  style={{ width: `${strength.score}%`, backgroundColor: strength.color }}
                />
              </div>
            </div>
          </div>

          <button className="w-full h-[62px] bg-[var(--acc)] text-white font-bold rounded-[22px] mt-4 shadow-[0_15px_30px_-5px_var(--adim)] active:scale-[0.97] transition-all text-[18px]">
            เข้าสู่ระบบ
          </button>
        </form>

        <footer className="mt-12 text-center">
          <p className="text-[var(--t2)] text-[15px]">
            ยังไม่มีบัญชี? <span className="text-[var(--acc)] font-bold cursor-pointer hover:underline decoration-2 underline-offset-4">ลงทะเบียน</span>
          </p>
        </footer>
      </div>
    </main>
  );
}