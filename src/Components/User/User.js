import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return(
  <div className="card" style={{width: '18rem'}}>
    <div className="card-body">
      <h5 className="card-title">Name</h5>
      <h6 className="card-subtitle mb-2 text-muted">ID: {id}</h6>
      <p className="card-text">097076668878766</p>
    </div>
  </div>
  )
}

export default User;
