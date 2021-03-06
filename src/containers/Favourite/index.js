import React, { useState } from "react";

//Custom Component
import Sidebar from "../../components/SideBar";
import Header from "../../components/Header";
import BankList from "../../components/BankList";

//Styles
import "./styles.scss";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";

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

function Favourite(props) {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityListOpen, setCityListOpen] = useState(false);
  const [categoryListOpen, setCategoryListOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [bankDataPerPage] = useState(10);

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

  const favBankData = useSelector((state) => state.favBank.favBank);
  const indexOfLastBank = currentPage * bankDataPerPage;
  const indexOfFirstBank = indexOfLastBank - bankDataPerPage;

  console.log("State", selectedCity.toUpperCase());

  const filteredBankData = favBankData.filter((data) => {
    if (selectedCategory === "Bank Id" && !selectedCity) {
      if (value === "") {
        return data;
      } else if (data.bank_id.toString().includes(value)) {
        return data;
      }
    } else if (selectedCategory === "IFSC" && !selectedCity) {
      if (value === "") {
        return data;
      } else if (data.ifsc.toString().includes(value)) {
        return data;
      }
    } else if (selectedCategory === "Branch"  && !selectedCity) {
      if (value === "") {
        return data;
      } else if (data.branch.toString().includes(value)) {
        return data;
      }
    } else if (selectedCategory === "Address"  && !selectedCity) {
      if (value === "") {
        return data;
      } else if (data.address.toString().includes(value)) {
        return data;
      }
    } else if (selectedCity) {
      if (selectedCategory === "Bank Id") {
        if (value === "") {
          return data.city.toString() === selectedCity.toUpperCase();
        } else if (data.bank_id.toString().includes(value)) {
          return data.city.toString() === selectedCity.toUpperCase();
        }
      } else if (selectedCategory === "IFSC") {
        if (value === "") {
          return data.city.toString() === selectedCity.toUpperCase();;
        } else if (data.ifsc.toString().includes(value)) {
          return data.city.toString() === selectedCity.toUpperCase();;
        }
      } else if (selectedCategory === "Branch") {
        if (value === "") {
          return data.city.toString() === selectedCity.toUpperCase();;
        } else if (data.branch.toString().includes(value)) {
          return data.city.toString() === selectedCity.toUpperCase();;
        }
      } else if (selectedCategory === "Address") {
        if (value === "") {
          return data.city.toString() === selectedCity.toUpperCase();;
        } else if (data.address.toString().includes(value)) {
          return data.city.toString() === selectedCity.toUpperCase();;
        }
      }
      else{
      return data.city.toString() === selectedCity.toUpperCase();
      }
    }  
    else {
      return data;
    }
  });

  const currentBank = filteredBankData.slice(indexOfFirstBank, indexOfLastBank);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className="favourite-style">
      <Sidebar currentPage="Favourite">
        <Header
          pageName="Favourite Banks"
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
          />
        )}
      </Sidebar>
    </div>
  );
}

export default Favourite;
