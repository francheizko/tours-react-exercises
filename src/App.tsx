import { useState } from "react";
import tours from './List'
import './App.css'

function App()  {
  const [isExpanded, setIsExpanded] = useState([false, false, false, false, false]);
  const [tour, setTour] = useState(tours);

  const toggleExpand = (index: number) => {
    const updatedExpanded = [...isExpanded];
    updatedExpanded[index] = !updatedExpanded[index];
    setIsExpanded(updatedExpanded);
  };

  function handleRemove(id: number) {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  }
  
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div className='tours'>
          {tour.map((tour, index) => (
            <article className='single-tour' key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <div className='tour-info'>
                <span className='tour-price'>{tour.price}</span>
                <h4>{tour.name}</h4>
                {isExpanded[index] ? (
                  <p className="tour-description">{tour.description}
                  <button onClick={() => toggleExpand(index)}>
                  {isExpanded[index] ? 'show less' : 'read more'}
                </button>
                  </p>
                ) : (
                  <p>{tour.description.slice(0, 200)}...
                  <button onClick={() => toggleExpand(index)}>
                  {isExpanded[index] ? 'show less' : 'read more'}
                </button>
                  </p>
                )}
                <button className='delete-btn' onClick={() => handleRemove(tour.id)}>not interested</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
