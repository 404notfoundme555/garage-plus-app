"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // รอ 3 วินาทีแล้วไปหน้า Login
    const timer = setTimeout(() => {
      router.push('/Login');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[var(--bg)]">
      {/* ส่วนรูปโลโก้ (อย่าลืมเอารูปไปใส่ใน public/logo.png) */}
      <div className="w-24 h-24 mb-6 animate-[spin_4s_linear_infinite]">
        <img src="/icon-images/setting.png" alt="GaragePlus" className="w-full h-full object-contain" />
      </div>

      <h1 className="text-4xl font-bold tracking-tighter">
        Garage<span className="text-[var(--acc)]">Plus</span>
      </h1>
      <p className="text-[var(--t2)] font-medium mt-1">179 Auto Service</p>

      {/* จุด Loading 3 จุด */}
      <div className="absolute bottom-20 flex gap-2">
        <div className="w-3 h-3 bg-[var(--acc)] rounded-full dot-anim [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-[var(--acc)] rounded-full dot-anim [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-[var(--acc)] rounded-full dot-anim"></div>
      </div>
    </div>
  );
}