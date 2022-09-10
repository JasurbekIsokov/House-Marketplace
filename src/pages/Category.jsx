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
  getDocs,
} from "firebase/firestore";
import { db } from "../firebace.config";
import { toast } from "react-toastify";
import Spinner from "../Components/Spinner";

const Category = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc.data());
          console.log(1);
        });
      } catch (error) {}
    };

    fetchListings();
  });

  return (
    <div>
      <h1>Category</h1>
    </div>
  );
};

export default Category;
