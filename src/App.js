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
  

  return (
    <div>
      <h1>My favourite movies to watch</h1>
      <h2>My favourite movie for today is {title} </h2>
      {
        title.length > 0 && <div>{message}</div>
      }
      <input type="text" onChange={handleChange}/>
    </div>
  
  );
}

export default App;
