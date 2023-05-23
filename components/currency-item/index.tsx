import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";

interface CurrencyItemProps {
  data: CoinMarket;
  full?: boolean;
}

const CurrencyItem: React.FC<CurrencyItemProps> = ({ data, full }) => (
  <div className="flex flex-col block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-center">
      <Image src={data.image} alt="placeholder" width={200} height={200} className="object-cover object-center" />
    </div>
    <div className="flex-1 p-4">
      <h2 className="text-center text-xl font-semibold mb-2">{data.name}</h2>
      <ul className="list-disc pl-5">
        <li>Current Price: {data.current_price}</li>
        <li>24h High: {data.high_24h}</li>
        <li>24h Low: {data.low_24h}</li>
        {full && (
          <>
            <li>
              <span>Market cap: {data?.market_cap}</span>
            </li>
            <li>
              <span>Market cap rank: {data?.market_cap_rank}</span>
            </li>
          </>
        )}
      </ul>
    </div>
    <div className="p-4 flex justify-center">
      {full ? (
        <Link href={`/`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to list</button>
        </Link>
      ) : (
        <Link href={`/currency/${data.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More</button>
        </Link>
      )}
    </div>
  </div>
);

export default CurrencyItem;
