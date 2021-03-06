import React, {useEffect, useState} from "react";
import { Switch, HashRouter, Route, Link } from "react-router-dom";
import { isEmpty } from "lodash";

import Home from "./Home/Home.jsx";
import Error from "./Error/Error.jsx";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import BooksList from "./BooksList/BooksList.jsx";
import Book from "./Book/Book.jsx";
import ThankPage from "./ThankPage/ThankPage.jsx";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const result = await fetch("https://demo5878926.mockable.io/books");
      const resultJson = await result.json();
      setFetchedData(resultJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayAllBooks;
  let displayBabyTo2;
  let display3To5;
  let display6To8;
  let display9To12;


  if(!isEmpty(fetchedData)) {
    var category0to2 = Object.values(fetchedData.babyTo2);
    var category3to5 = Object.values(fetchedData.threeTo5);
    var category6to8 = Object.values(fetchedData.sixTo8);
    var category9to12 = Object.values(fetchedData.nineTo12);

    var allBooks = category0to2.concat(category3to5).concat(category6to8).concat(category9to12);
    displayAllBooks = (
      <BooksList books={allBooks} pageTitle="All Books" />
    );
    displayBabyTo2 = (
      <BooksList books={category0to2} pageTitle="Books for baby to 2 years old" />
    );
    display3To5 = (
      <BooksList books={category3to5} pageTitle="Books for 3 to 5 years old" />
    );
    display6To8 = (
      <BooksList books={category6to8} pageTitle="Books for 6 to 8 years old" />
    );
    display9To12 = (
      <BooksList books={category9to12} pageTitle="Books for 9 to 12 years old" />
    );
  } else {
    displayAllBooks = <div><center>Data is fetching</center></div>;
    displayBabyTo2 = <div><center>Data is fetching</center></div>;
    display3To5 = <div><center>Data is fetching</center></div>;
    display6To8 = <div><center>Data is fetching</center></div>;
    display9To12 = <div><center>Data is fetching</center></div>;
  }


  return (
    <>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={AboutUs} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route
            path="/allbooks"
            exact
            render={() => displayAllBooks}
          />
          <Route
            path="/babyto2"
            exact
            render={() => displayBabyTo2}
          />
          <Route
            path="/3to5"
            exact
            render={() => display3To5}
          />
          <Route
            path="/6to8"
            exact
            render={() => display6To8}
          />
          <Route
            path="/9to12"
            exact
            render={() => display9To12}
          />
          {/* passing parameters via a route path */}
          <Route
            path="/book/:categoryId/:bookId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Book
                categoryId={match.params.categoryId}
                bookId={match.params.bookId}
              />
            )}
          />
          <Route path="/thankyou" exact component={ThankPage} />
          <Route path="/error" exact component={Error} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
