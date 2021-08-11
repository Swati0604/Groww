import { useState } from "react";
import { Link } from "react-router-dom";

//Custom Component
import NotFound from "../NotFound";
import Loader from "../Loader";

//Images
import loader from "../../assets/loader.gif";

//Styles
import "./styles.scss";

function BankList(props) {
  var fav = [];
  const addToFavourites = (data) => {
    fav.push(data);

    localStorage.setItem("fav", JSON.stringify(fav));
    console.log(fav);
  };

  if (props.loading) {
    return (
      <Loader />
    );
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
              <Link
                className="bank-list-container list-cont"
                to={`/bank-details/${data.ifsc}`}
                key={index}
              >
                <div className="list-entry name">{data.bank_name}</div>
                <div className="list-entry ifsc">{data.ifsc}</div>
                <div className="list-entry branch">{data.branch}</div>
                <div className="list-entry id">{data.bank_id}</div>
                <div className="list-entry address">{data.address}</div>
                <div className="list-entry favourite">
                      <button
                        className="fav"
                        onClick={() => {
                          addToFavourites(data);
                          console.log(data.bank_id);
                        }}
                      >
                        Add
                      </button>
                    </div>
                {/* {JSON.parse(localStorage.getItem("fav"))== null &&
                  localStorage.getItem("fav").includes(data.ifsc) === false && (
                    <div className="list-entry favourite">
                      <button
                        className="fav"
                        onClick={() => {
                          addToFavourites(data);
                          console.log(data.bank_id);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  )}

                {localStorage.getItem("fav") !== null &&
                  localStorage.getItem("fav").includes(data.ifsc) === true && (
                    <div className="list-entry favourite">
                      <button
                        className="fav already-added"
                        onClick={() => {
                          addToFavourites(data);
                          console.log(data.bank_id);
                        }}
                      >
                        Added
                      </button>
                    </div>
                  )} */}
              </Link>
            ))}
        </div>
      )}
      {console.log()}
    </>
  );
}

export default BankList;
