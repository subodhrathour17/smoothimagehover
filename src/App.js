import './App.css';
import { xyz } from './image';

function App() {
  return (
    <span className='background'>
      <section className="gallery">
        <article className='card'>
          <figure>
            <img src={xyz} alt="" />
          </figure>
        </article>
        <article className='card'>
          <figure>
            <img src={xyz} alt="" />
          </figure>
        </article>
        <article className='card'>
          <figure>
            <img src={xyz} alt="" />
          </figure>
        </article>
      </section>
    </span>
  );
}

export default App;
