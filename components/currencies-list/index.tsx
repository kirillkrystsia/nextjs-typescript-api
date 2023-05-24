import React from "react";
import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";
import { useCoinMarkets } from "@/hooks/use-coin-markets";
import Loader from "@/components/loader";
import Error from "@/components/error";
import CurrencyItemWrapper from "@/components/currency-item";
import Link from "next/link";

const CurrenciesList: React.FC = () => {
  const { isLoading, error, data } = useCoinMarkets<CoinMarket[]>();

  if (error) return <Error />;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.map((data) => (
        <CurrencyItemWrapper key={data.id} data={data}>
          <>
            <div className="flex-1 p-4">
              <h2 className="text-center text-xl font-semibold mb-2">{data.name}</h2>
              <ul className="list-disc pl-5">
                <li>Current Price: {data.current_price} USD</li>
                <li>24h High: {data.high_24h} USD</li>
                <li>24h Low: {data.low_24h} USD</li>
              </ul>
            </div>
            <div className="p-4 flex justify-center">
              <Link href={`/currency/${data.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">More</button>
              </Link>
            </div>
          </>
        </CurrencyItemWrapper>
      ))}
    </div>
  );
};

export default CurrenciesList;
