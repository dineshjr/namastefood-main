import { useRouteError } from "react-router";
// To navigate programmatically
import "../pages/Error.css";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <section className="error-content">
        <h1>{err.status} Oops! Something went wrong.</h1>
        <p>{err.data}</p>
        <button className="error-btn">Go to Home</button>
      </section>
    </div>
  );
};

export default ErrorPage;
