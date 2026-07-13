import objectiveImage from './assets/cappucino.jpg'
import './App.css'

function App() {
  return (
	<main className="page">
	  <section className="card">
		<img
		  src={objectiveImage}
		  className="card-image"
		/>
		<h1 className="card-title">Cappuccino cremoso</h1>
		<p className="card-subtitle">
		  Aprenda a fazer cappucino cremoso em casa com esta receita.
		</p>
		<button type="button" className="card-button">
		  Receita!!
		</button>
	  </section>
	</main>
  )
}

export default App
