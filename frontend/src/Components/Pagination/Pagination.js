import { useHistory } from "react-router-dom";

function Pagination() {
  const history = useHistory();

  const goForward = () => {
    history.goForward();
  }

  const goBack = () => {
    history.goBack();
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <button onClick={goBack} type="button" className="btn mx-2 btn-primary">Back</button>
      <button onClick={goForward} type="button" className="btn mx-2 btn-danger">Forward</button>
    </div>
  )
}

export default Pagination;
