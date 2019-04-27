import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="text-white p-4 text-center">
      <Link to="/" className="btn-flag-links"><i className="flag-icon flag-icon-us"></i></Link>
      <Link to="/ae" className="btn-flag-links"><i className="flag-icon flag-icon-ae"></i></Link>
      <Link to="/de" className="btn-flag-links"><i className="flag-icon flag-icon-de"></i></Link>
      <Link to="/cn" className="btn-flag-links"><i className="flag-icon flag-icon-cn"></i></Link>      
    </footer>
  );
  //Copyright &copy; {new Date().getFullYear()} Avengers Portal}
};
