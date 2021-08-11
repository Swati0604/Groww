//Images
import loader from "../../assets/loader.gif";


function Loader(props) {
  return (
    <div className="loading-container">
        <img src={loader} className="loader" alt="loader" />
        <p className="loader-text">Loading ...</p>
      </div>
  );
}

export default Loader;