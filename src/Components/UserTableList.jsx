import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import classes from "./UserTableList.module.css";
import filterLogo from "../assets/filter-svg.png";
import arrowLogo from "../assets/chevron-right.png";
import searchLogo from "../assets/search.png";

const UserTableList = ({ dummyData }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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
      !isGenderFilterActive ||
      (femaleChecker && item.sex === "Female") ||
      (maleChecker && item.sex === "Male");

    const statusMatch =
      !isStatusFilterActive ||
      (activeChecker && item.status === "Active") ||
      (inactiveChecker && item.status === "Inactive");

    return genderMatch && statusMatch;
  });

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
              <div className={classes.filterOptions}>
                <img src={arrowLogo} alt="statusArrow" />
                <a
                  className={classes.clickGender}
                  onClick={genderOnclickHandler}
                >
                  Gender
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
            <div>
              <div className={classes.filterOptions}>
                <img src={arrowLogo} alt="statusArrow" />
                <a
                  className={classes.clickStatus}
                  onClick={statusOnclickHandler}
                >
                  Status
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
          </div>
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
        <DataTable
          value={filteredData}
          paginator
          rows={1}
          rowsPerPageOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          totalRecords={dummyData.length}
          className={classes.table}
          tableStyle={{}}
        >
          <Column className={classes.column} field="name" header="NAME" />
          <Column className={classes.column} field="status" header="Status" />
          <Column className={classes.column} field="sex" header="Sex" />
          <Column className={classes.column} field="scores" header="Score" />
          <Column className={classes.column} field="idNumber" header="ID" />
          <Column className={classes.column} field="email" header="Mail" />
          <Column
            className={classes.column}
            field="phoneNumber"
            header="Phone"
          />
          <Column className={classes.column} field="birthdate" header="Birth" />
        </DataTable>
      </div>
    </div>
  );
};

export default UserTableList;
