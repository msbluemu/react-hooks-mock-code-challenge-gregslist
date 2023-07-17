import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const {id, description, image, location } = listing;

  const[likeButton, setLikeButton] = useState(false);

  function handleLikeButton(){
    setLikeButton(!likeButton);
  }

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteListing(listing))
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {likeButton ? (
          <button className="emoji-button favorite active" onClick={handleLikeButton}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLikeButton}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
