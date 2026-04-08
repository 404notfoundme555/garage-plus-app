export default function ArticleSection() {
  return (
    <>
      <div className="sxhd">
        <div className="sxt">บทความ & ข่าวสาร</div>
        <div className="sxl">ดูทั้งหมด</div>
      </div>

      <div className="cw">
        <div className="ct">

          <div className="ac">
            <div
              className="aib"
              style={{ background: 'linear-gradient(135deg,#1a2f45,#2D4A6E)' }}
            >
              <span>🔧</span>
              <div className="abg">ดูแลรักษา</div>
            </div>

            <div className="ab">
              <div className="at">
                เปลี่ยนน้ำมันเครื่องบ่อยแค่ไหน ดีที่สุด?
              </div>

              <div className="art-footer">
                <span className="am">5 นาที</span>
                <span className="art-read">อ่านต่อ →</span>
              </div>
            </div>
          </div>

          {/* 👉 copy ac block เพิ่มได้ */}

        </div>
      </div>
    </>
  )
}