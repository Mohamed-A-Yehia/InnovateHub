import { useRouteError } from "react-router";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-96 flex-col items-center justify-center gap-1.5">
      <h1 className="text-3xl font-bold">Something Went Wrong</h1>
      <p>{error.message}</p>

      <LinkButton />
    </div>
  );
}

export default Error;
