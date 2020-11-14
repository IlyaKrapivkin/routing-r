import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from '../Loader/Loader';

function User() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    let timeOutID;

    fetch(`${process.env.REACT_APP_URL}/server2/${id}`)
    .then(res => res.json())
    .then(data => {
      setUser(data);
      timeOutID = setTimeout(() => {
        history.push('/');
      }, 3000);
    });

    return () => {
      clearTimeout(timeOutID);
    }
  }, []);

  return(
    <>
    {
      user.name ?  <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.id}</h6>
          <p className="card-text">{user.phone}</p>
        </div>
      </div> : <Loader/>
    }
    </>
  )
}

export default User;

// AFTERCODE:

//  <div className="card" style={{width: '18rem'}}>
// <div className="card-body">
//   <h5 className="card-title">{user.name}</h5>
//   <h6 className="card-subtitle mb-2 text-muted">{user.id}</h6>
//   <p className="card-text">{user.phone}</p>
// </div>
// </div>

// user ? (
//   <div className="card" style={{width: '18rem'}}>
//     <div className="card-body">
//       <h5 className="card-title">{user.name}</h5>
//       <h6 className="card-subtitle mb-2 text-muted">{user.id}</h6>
//       <p className="card-text">{user.phone}</p>
//     </div>
//   </div>
// ) : <h1>no such user!</h1>
