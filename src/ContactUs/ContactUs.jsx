import React from 'react';
import css from "./ContactUs.module.css";

const ContactUs = () => {
    return (
        <div className={css.allDiv}>
          <div className={css.titleDiv}>
            <h1>Contact Information - Next Book for Kids</h1>
          </div>
          <div className={css.textDiv}>
            <h2>Address</h2>
            <p>1225 Kids road, Books, CA, 94000</p>
            <h2>Call At</h2>
            <p><a href="tel:+11234567890">+1 123-456-7890</a></p>
            <h2>Fax</h2>
            <p><a href="fax:+17894561230">+1 789-456-1230</a></p>
            <h2>Email</h2>
            <p><a href="mailto:nan.d@northeastern.edu">nan.d@northeastern.edu</a></p>

          </div>

        </div>
    )
}

export default ContactUs
