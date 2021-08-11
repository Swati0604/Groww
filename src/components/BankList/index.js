import { Link } from "react-router-dom";

//Custom Component
import NotFound from "../NotFound";
import Loader from "../Loader";

//Styles
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../../redux/action";

function BankList(props) {
  const dispatch = useDispatch();
  const favBank = useSelector((state) => state.favBank.favBank);
  const favPresentIfsc = favBank.map((fav) => fav.ifsc);
  const addToFav = (data) => {
    const newList = [...favBank, data];
    dispatch(addToFavourites(newList));
  };
  const removeFromFav = (data) => {
    const newList = [];
    for(let i=0; i<favPresentIfsc.length; i++){
      if(favPresentIfsc[i]!==data.ifsc){
         newList.push(favBank[i]);
      }
    }
    dispatch(addToFavourites(newList));
    
  };

  if (props.loading) {
    return <Loader />;
  }

  return (
    <>
      {props.bankData.length === 0 ? (
        <NotFound
          title="Oopsie! Something’s missing..."
          subTitle="What you’re looking for maye have been replaces in long term memory."
        />
      ) : (
        <div className="bank-list-style">
          <div className="bank-list-container">
            <div className="list name">Bank</div>
            <div className="list ifsc">IFSC</div>
            <div className="list branch">Branch</div>
            <div className="list id">Bank Id</div>
            <div className="list address">Address</div>
            <div className="list favourite">Favourite</div>
          </div>
          {props.bankData &&
            props.bankData.map((data, index) => (
              <div className="bank-list-container list-cont">
                <Link
                  className="link-list-container"
                  to={`/bank-details/${data.ifsc}`}
                  key={index}
                >
                  <div className="list-entry name">{data.bank_name}</div>
                  <div className="list-entry ifsc">{data.ifsc}</div>
                  <div className="list-entry branch">{data.branch}</div>
                  <div className="list-entry id">{data.bank_id}</div>
                  <div className="list-entry address">{data.address}</div>
                </Link>
                {favPresentIfsc.includes(data.ifsc) === false ? (
                  <div className="list-entry favourite">
                    <button className="fav" onClick={() => addToFav(data)}>
                      Add
                    </button>
                  </div>
                ) : (
                  <div className="list-entry favourite">
                    <button
                      className="fav already-added"
                      onClick={() => removeFromFav(data)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default BankList;
