// import React from "react";
// import { Images } from "./BtnAndImg";

// const ServicesComp = ({
//   title,
//   para,
//   colorApp,
//   arr,
//   clasAddDarkMode,
//   img,
//   id,
// }: any) => {
//   return (
//     <section className={`whyChooseTrekTech ${clasAddDarkMode}`} id={id}>
//       <div className="container">
//         <h2 className="fw-bold skyblue text-center py-4">{title}</h2>
//         <div className="row">
//           <div className="col-md-6 order-2 order-md-1">
//             <h3 className={`fw-bold ${colorApp}`}>Why You Need It:</h3>
//             <p className={`${colorApp}`}></p>
//             <h5 className={`fw-bold ${colorApp}`}>Benifits :</h5>
//             <ul className="feature-list mt-3 p-0">
//               {arr?.map((each: any) => (
//                 <li className={colorApp}>{each.list}</li>
//               ))}
//             </ul>
//           </div>
//           <Images img={img} />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesComp;

import React from "react";
import Head from "next/head";
import { Images } from "./BtnAndImg";

const ServicesComp = ({
  title,
  para,
  colorApp,
  arr,
  clasAddDarkMode,
  img,
  id,
  keywords = [],
  description,
}: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || para} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Head>

      <section className={`whyChooseTrekTech ${clasAddDarkMode}`} id={id}>
        <div className="container">
          <h2 className="fw-bold skyblue text-center py-4">{title}</h2>
          <div className="row">
            <div className="col-md-6 order-2 order-md-1">
              <h3 className={`fw-bold ${colorApp}`}>Why You Need It:</h3>
              <p className={`${colorApp}`}>{para}</p>
              <h5 className={`fw-bold ${colorApp}`}>Benefits :</h5>
              <ul className="feature-list mt-3 p-0">
                {arr?.map((each: any, idx: number) => (
                  <li key={idx} className={colorApp}>
                    {each.list}
                  </li>
                ))}
              </ul>
            </div>
            <Images img={img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesComp;
