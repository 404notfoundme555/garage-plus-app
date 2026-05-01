'use client'
import { useState, useEffect } from 'react'
import DashboardShell from '@/components/staff/DashboardShell'
import Link from 'next/link'
import { getAllArticles, updateArticle, deleteArticle } from '@/lib/firebase/firestore'

export default function StaffArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading,  setLoading]  = useState(true)
  const [filter,   setFilter]   = useState('all')

  useEffect(() => {
    getAllArticles().then(setArticles).catch(console.error).finally(()=>setLoading(false))
  }, [])

  const togglePublish = async (id, current) => {
    await updateArticle(id, { published: !current })
    setArticles(prev => prev.map(a => a.id===id ? {...a, published:!a.published} : a))
  }
  const handleDelete = async (id) => {
    if (!confirm('ลบบทความนี้?')) return
    await deleteArticle(id)
    setArticles(prev => prev.filter(a => a.id!==id))
  }

  const shown = filter==='all' ? articles : articles.filter(a => a.type===filter)

  return (
    <DashboardShell requiredRole="admin">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-syne text-xl font-bold text-t1">จัดการบทความ</h1>
        <Link href="/staff/articles/new"><button className="px-4 py-2 rounded-full text-xs font-bold text-white border-none cursor-pointer" style={{ background:'var(--acc)' }}>+ เพิ่มบทความ / URL</button></Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label:'ทั้งหมด', value:articles.length, color:'var(--t1)' },
          { label:'External (ลิงก์)', value:articles.filter(a=>a.type==='external').length, color:'var(--blue)' },
          { label:'Internal (เขียนเอง)', value:articles.filter(a=>a.type==='internal').length, color:'var(--acc)' },
        ].map(s=>(
          <div key={s.label} className="card p-4 text-center">
            <div className="text-t2 text-xs mb-1">{s.label}</div>
            <div className="font-syne text-2xl font-extrabold" style={{ color:s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-4">
        {[{k:'all',l:'ทั้งหมด'},{k:'external',l:'🔗 External'},{k:'internal',l:'📝 Internal'}].map(f=>(
          <button key={f.k} onClick={()=>setFilter(f.k)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold border-none cursor-pointer"
            style={{ background:filter===f.k?'var(--acc)':'var(--surf)', color:filter===f.k?'#fff':'var(--t2)', border:`0.5px solid ${filter===f.k?'var(--acc)':'var(--brd2)'}` }}>
            {f.l}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center pt-10"><span className="inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor:'var(--acc)',borderTopColor:'transparent' }}/></div>
      ) : (
        <div className="card overflow-hidden">
          {shown.length === 0 && <div className="p-10 text-center text-t2 text-sm">ยังไม่มีบทความ</div>}
          {shown.map((a,i) => (
            <div key={a.id} className="flex items-center gap-4 px-4 py-3.5" style={{ borderBottom:i<shown.length-1?'0.5px solid var(--brd)':'none' }}>
              {/* Thumb */}
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0" style={{ background:'var(--s2)' }}>
                {a.thumbnailUrl
                  ? <img src={a.thumbnailUrl} alt="" style={{ width:'100%',height:'100%',objectFit:'cover' }} onError={e=>e.target.style.display='none'} />
                  : <div className="flex items-center justify-center h-full text-xl">{a.icon||'📄'}</div>}
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background:a.type==='external'?'var(--bldim)':'var(--adim)', color:a.type==='external'?'var(--blue)':'var(--acc)', border:`0.5px solid ${a.type==='external'?'rgba(24,95,165,.28)':'var(--abrd)'}`, fontSize:9 }}>
                    {a.type==='external'?'🔗 External':'📝 Internal'}
                  </span>
                  <span className="text-t3 text-xs">{a.category}</span>
                  <span className="text-t3 text-xs">· {a.reads||0} อ่าน</span>
                </div>
                <p className="text-sm font-semibold text-t1 truncate">{a.title}</p>
                {a.sourceName && <p className="text-xs text-t3 mt-0.5">แหล่งที่มา: {a.sourceName}</p>}
              </div>
              {/* Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={()=>togglePublish(a.id,a.published)}
                  className="text-xs font-bold px-2.5 py-1 rounded-full cursor-pointer border-none"
                  style={{ background:a.published?'var(--gdim)':'var(--s2)', color:a.published?'var(--grn)':'var(--t2)' }}>
                  {a.published?'เผยแพร่':'ซ่อน'}
                </button>
                <Link href={`/articles/${a.id}`}>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-xs cursor-pointer border-none bg-bldim text-blue">✏️</button>
                </Link>
                <button onClick={()=>handleDelete(a.id)} className="w-7 h-7 rounded-lg flex items-center justify-center text-xs cursor-pointer border-none bg-errdim text-err">🗑</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardShell>
  )
}
