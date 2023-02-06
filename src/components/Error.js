import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //console.error(err);
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!</h1>
      <h1>Something went wrong.</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};

export default Error;
