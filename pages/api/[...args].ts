import { createProxyMiddleware } from "http-proxy-middleware";
import { Url } from "../../common/config_enums/url.enum";

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  // target: 'http://localhost:4010/',
  target: Url.SERVER_PATH,
  pathRewrite: {
    "^/api/": "/", // remove base path
  },
});

export default proxy;
