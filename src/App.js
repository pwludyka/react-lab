import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [movies, setMovies] = useState([]);

    let message;
    if (title.length < 5) {
        message = <div>Tutuł jest za krótki. Nagrywają takie filmy?</div>;
    } else if (title.length < 15) {
        message = <div>Tytuł jest ekstra, w sam raz na plakat przed kinem!</div>;
    } else {
        message = <div>Tytuł jest za długi, nikt tego nie zapamięta.</div>;
    }

    function handleChange(event) {
        setTitle(event.target.value);
    }
    function handleChangeYear(event) {
        setYear(event.target.value);
    }
    function handleAddMovie(event) {
        const movie = {title: title, year: year};
        setMovies([...movies, movie]);
        setTitle('')
        setYear('')
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <h2>Titles</h2>
            <ul>
                {movies.map(movie => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
            </ul>
            <h2>Add movie</h2>
            <label>Tytuł</label>
            <input type="text" value={title} onChange={handleChange}/>
            {title.length > 0 && <div>{message}</div>}

            <label>Rok nagrania</label>
            <input type="text" value={year} onChange={handleChangeYear}/>
            <button onClick={handleAddMovie}>Dodaj Film</button>
        </div>
    );
}

export default App;
