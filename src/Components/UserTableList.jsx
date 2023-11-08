import React, { useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import classes from "./UserTableList.module.css";
import filterLogo from "../assets/filter-svg.png";
import arrowLogo from "../assets/chevron-right.png";
import searchLogo from "../assets/search.png";
import Pagination from "./Pagination";

import DataTable from "./DataTable";

const UserTableList = ({ dummyData }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const [femaleChecker, setFemaleChecker] = useState(true);
  const [maleChecker, setMaleChecker] = useState(true);
  const [activeChecker, setActiveChecker] = useState(true);
  const [inactiveChecker, setInactiveChecker] = useState(true);
  const [showGender, setShowGender] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const isGenderFilterActive = femaleChecker || maleChecker;

  const isStatusFilterActive = activeChecker || inactiveChecker;

  const filteredData = dummyData.filter((item) => {
    const genderMatch =
      (!femaleChecker && !maleChecker) ||
      (femaleChecker && item.sex === "Female") ||
      (maleChecker && item.sex === "Male");

    const statusMatch =
      (!activeChecker && !inactiveChecker) ||
      (activeChecker && item.status === "Active") ||
      (inactiveChecker && item.status === "Inactive");

    return genderMatch && statusMatch;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  const totalRecords = filteredData.length;

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const visibleData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleFemaleCheck = () => {
    setFemaleChecker(!femaleChecker);
  };
  const handleMaleCheck = () => {
    setMaleChecker(!maleChecker);
  };
  const handleActiveCheck = () => {
    setActiveChecker(!activeChecker);
    console.log(activeChecker);
  };
  const handleInactiveCheck = () => {
    setInactiveChecker(!inactiveChecker);
  };

  const filterVisibilityHandler = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const genderOnclickHandler = () => {
    setShowGender(!showGender);
    if (showStatus) setShowStatus(!showStatus);
  };
  const statusOnclickHandler = () => {
    setShowStatus(!showStatus);
    if (showGender) setShowGender(!showGender);
  };

  return (
    <div className={classes.formContentContainer}>
      <div className={classes.formSideMenu}>
        <div
          className={`${
            isFilterVisible ? classes.filter : classes.filterDisabled
          }`}
        >
          {/* FILTERING SIDEBAR */}
          <div className={classes.filterContainer}>
            <div>
              <div>
                <div className={classes.filterOptions}>
                  <img src={arrowLogo} alt="statusArrow" />
                  <a
                    className={classes.clickStatus}
                    onClick={statusOnclickHandler}
                  >
                    სტუდენტის სტატუსი
                  </a>
                </div>

                <div
                  className={`${
                    showStatus ? classes.statusFilter : classes.statusFilterDis
                  }`}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={activeChecker}
                      onChange={handleActiveCheck}
                    />
                    Active
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={inactiveChecker}
                      onChange={handleInactiveCheck}
                    />
                    Inactive
                  </label>
                </div>
              </div>
              <div className={classes.filterOptions}>
                <img src={arrowLogo} alt="statusArrow" />
                <a
                  className={classes.clickGender}
                  onClick={genderOnclickHandler}
                >
                  სქესი
                </a>
              </div>
              <div
                className={`${
                  showGender ? classes.genderFilter : classes.genderFilterDis
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={femaleChecker}
                    onChange={handleFemaleCheck}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={maleChecker}
                    onChange={handleMaleCheck}
                  />
                  Male
                </label>
              </div>
            </div>
          </div>
          {/* END OF SIDEBAR */}
        </div>
      </div>
      <div className={classes.formMainContent}>
        <div className={classes.tableConfigurator}>
          <button
            className={classes.filterButton}
            onClick={filterVisibilityHandler}
          >
            <img src={filterLogo} className={classes.filterLogo} alt="" />
            <p>filter</p>
          </button>
          <div>
            <img src={searchLogo} alt="" className={classes.searchLogo} />
            <input
              type="text"
              className={classes.searchInput}
              placeholder="search"
            />
          </div>
        </div>
        <DataTable data={visibleData} />
        <div className={classes.tablePagination}>
          <Pagination
            totalPosts={totalRecords}
            postsPerPage={rowsPerPage}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTableList;
