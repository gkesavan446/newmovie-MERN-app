import { Link } from "react-router-dom";

export function Notfound() {
  return (
    <div className='not-found'>
      <h1>404 Page not found</h1>
      <img src="https://media2.giphy.com/media/fAna2mXCGsyryR9XBC/giphy.gif" alt="Page not found" />
      <Link to="/">Click here for Home Page</Link>
    </div>
  );
}
