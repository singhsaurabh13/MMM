import React from 'react'

export default function Contactleader() {
    const depositDetail = {
        "Accrued interest on the deposit": "40% per month, 1.33% daily (every 24 hours)",
        "Payment currency": "Litecoin (LTC), Dogecoin (DOGE)",
        "Amount": "$100 - $10,000",
        "Level of risk": "Low",
        "Expiration": "6 months (180 days)",
        "Possibility to withdraw a deposit": "Flexible withdrawals after 30 days"
      };
      const depositDetails2 = {
        "Accrued interest on the deposit": "50% per month, 1.67% daily (every 24 hours)",
        "Payment currency": "TRX (Tron), Tether USDT (TRC-20)",
        "Amount": "$10 - $5,000",
        "Level of risk": "Average",
        "Expiration": "5 months (150 days)",
        "Possibility to withdraw a deposit": "Deposit freeze for 60 days, daily interest payment, principal back after expiration"
      };
      const depositDetails3 = {
        "Accrued interest on the deposit": "60% per month, 2% daily (every 24 hours)",
        "Payment currency": "TRX (Tron), Tether USDT (TRC-20)",
        "Amount": "$10 - $150",
        "Level of risk": "Above average",
        "Expiration": "90 days",
        "Possibility to withdraw a deposit": "Deposit freeze for 30 days, daily interest payment, principal back after expiration"
      };

      let para1='Description: This investment plan is suitable for both short-term investments and long-term investments up to infinity. In the case of short-term investments, you can even invest money today, and in a few days withdraw the entire deposit along with interest. The deposit is good because the amount of investments can be quite large, up to 10 thousand dollars. A payment order is issued immediately in the amount of 20% of the total investment amount. The second order for the remaining amount comes within 5-10 days.'
      let para2='Description: This investment plan gives higher interest of 50% per month, but the main capital is frozen for 2 months (60 days), so this investment plan is worth using if you want to get higher interest and you will not need to withdraw your deposit in the near future. The maximum investment amount is $5,000.'
      let para3='Description: A specially designed contribution to fight poverty in all countries of the world. This investment plan gives the highest interest on deposits of 60% per month. However, the maximum amount of this deposit is small - only $150.'
  return (
    <div className='px-20'>
      <div>
      <h1 className='text-2xl text-center font-bold py-5'>Siddhi Capital <span className='text-red-600'> LEADERS</span></h1>
      <p className='text-justify px-10'>Siddhi Capital is constantly developing and is ready to offer you an interesting range of various deposits and investment plans. If you are looking for where to invest your free funds, then [COmpany Name] Global is what you need. All deposits are presented by risk level, which makes your choice even more convenient. Interest is calculated daily (every 24 hours) for all types of deposits, which can be withdral. For residents of Ukraine, an additional 10% bonus is accrued to the deposit amount in order to support people in a difficult situation. A brief description is provided for the features of each deposit.</p>

      </div>
      <div className="">
  <h1 className="text-2xl font-bold text-gray-800 mb-6">All Contries</h1>

  <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg">
    {/* Left Column - Image */}
    <div className="flex justify-center w-[600px] h-[350px]">
      <img
        src="https://cdn.pixabay.com/photo/2021/08/08/15/01/trading-6531134_640.jpg"
        alt="Trading"
        className="w-[550px] rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
      />
    </div>

    {/* Right Column - Table */}
    <div className="bg-white rounded-lg p-6 shadow-lg w-full ">
      <table className="table-auto w-full border-collapse border border-gray-500">
      <tbody>
          {/* Use Object.entries to map over the key-value pairs */}
          {Object.entries(depositDetail).map(([key, value], index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{key}</td>
              <td className="border border-gray-400 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <p>{para1}</p>
  <hr />
  <h1 className="text-2xl font-bold text-gray-800 mb-6">South Africa</h1>
  <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg">
    {/* Left Column - Image */}
    <div className="flex justify-center w-[600px] h-[300px]">
      <img
        src="https://cdn.pixabay.com/photo/2018/10/08/14/54/bitcoin-3732876_640.jpg"
        alt="Trading"
        className="w-[350px] rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
      />
    </div>

    {/* Right Column - Table */}
    <div className="bg-white rounded-lg p-6 shadow-lg w-full">
      <table className="table-auto w-full border-collapse border border-gray-500">
      <tbody>
          {/* Use Object.entries to map over the key-value pairs */}
          {Object.entries(depositDetails2).map(([key, value], index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{key}</td>
              <td className="border border-gray-400 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <p>{para2}</p>
  <hr />


  
  <h1 className="text-2xl font-bold text-gray-800 mb-6">3. Super</h1>
  <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-lg">
    {/* Left Column - Image */}
    <div className="flex justify-center w-[600px] h-[350px]">
      <img
        src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229_1280.jpg"
        alt="Trading"
        className="w-[550px] rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
      />
    </div>

    {/* Right Column - Table */}
    <div className="bg-white rounded-lg p-6 shadow-lg w-full">
      <table className="table-auto w-full border-collapse border border-gray-500">
      <tbody>
          {/* Use Object.entries to map over the key-value pairs */}
          {Object.entries(depositDetails3).map(([key, value], index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{key}</td>
              <td className="border border-gray-400 px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
<p>{para3}</p>
<hr />

    </div>
  )
}
