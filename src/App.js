import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(true);
  const [user, setuser] = useState("iron man");

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?t=${user}&apikey=b144f9da`)
      .then((res) => res.json())
      .then((jsondata) => {
        setdata(jsondata);
        setload(false);
      })
      .catch((error) => console.error("Fetching API IS showing Error ", error));
  }, [user]);
  if (load) {
    return <h1>Loading....</h1>;
  }

  const submit = (e) => {
    setuser(e.target.value);
    e.preventDefault();
  };

  return (
    <>
    <h1 className="nav">Movie Information </h1>
      <div className="inp">
        
        <input
          name="user"
          type="text"
          value={user}
          onChange={(e) => setuser(e.target.value)}
          placeholder="Movie Name"
        ></input>
        <button type="submit" onSubmit={submit}>
          Search
        </button>
      </div>
      <div className="main">
      <img src={data.Poster} className="img" alt="image"></img>
      <div className="tx">
        <h1>Titel : {data.Title}</h1>
        <h1>Type : {data.Type}</h1>
        <h1>Genre = {data.Genre}</h1>
        <h1>Actors = {data.Actors}</h1>
        <h1>IMDB Rating : {data.imdbRating}</h1>
        <h1>BoxOffice = {data.BoxOffice}</h1>
      </div>
        
      </div>
    </>
  );
}

export default App;
