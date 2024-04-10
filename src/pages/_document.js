import { DESCRIPTION, TITLE } from "@/config";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content={TITLE} />
          <meta name="description" content={DESCRIPTION} />

          <meta property="twitter:title" content={TITLE} />
          <meta property="twitter:description" content={DESCRIPTION} />
          <meta
            property="twitter:image"
            content="https://www.sasuke.dev/seo/og.jpg"
          />
          <meta property="twitter:url" content="https://www.sasuke.dev/" />
          <meta property="twitter:card" content="summary_large_image" />

          <meta property="og:title" content={TITLE} />
          <meta property="og:description" content={DESCRIPTION} />
          <meta property="og:url" content="https://www.sasuke.dev/" />
          <meta
            property="og:image"
            content="https://www.sasuke.dev/seo/og.jpg"
          />
          <meta property="og:type" content="website" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
