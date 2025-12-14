import {useState} from "react";

function App() {
  const [title, setTitle] = useState('');
  
  function handleChange(event) {
    setTitle(event.target.value);
  }  
  
  let message = "";
  if (title.length < 5) {
    message = 'Title is too short';
  } else if (title.length < 15) {
    message = 'Title is extra';
  } else { 
    message = 'Title is too long';
  }

  const movies = [

    {title: "Wall-E"},

    {title: "Pulp Fiction"},

    {title: "Matrix"},

    {title: "1670"},

  ];
  
  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>Titles</h2>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}

      </ul>
      <h2>My favourite movie for today is {title} </h2>
      {
        title.length > 0 && <div>{message}</div>
      }
      <input type="text" onChange={handleChange}/>
      <button onClick={() => alert(title)}>Pokaż tytuł filmu</button>
    </div>
  
  );
}

export default App;
