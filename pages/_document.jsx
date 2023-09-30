import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta
          name="description"
          content="Discover the world's most beautiful and iconic photos! Choose your favorite wall art from our wide selection of photos and let us frame them into high-quality canvas and framed prints."
        />
        <meta
          property="og:description"
          content="Discover the world's most beautiful and iconic photos! Choose your favorite wall art from our wide selection of photos and let us frame them into high-quality canvas and framed prints."
        />
      <title>Image Search</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
