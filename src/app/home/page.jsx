import Header from '@/components/layout/Header'
import ArticleSection from '@/components/sections/ArticleSection'
import HistorySection from '@/components/sections/HistorySection'
export default function HomePage() {
  return (
    <div>
      {/* className='sc' */}
      <Header/>
        <div className="car-switch">
          <div className="csw on"></div>
          <div className="csw"></div>
        </div>
      <ArticleSection/>
      <HistorySection/>
    </div>
  )
}