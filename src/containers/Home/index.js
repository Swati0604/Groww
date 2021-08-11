import React, { useEffect, useState } from "react";
import axios from "axios";

//Custom Component
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import BankList from "../../components/BankList";

//Styles
import "./styles.scss";
import Pagination from "../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { allBank } from "../../redux/action";

const location = [
  {
    id: 0,
    title: "Mumbai",
  },
  {
    id: 1,
    title: "Bangalore",
  },
  {
    id: 2,
    title: "Delhi",
  },
  {
    id: 3,
    title: "Hyderabad",
  },
  {
    id: 4,
    title: "Gurgaon",
  },
];

const category = [
  {
    id: 0,
    title: "IFSC",
  },
  {
    id: 1,
    title: "Branch",
  },
  {
    id: 2,
    title: "Bank Id",
  },
  {
    id: 3,
    title: "Address",
  },
];

function Home(props) {
  const [selectedCity, setSelectedCity] = useState("MUMBAI");
  const [cityListOpen, setCityListOpen] = useState(false);
  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bankDataPerPage] = useState(10);
  const pageNumberLimit = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);

  const dispatch = useDispatch();

  const bankData = useSelector((state)=> state.allBank.allBank);

  const toggleCityList = () => {
    setCityListOpen(!cityListOpen);
  };

  const toggleCategoryList = () => {
    setCategoryListOpen(!categoryListOpen);
  };

  const selectNewCity = (index) => {
    const temp = location[index];
    setSelectedCity(temp.title);
    toggleCityList();
  };

  const selectCategory = (index) => {
    const temp = category[index];
    setSelectedCategory(temp.title);
    toggleCategoryList();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchBankData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity.toUpperCase()}`
      );
      
      dispatch(allBank(res.data));
      setLoading(false);
    };

    fetchBankData();
  }, [selectedCity]);

  const indexOfLastBank = currentPage * bankDataPerPage;
  const indexOfFirstBank = indexOfLastBank - bankDataPerPage;

  const filteredBankData = bankData.filter((data) => {
    if(selectedCategory==='Bank Id'){
      if (value === "") {
      return data;
    } else if (data.bank_id.toString().includes(value)) {
      return data;
    }}else if(selectedCategory==='IFSC'){
      if (value === "") {
        return data;
      } else if (data.ifsc.toString().includes(value)) {
        return data;
      }
    }
    else if(selectedCategory==='Branch'){
      if (value === "") {
        return data;
      } else if (data.branch.toString().includes(value)) {
        return data;
      }
    }
    else if(selectedCategory==='Address'){
      if (value === "") {
        return data;
      } else if (data.address.toString().includes(value)) {
        return data;
      }
    }
    else{
      return data;
    }
  });

  const currentBank = filteredBankData.slice(indexOfFirstBank, indexOfLastBank);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };


  const handleNextBtn = () => {
    setCurrentPage(currentPage+1);

    if(currentPage+1> maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  const handlePrevBtn = () => {
    if(currentPage>1){
    setCurrentPage(currentPage-1);
    }

    
    if(currentPage> 1 && ((currentPage - 1)%pageNumberLimit === 0)){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    
    }
  }


  return (
    <div className="home-style">
      <Sidebar currentPage="All Banks">
        <Header
          pageName="All Banks"
          city={location}
          toggleCityList={toggleCityList}
          cityListOpen={cityListOpen}
          selectedCity={selectedCity}
          citySelected={selectNewCity}
          category={category}
          toggleCategoryList={toggleCategoryList}
          categoryListOpen={categoryListOpen}
          selectedCategory={selectedCategory}
          categorySelected={selectCategory}
          handleChange={handleChange}
          value={value}
        />
        <BankList
          bankData={currentBank}
          loading={loading}
          selectedCategory={selectedCategory}
          searchInput={value}
        />

        {currentBank.length === 0 ? (
          ""
        ) : (
          <Pagination
            banksPerPage={bankDataPerPage}
            totalBanks={filteredBankData.length}
            paginate={paginate}
            minPageNumberLimit={minPageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            handleNextBtn={handleNextBtn}
            handlePrevBtn={handlePrevBtn}
          />
        )}
      </Sidebar>
    </div>
  );
}

export default Home;
