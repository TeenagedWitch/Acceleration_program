import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../user-context/user-info";
import { Navigate, useNavigate } from "react-router-dom";
import UserTableList from "../Components/UserTableList";

const dummyUsers = [
  {
    name: "John Doe",
    status: "Active",
    sex: "Male",
    scores: 95,
    idNumber: "12345",
  },
  {
    name: "Jane Smith",
    status: "Inactive",
    sex: "Female",
    scores: 80,
    idNumber: "67890",
  },
  {
    name: "Mike",
    surname: "Johnson",
    status: "Active",
    sex: "Male",
    scores: 70,
    idNumber: "13579",
  },
  {
    name: "Sarah",
    surname: "Brown",
    status: "Active",
    sex: "Female",
    scores: 88,
    idNumber: "24680",
  },
  {
    name: "David",
    surname: "Lee",
    status: "Inactive",
    sex: "Male",
    scores: 60,
    idNumber: "98765",
  },
  {
    name: "Emily",
    surname: "Wilson",
    status: "Active",
    sex: "Female",
    scores: 92,
    idNumber: "34567",
  },
  {
    name: "Michael",
    surname: "Anderson",
    status: "Active",
    sex: "Male",
    scores: 78,
    idNumber: "87654",
  },
  {
    name: "Olivia",
    surname: "Miller",
    status: "Inactive",
    sex: "Female",
    scores: 55,
    idNumber: "43210",
  },
  {
    name: "James",
    surname: "Taylor",
    status: "Active",
    sex: "Male",
    scores: 89,
    idNumber: "11223",
  },
  {
    name: "Ava",
    surname: "Martinez",
    status: "Active",
    sex: "Female",
    scores: 75,
    idNumber: "99887",
  },
  {
    name: "William",
    surname: "Harris",
    status: "Inactive",
    sex: "Male",
    scores: 68,
    idNumber: "55443",
  },
  {
    name: "Sophia",
    surname: "Clark",
    status: "Active",
    sex: "Female",
    scores: 97,
    idNumber: "22334",
  },
  {
    name: "Daniel",
    surname: "Lopez",
    status: "Active",
    sex: "Male",
    scores: 82,
    idNumber: "66778",
  },
  {
    name: "Mia",
    surname: "Adams",
    status: "Inactive",
    sex: "Female",
    scores: 73,
    idNumber: "34455",
  },
  {
    name: "Joseph",
    surname: "Perez",
    status: "Active",
    sex: "Male",
    scores: 90,
    idNumber: "88776",
  },
  {
    name: "Ella",
    surname: "Ramirez",
    status: "Active",
    sex: "Female",
    scores: 67,
    idNumber: "55444",
  },
  {
    name: "Andrew",
    surname: "Evans",
    status: "Inactive",
    sex: "Male",
    scores: 79,
    idNumber: "98765",
  },
  {
    name: "Chloe",
    surname: "Stewart",
    status: "Active",
    sex: "Female",
    scores: 85,
    idNumber: "11234",
  },
  {
    name: "David",
    surname: "Parker",
    status: "Active",
    sex: "Male",
    scores: 76,
    idNumber: "87654",
  },
  {
    name: "Abigail",
    surname: "Powell",
    status: "Inactive",
    sex: "Female",
    scores: 63,
    idNumber: "45678",
  },
  {
    name: "Matthew",
    surname: "Turner",
    status: "Active",
    sex: "Male",
    scores: 94,
    idNumber: "78901",
  },
  {
    name: "Harper",
    surname: "Roberts",
    status: "Active",
    sex: "Female",
    scores: 87,
    idNumber: "55555",
  },
  {
    name: "Ethan",
    surname: "Hill",
    status: "Inactive",
    sex: "Male",
    scores: 70,
    idNumber: "11111",
  },
  {
    name: "Liam",
    surname: "Price",
    status: "Active",
    sex: "Male",
    scores: 91,
    idNumber: "22222",
  },
  {
    name: "Mason",
    surname: "Rogers",
    status: "Active",
    sex: "Male",
    scores: 88,
    idNumber: "33333",
  },
];

const FormPage = () => {
  return <UserTableList dummyData={dummyUsers} />;
};

export default FormPage;
