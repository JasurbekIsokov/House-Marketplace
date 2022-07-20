import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebace.config";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const Category = () => {
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
};

export default Category;
