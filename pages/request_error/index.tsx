import ErrorPage from "../../components/error-page/ErrorPage";
import React from "react";

const RequestErrorPage = () => {
  const errHeader = "Похоже, что-то сломалось...";
  const errDesc = "Мы уже чиним, попробуйте вернуться позже";

  return <ErrorPage header={errHeader} desc={errDesc} />;
};

export default RequestErrorPage;
