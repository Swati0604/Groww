import axios from "axios";
import React, { useState, useEffect } from "react";

//Custom Component
import Sidebar from "../../components/SideBar";
import Loader from "../../components/Loader";

// Style
import "./styles.scss";

function BankDetail(props) {
  const [bankData, setBankData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBankData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`
      );
      setBankData(res.data);
      setLoading(false);
    };

    fetchBankData();
  }, []);

  const ifscCode = props.match.params.ifsc;

  return (
    <div className="bank-detail-style">
      <Sidebar currentPage="All Banks">
      <h4 className='heading'>Bank Details</h4>
        {loading ? (
          <Loader />
        ) : (
          <>
            {bankData &&
              bankData
                .filter((data) => data.ifsc === ifscCode)
                .map((data) => (
                  <div key={data.ifsc} className="bank-detail-container">
                    <div className="bank-detail name">
                      <span className="heading">Bank Name:</span>{" "}
                      {data.bank_name}
                    </div>
                    <div className="bank-detail ifsc">
                      <span className="heading">IFSC:</span> {data.ifsc}
                    </div>
                    <div className="bank-detail branch">
                      <span className="heading">Branch:</span> {data.branch}
                    </div>
                    <div className="bank-detail id">
                      <span className="heading">Bank ID:</span> {data.bank_id}
                    </div>
                    <div className="bank-detail city">
                      <span className="heading">Bank City:</span> {data.city}
                    </div>
                    <div className="bank-detail city">
                      <span className="heading">Bank District:</span>{" "}
                      {data.district}
                    </div>
                    <div className="bank-detail city">
                      <span className="heading">Bank State:</span>{" "}
                      {data.state}
                    </div>
                    <div className="bank-detail address">
                      <span className="heading">Bank Address:</span>{" "}
                      {data.address}
                    </div>
                  </div>
                ))}
          </>
        )}
      </Sidebar>
    </div>
  );
}

export default BankDetail;
