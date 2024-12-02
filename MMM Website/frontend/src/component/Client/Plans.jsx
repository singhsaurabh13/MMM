import React from 'react';

export default function Plans() {
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

    let para1 = 'Description: This investment plan is suitable for both short-term investments and long-term investments up to infinity...';
    let para2 = 'Description: This investment plan gives higher interest of 50% per month, but the main capital is frozen for 2 months...';
    let para3 = 'Description: A specially designed contribution to fight poverty in all countries of the world...';

    return (
        <div className="px-4 md:px-10 lg:px-20">
            <div>
                <h1 className="text-2xl text-center font-bold py-5">
                    Siddhi Capital <span className="text-red-600">PLANS</span>
                </h1>
                <p className="text-justify px-2 md:px-10">
                    Siddhi Capital Global Infinity is constantly developing and is ready to offer you...
                </p>
            </div>

            {/* Plan 1 */}
            <div className="my-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">1. Simple</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg">
                    <div className="flex justify-center w-full lg:w-1/2 h-auto">
                        <img
                            src="https://cdn.pixabay.com/photo/2021/08/08/15/01/trading-6531134_640.jpg"
                            alt="Trading"
                            className="w-full max-w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                        <table className="table-auto w-full border-collapse border border-gray-500">
                            <tbody>
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
                <p className="text-justify">{para1}</p>
                <hr />
            </div>

            {/* Plan 2 */}
            <div className="my-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">2. Happy</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg">
                    <div className="flex justify-center w-full lg:w-1/2 h-auto">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/03/07/00/22/south-africa-2122942_640.jpg"
                            alt="Investment"
                            className="w-full max-w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                        <table className="table-auto w-full border-collapse border border-gray-500">
                            <tbody>
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
                <p className="text-justify">{para2}</p>
                <hr />
            </div>

            {/* Plan 3 */}
            <div className="my-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">3. Super</h1>
                <div className="flex flex-col lg:flex-row items-center gap-8 p-6 rounded-lg">
                    <div className="flex justify-center w-full lg:w-1/2 h-auto">
                        <img
                            src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229_1280.jpg"
                            alt="Money"
                            className="w-full max-w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-lg w-full lg:w-1/2">
                        <table className="table-auto w-full border-collapse border border-gray-500">
                            <tbody>
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
                <p className="text-justify">{para3}</p>
                <hr />
            </div>
        </div>
    );
}
