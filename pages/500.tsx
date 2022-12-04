import React from "react";
import ErrorPage from "../components/error-page/ErrorPage";

const ServerErrorPage = () => {
  const errHeader = "Похоже, что-то сломалось...";
  const errDesc = "Мы уже чиним, попробуйте вернуться позже";

  return <ErrorPage header={errHeader} desc={errDesc} />;
};

export default ServerErrorPage;
