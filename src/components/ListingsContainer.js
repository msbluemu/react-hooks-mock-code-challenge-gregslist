import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({filter}) {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
     .then((r) => r.json())
     .then((data) => {
       setListings(data)
     });
  }, []);

  useEffect(() => {
    if (filter) {
      const filtered = listings.filter((listing) =>
        listing.description.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredListings(filtered);
    } else {
      setFilteredListings(listings);
    }
  }, [filter, listings]);

  function handleDeleteListing(deletedListing){
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
