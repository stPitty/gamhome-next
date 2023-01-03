import React, { ErrorInfo, ReactNode, ReactPropTypes } from "react";
import ErrorPage from "../error-page/ErrorPage";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  private header = "Ошибка на странице";

  private desc =
    "Попробуйте очистите кеш и куки браузера, проверьте настройки антивируса и брандмауэра, проверьте не заблокирован ли сайт интернет-провайдером";

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  setHasNoError() {
    this.setState({ hasError: false });
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          header={this.header}
          desc={this.desc}
          setHasNoError={this.setHasNoError.bind(this)}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
