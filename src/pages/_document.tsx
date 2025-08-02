// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Trek Tech Corp delivers managed IT services, cloud solutions, CRM, HRMS, AMC, and cybersecurity specifically tailored for small businesses and SMEs across India."
        />
        <meta
          name="keywords"
          content="
            IT solutions for small businesses, IT services for SMEs in India, affordable IT support for small business,
            SME cloud services provider, IT infrastructure for SMEs, managed IT services for SMEs,
            cybersecurity solutions for SMEs, business IT support for startups,
            small business email solutions India, best CRM for small business India,
            HR software for SMEs in India, SME firewall and network security,
            data backup solutions for small business, endpoint security for small business,
            AMC services for SME IT systems, IT solutions for SME pharma companies,
            IT support for SME construction firms, CRM for SME manufacturing industry,
            HRMS software for SME educational institutes, cybersecurity for SME government contractors,
            email and collaboration tools for SMEs, IT licensing for small businesses in India,
            IT services for SMEs in Ahmedabad, cloud service provider for SMEs Gujarat,
            firewall setup for SMEs in India, website development for small business Ahmedabad,
            endpoint security for SMEs in Gujarat, best IT service provider for small businesses in India,
            low-cost IT solutions for startups, top IT support companies for SMEs,
            Microsoft 365 for SMEs in India, secure email hosting for small business,
            G-Suite setup for Indian small companies, affordable firewall for small office network,
            remote access software for SME teams, IT partner for SME business growth,
            buy Microsoft license for small business, get CRM software for SMEs,
            outsource IT support for SMEs, schedule VAPT audit for small company,
            request IT AMC quote for SME, setup cloud server for small business,
            Trek Tech IT support for SMEs, Trek Tech cloud services for small business,
            Trek Tech SME cybersecurity audit, Trek Tech AMC services for growing businesses
          "
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Trek Tech Corp - Managed IT Services for Small Businesses"
        />
        <meta
          property="og:description"
          content="Get secure and scalable IT solutions including CRM, cloud, firewall, and support services for SMEs in India."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
