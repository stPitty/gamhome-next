import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <title>GamHome</title>
        <meta
          name="Лучший сервис для поиска недвижимости GamHome"
          content="GamHome - это ведущая служба недвижимости, которая предлагает экспертную поддержку как риэлторам, так и индивидуальным клиентам в поиске идеального дома и в процессе оформления сделки. Найдите дом своей мечты сегодня с GamHome."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
