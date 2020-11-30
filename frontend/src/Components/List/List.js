import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/server2`)
    .then(res => res.json())
    .then(data => setList(data));
  }, []);

  // useEffect(() => {
  //   (async() => {
  //     let response = await fetch('http://localhost:3000/server2');
  //     let data = await response.json();
  //     setList(data);
  //   })();
  // }, []);

  return(
    <ul className="list-group">
      {list.length ? list.map(el => {
        return (
          <li key={el.id} className="list-group-item">
            <Link to={`/server2/${el.id}`}>{el.name}</Link>
          </li>
        )
      }) : (<li className="list-group-item">no users</li>)}
    </ul>
  )
}

export default List;
