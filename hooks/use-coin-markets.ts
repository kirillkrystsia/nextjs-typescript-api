import { useQuery } from "@tanstack/react-query";
import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";
import { UseQueryResult } from "@tanstack/react-query/src/types";

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&per_page=45&page=1";

export const useCoinMarkets = <T>(symbol?: string): UseQueryResult<T> =>
  useQuery<T>({
    queryKey: ["coinMarkets"],
    queryFn: () => fetch(url).then((res) => res.json()),
    select: (data) => (symbol ? (data as Array<any>).find((item: CoinMarket) => item.id === symbol) : data),
  });
