import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";
import { useRouter } from "next/router";
import { useCoinMarkets } from "@/hooks/use-coin-markets";
import Loader from "@/components/loader";
import React from "react";
import Error from "@/components/error";
import CurrencyItem from "@/components/currency-item";

const Currency: React.FC = () => {
  const {
    query: { id },
  } = useRouter();
  const { isLoading, error, data } = useCoinMarkets<CoinMarket>(id as string);

  if (error) return <Error />;

  return (
    <div className="flex justify-center items-center  min-h-screen block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {isLoading ? <Loader /> : data ? <CurrencyItem data={data} full /> : <div className="text-xl">No Data &#128561;</div>}
    </div>
  );
};

export default Currency;
