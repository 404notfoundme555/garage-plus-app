import Header from '@/components/Header'
import ArticleSection from '@/components/ArticleSection'
import HistorySection from '@/components/HistorySection'
export default function HomePage() {
  return (
    <div className='sc'>
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