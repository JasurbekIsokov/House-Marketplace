import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebace.config";
import Spinner from "../Components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

const Listing = () => {
  return <div>LISTING</div>;
};

export default Listing;
