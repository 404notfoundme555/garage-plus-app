export default function CarCard(){
    return (
       <div className="hcar">
            <div style="display:flex;justify-content:space-between;align-items:flex-start">
              <div className="htg">รถของฉัน</div>
              <div style="font-size:10px;color:var(--acc);font-weight:600;cursor:pointer">สลับรถ ›</div>
            </div>
            <div className="hcn">Toyota Fortuner</div>
            <div className="hpl">ชม 3847</div>
            <div className="hst">
                <div className="hpls"></div>
                <div className="hstxt">กำลังซ่อม — เปลี่ยนน้ำมัน</div>
                <div className="hslnk" onClick={()=>router.push('/status')}>ดูเพิ่ม ›</div>
            </div>
        </div> 
    )
}