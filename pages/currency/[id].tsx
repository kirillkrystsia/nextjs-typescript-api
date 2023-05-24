import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";
import { useRouter } from "next/router";
import { useCoinMarkets } from "@/hooks/use-coin-markets";
import Loader from "@/components/loader";
import React from "react";
import Error from "@/components/error";
import CurrencyItemWrapper from "@/components/currency-item";
import Link from "next/link";

const Currency: React.FC = () => {
  const {
    query: { id },
  } = useRouter();
  const { isLoading, error, data } = useCoinMarkets<CoinMarket>(id as string);

  if (error) return <Error />;

  return (
    <div className="flex justify-center items-center  min-h-screen block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {isLoading ? (
        <Loader />
      ) : data ? (
        <CurrencyItemWrapper data={data}>
          <>
            <div className="flex-1 mb-5">
              <h3 className="text-center text-3xl font-semibold mb-5">{data.name}</h3>
              <div className="grid grid-cols-2 gap-3">
                <span className="pr-3">Current Price:</span>{" "}
                <b className="text-right text-slate-400">{data.current_price} USD</b>
                <span className="pr-3">24h High:</span> <b className="text-right text-slate-400">{data.high_24h} USD</b>
                <span className="pr-3">24h Low:</span> <b className="text-right text-slate-400">{data.low_24h} USD</b>
                <span className="pr-3">Market cap:</span> <b className="text-right text-slate-400">{data.market_cap}</b>
                <span className="pr-3">Market cap rank:</span>{" "}
                <b className="text-right text-slate-400">{data.market_cap_rank}</b>
              </div>
            </div>
            <div className="p-4 flex justify-center">
              <Link href={`/`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Back to list
                </button>
              </Link>
            </div>
          </>
        </CurrencyItemWrapper>
      ) : (
        <div className="text-xl">No Data &#128561;</div>
      )}
    </div>
  );
};

export default Currency;
