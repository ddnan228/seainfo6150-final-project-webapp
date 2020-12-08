import React, { useState } from "react";
import css from "./Form.module.css"
import { Link } from "react-router-dom";

const Form = () => {
  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div className={css.divStyle}>
      {
        submittedForm ? (
          <div>
            <p>Here are the details of your review.</p>
            Your preferred name is <b>{submittedForm.get("name")}</b>.<br />
            Your email address is <b>{submittedForm.get("email")}</b>.<br />
            Your phone number is <b>{submittedForm.get("phone")}</b>.<br />
            Your family has <b>{submittedForm.get("kidsNum")}</b> kid/kids.<br />
            You purchase <b>{submittedForm.get("booksNum")}</b> book/books for your kid/kids every month.<br />
            The gender of your kid/kids is/are <b>{submittedForm.get("kidsGender")}</b>.<br />
            You are still having this book in your family?  <b>{submittedForm.get("havingBook")}</b><br />
            Where did you read this book? <b>{submittedForm.get("place")}</b><br />
            Your review about with book.<br />
            <b>{submittedForm.get("review")}</b><br /> <br />
            <Link to="/thankyou">
              <button type="button">Submit</button>
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <label htmlFor="nameId">Your preferred name (required):</label><br />
            <input type="text" name="name" id="nameId" required /><br />

            <label htmlFor="emailId">Your email (required):</label><br />
            <input type="email" name="email" id="emailId" placeholder="doudou@example.com" required /><br />

            <label htmlFor="phoneId">Your phone number (required):</label><br />
            <input type="tel" name="phone" id="phoneId" placeholder="123-45-678" placeholder="123-45-678" required /><br />

            <label htmlFor="kidsNumId">How many kids in your family?</label><br />
            <input type="number" min="0" name="kidsNum" id="kidsNumId"/><br />

            <label htmlFor="booksNumId">How many books do you purchase for your kids every month?</label><br />
            <input type="number" min="0" name="booksNum" id="booksNumId"/><br />

            <label htmlFor="kidsGenderId">What is/are the gender of your kid/kids?</label><br />
            <select name="kidsGender" id="kidsGenderId">
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
              <option value="both">Both</option>
              <option value="No kid">No kid</option>
            </select><br />

            <label htmlFor="havingBookId">Are you still having this book in your family?</label><br />
            <select name="havingBook" id="havingBookId">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select><br />

            Where did you read this book?<br />
            <input type="radio" id="placeId1" name="place" value="home" />
            <label htmlFor="placeId1">Home</label><br />
            <input type="radio" id="placeId2" name="place" value="library" />
            <label htmlFor="placeId2">Library</label><br />
            <input type="radio" id="placeId3" name="place" value="school" />
            <label htmlFor="placeId3">School or preschool</label><br />
            <input type="radio" id="placeId4" name="place" value="friendplace" />
            <label htmlFor="placeId4">Friend's place</label><br />
            <input type="radio" id="placeId5" name="place" value="others" />
            <label htmlFor="placeId5">Others</label><br />

            <label htmlFor="reviewId">Your review about this book (required, 1000 chars max):</label><br />
            <textarea name="review" id="reviewId" className={css.reviewTextField} maxLength="1000" required /><br />

            <input type="submit" value="Review your inputs" />
          </form>
        )
      }
    </div>
  )
}

export default Form
