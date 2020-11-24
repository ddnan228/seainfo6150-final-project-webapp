import React from 'react';
import errorImage from "../images/errorImage.png"
import css from "./Error.module.css";

const Error = () => {
    return (
        <div className={css.allDiv}>
          <div className={css.textDiv}>
            <p>404 Not found!<br />Ooops, something is wrong with this page!</p>
          </div>
          <div >
            <img className={css.imageDiv} src={errorImage} alt="Error Image" />
          </div>
        </div>
    )
}

export default Error
