import Head from "next/head";

const GOOGLE_ANALYTICS_KEY = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const description = "Blog com o objetivo de disseminar o conhecimento e experiências, focado em backend, AWS e muitos outros assuntos";

const baseName = "Matheus de Oliveira de Andrade";

const keywords = [
  "Programming",
  "Programação",
  "Blog",
  "Backend",
  "Developer"
]

export default function ({ title, pageName }) {
  return (
    <Head>
      <title>{`${baseName} | ${title}`}</title>

      <link rel="icon" href="/favicon.ico" />

      <meta name="author" content={baseName}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

      <meta name="theme-color" content="#2e4772"></meta>
      <meta name="description" content={description}></meta>

      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:site_name" content={`${baseName} | ${pageName}`}></meta>
      <meta property="og:description" content={description}></meta>

      <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/32457879?v=4"/>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>

      <meta name="robots" content="notranslate"/>

      <meta name="keywords" content={keywords}/>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_KEY}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_KEY}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
}
