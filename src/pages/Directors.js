import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])




  useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then(res=>res.json())
    .then(data=>setDirectors(data))
  }, [directors.id])


  const DirectorList = directors.map(director=>{
    return(
    <>
        <article>
        <h2>{director.name}</h2>
        <ul>
          <li>{director.movies}</li>
        </ul>
        </article>
    </>
    )

  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {DirectorList}
      </main>
    </>
  );
};

export default Directors; 
