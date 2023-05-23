import React from "react";
import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";
import { useCoinMarkets } from "@/hooks/use-coin-markets";
import Loader from "@/components/loader";
import Error from "@/components/error";
import CurrencyItem from "@/components/currency-item";

const CurrenciesList: React.FC = () => {
  const { isLoading, error, data } = useCoinMarkets<CoinMarket[]>();

  if (error) return <Error />;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.map((data) => (
        <CurrencyItem key={data.id} data={data} />
      ))}
    </div>
  );
};

export default CurrenciesList;
