"use client";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";


export default function Home() {
  const [activeTabMod, setActiveTabMod] = useState(0);


  const handleCardClick = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = pdfUrl.split("/").pop();
    link.click();
  };


  const modificationData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Dormant Account Reactivation Form",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/1.  Dormant Account Reactivation Form.pdf",
        },
        {
          title: "Modification Form (Except Bank)",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/2. Modification Form (Except Bank).pdf",
        },
        {
          title: "Account Closure Form",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/3.  Account Closure Form.pdf",
        },
        {
          title: "Additional Segment Enablement",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/4. Additional Segment Enablement.pdf",
        },
        {
          title: "Bank Details Modification Forms",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/5. Bank Details Modification Forms.pdf",
        },
        {
          title: "Common Mobile Number & EmailId Declaration",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/6. Common Mobile Number & EmailId Declaration.pdf",
        },
        {
          title: "NOC for Joint Account",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/7. NOC for Joint Account.pdf",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "New DIS Form Issue",
          url: "/files/Modification Forms/Demat/1. New DIS Form Issue.pdf",
        },
        {
          title: "Nomination Form",
          url: "/files/Modification Forms/Demat/2. Nomination Form.pdf",
        },
        {
          title: "Dematerialisation Request Form",
          url: "/files/Modification Forms/Demat/3. Dematerialisation Request Form.pdf",
        },
        {
          title: "Pledge Request Form",
          url: "/files/Modification Forms/Demat/4. Pledge Request Form.pdf",
        },
        {
          title: "Unpledge Request Form",
          url: "/files/Modification Forms/Demat/5. Unpledge Request Form.pdf",
        },
        {
          title: "Transposition Request Form",
          url: "/files/Modification Forms/Demat/6. Transposition Request Form.pdf",
        },
        {
          title: "Transmission cum Dematerialisation",
          url: "/files/Modification Forms/Demat/7. Transmission cum Dematerialisation.pdf",
        },
        {
          title: "Transmission Form Sole Holder",
          url: "/files/Modification Forms/Demat/8. Transmission Form Sole Holder.pdf",
        },
        {
          title: "Transmission Without Nominee",
          url: "/files/Modification Forms/Demat/9.  Transmission Without Nominee.pdf",
        },
        {
          title: "Transmission Form Joint Holder",
          url: "/files/Modification Forms/Demat/10. Transmission Form Joint Holder.pdf",
        },
        {
          title: "Destatementization Request Form",
          url: "/files/Modification Forms/Demat/11. Destatementization Request Form.pdf",
        },
        {
          title: "BO Seller Buyer link",
          url: "/files/Modification Forms/Demat/12. BO Seller Buyer link.pdf",
        },
      ],
    },
  ];




  return (
    <main>
      {/* <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
         
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800  transform transition duration-500 hover:scale-105 text-center cursor-pointer"
                onClick={() => handleCardClick("/path/to/pdf1.pdf")}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


<section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
        
          <div className="flex flex-wrap justify-center mb-8">
            {modificationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTabMod === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabMod(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modificationData[activeTabMod].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
