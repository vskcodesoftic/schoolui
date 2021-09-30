import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import { Redirect, Route } from 'react-router';

import LibrarianDashboard from '../../components/Librain/sections/LibrarianDashboard';
import { IssuedPage } from '../../components/Librain/pages/Issued/IssuedPage';
import AddBooksPage from '../../components/Librain/pages/AddBooks/AddBooksPage';
import { ReturnedBooksPage } from '../../components/Librain/pages/Returned/ReturnedBooksPage';
import { BooksListPage } from '../../components/Librain/pages/BookList/BooksListPage';

const LibrarianMain = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="bg-green-500 p-5">

      </div>
      <div className="btn-toggle p-2 mt-3" onClick={() => handleToggleSidebar(true)}>
        <FaBars className="" />
      </div>
     
     <Route exact path="/Librarian/books/issued">
       <IssuedPage />
     </Route>

     <Route exact path="/Librarian/books/addBooks">
       <AddBooksPage />
     </Route>

     <Route exact path="/Librarian/books/return">
       <ReturnedBooksPage />
     </Route>

     <Route exact path="/Librarian/books/list">
       <BooksListPage />
     </Route>
    
    <Route exact path="/Librarian/dashboard">
      <LibrarianDashboard />
    </Route>

     <Route exact path="/">   
     <Redirect to="/Librarian/dashboard" />
     </Route>
     
    

  </main>
  );
};

export default LibrarianMain;
