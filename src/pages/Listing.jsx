import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebace.config";
import Spinner from "../Components/Spinner";
import shareIcon from "../assets/svg/shareIcon.svg";

const Listing = () => {

   const [listing, setListing] = useState(null);
   const [loading, setLoading] = useState(true);
   const [shareLinkCopied, setShareLinkCopied] = useState(false);

   const navigate = useNavigate();
   const params = useParams();
   const auth = getAuth();

    useEffect(() => {
      const fetchListing = async () => {
        const docRef = doc(db, "listings", params.listingId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setListing(docSnap.data());
          setLoading(false);
        }
      };

      fetchListing();
    }, [navigate, params.listingId]);

  return <div>LISTING</div>;
};

export default Listing;
