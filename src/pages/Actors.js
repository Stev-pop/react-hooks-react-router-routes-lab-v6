import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
const [actors, setActors] = useState([]);


useEffect(()=>{
  fetch("http://localhost:4000/actors")
  .then(res => res.json())
  .then(data=>setActors(data))
}, [actors.id])

const actorsList = actors.map(actor =>{
  return(
    <article>
    <h2>{actor.name}</h2>
    <ul>
      <li>{actor.movies}</li>
    </ul>
  </article>

  )
  
})



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
 