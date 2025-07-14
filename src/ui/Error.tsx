import { useRouteError } from "react-router";

function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-96 items-center justify-center">
      <h1 className="text-3xl font-bold">Something Went Wrong</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default Error;
