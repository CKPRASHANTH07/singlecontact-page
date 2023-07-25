import React, { useState } from 'react';

const BlackBackgroundPage = () => {
  const [companyName, setCompanyName] = useState('');
  const [applierName, setApplierName] = useState('');
  const [productType, setProductType] = useState('');
  const [companyMail, setCompanyMail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-24">
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className="w-full sm:w-1/2 sm:pr-4">
            <div className='text-1xl'>
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold underline underline-offset-8 decoration-blue-500 border-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">Contact-us</h1>

              <p className="text-black text-lg sm:text-2xl md:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">Ask for a quotation</p>

              <input
                type="text"
                className="block text-black mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl bg-transparent border-b border-black"
                placeholder="Company name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />

              <input
                type="text"
                className="block text-black mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl bg-transparent border-b border-black"
                placeholder="Applier name"
                value={applierName}
                onChange={(e) => setApplierName(e.target.value)}
              />

              <div className='flex items-center'>
                <input
                  type="text"
                  className="block text-black mt-6 sm:mt-8 w-1/2 sm:w-2/3 text-xl sm:text-2xl md:text-3xl bg-transparent border-b border-black"
                  placeholder="Product Type"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                />
                <input
                  type="number"
                  className='text-black border-2 border-blue-950 bg-transparent h-fit w-20 ring-red-200 ml-4'
                  placeholder='Quantity'
                />
              </div>

              <input
                type="text"
                className="block text-black mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl bg-transparent border-b border-black"
                placeholder="Company mail"
                value={companyMail}
                onChange={(e) => setCompanyMail(e.target.value)}
              />

              <input
                type="text"
                className="block text-black mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl bg-transparent border-b border-black"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />

              <button
                type="submit"
                className="block bg-transparent border-b-4 mt-8 sm:mt-10 hover:bg-blue-500 text-black font-semibold py-4 px-8 rounded-lg text-lg sm:text-xl md:text-2xl"
              >
                Submit
              </button>
            </div>
          </div>
          <div className='text-1xl mt-8 sm:mt-0 sm:w-1/2 sm:pl-4  '>
            <div className='text-center'>
              <p className="text-black text-4xl sm:text-5xl md:text-6xl font-bold underline underline-offset-8 decoration-blue-500 border-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">How to reach us?</p>
              <div className='flex items-center justify-center'>
                <button className="text-blue-500 text-lg sm:text-2xl md:text-3xl">Company Address:</button>
              </div>
             
              <p className="text-black text-xl sm:text-2xl md:text-3xl ">one company </p>
              <p className="text-black text-xl sm:text-2xl md:text-3xl ">Ground Floor, Plot No. 123,</p>
              <p className="text-black text-xl sm:text-2xl md:text-3xl "> Industrial Estate,</p>
              <p className="text-black text-xl sm:text-2xl md:text-3xl ">yess some Road, 123,</p>
              <p className="text-black text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">that place – 123 456.</p>
              <div className='flex items-center justify-center'>
                <button className="text-blue-500 text-lg sm:text-2xl md:text-3xl">Company Mail:</button>
              </div>
              <p className="text-black text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">www.company.com</p>
              <div className='flex items-center justify-center'>
                <button className="text-blue-500 text-lg sm:text-2xl md:text-3xl">Company Contact:</button>
              </div>
              <p className="text-black text-xl sm:text-2xl md:text-3xl">+1234 1234 1224 / 1228</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackBackgroundPage;
