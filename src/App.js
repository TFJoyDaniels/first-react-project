import './App.css';
import Testimonio from './Components/Testimonios'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          img='shawn'
          name='Shawn Wang'
          country='Singapur'
          profession='Ingeniero de Software'
          enterprise='Amazon'
          testimony='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis dolores ab, possimus veritatis doloribus molestias assumenda amet soluta quisquam mollitia pariatur libero nobis eligendi nulla atque quo beatae nemo?'
        />
        <Testimonio 
          img='emma'
          name='Emma Bostian'
          country='Suecia'
          profession='Ingeniera de Software'
          enterprise='Spotify'
          testimony='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos,pero el curso de freeCodeCamp fue el que se quedo. Estudiar JavaScript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesita para conseguir el trabajo como ingeniero de software en Spotify'
        />
        <Testimonio
          img='sarah'
          name='Sarah Chima'
          country='Nigeria'
          profession='Ingeniera de Software'
          enterprise='ChatDesk'
          testimony='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis dolores ab, possimus veritatis doloribus molestias assumenda amet soluta quisquam mollitia pariatur libero nobis eligendi nulla atque quo beatae nemo?'
        />
      </div>
    </div>
  );
}

export default App;
