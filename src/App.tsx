import './App.css'
import './index.css'

function App() {

  return ( 
    <main>
      <title>Tours</title>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div className='tours'>
          <article className='single-tour'>
            <img src='https://www.course-api.com/images/tours/tour-1.jpeg' alt="Best of Paris in 7 Days Tour"></img>
            <div className='tour-info'>
              <span className='tour-price'>$ 1,995</span>
              <h4>Best of Paris in 7 Days Tour</h4>
              <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
              <button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </div>
          </article>
            <article className='single-tour'>
              <img src='https://www.course-api.com/images/tours/tour-2.jpeg' alt="Best of Ireland in 14 Days Tour"></img>
              <div className='tour-info'>
                <span className='tour-price'>$ 3,895</span>
                <h4>Best of Ireland in 14 Days Tour</h4>
                <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...
                <button>read more</button>
                </p>
                <button className='delete-btn'>not interested</button>
              </div>
            </article>
              <article className='single-tour'>
                <img src='https://www.course-api.com/images/tours/tour-3.jpeg' alt="Best of Salzbug & Vienna in 8 Days Tour"></img>
                <div className='tour-info'>
                  <span className='tour-price'>$ 1,995</span>
                  <h4>Best of Salzbug & Vienna in 8 Days Tour</h4>
                  <p>Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the D...
                  <button>read more</button>
                  </p>
                  <button className='delete-btn'>not interested</button>
                </div>
              </article>
                  <article className='single-tour'>
                <img src='https://www.course-api.com/images/tours/tour-4.jpeg' alt="Best of Rome in 7 Days Tour"></img>
                <div className='tour-info'>
                  <span className='tour-price'>$ 2,095</span>
                  <h4>Best of Rome in 7 Days Tour</h4>
                  <p>Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient ...
                  <button>read more</button>
                  </p>
                  <button className='delete-btn'>not interested</button>
                </div>
              </article>
              <article className='single-tour'>
                <img src='https://www.course-api.com/images/tours/tour-5.jpeg' alt="Best of Poland in 10 Days Tour"></img>
                <div className='tour-info'>
                  <span className='tour-price'>$ 2,095</span>
                  <h4>Best of Poland in 10 Days Tour</h4>
                  <p>Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, y...
                  <button>read more</button>
                  </p>
                  <button className='delete-btn'>not interested</button>
                </div>
              </article>
        </div>
      </section>

    </main>
   
  )
}

export default App
