import { Route } from "../routes";
import { NextRouter } from "next/router";

const handleRedirClick = (router: NextRouter, path: Route) => () => {
  router.push(path);
};

export { handleRedirClick };
