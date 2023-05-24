import Image from "next/image";
import React, { PropsWithChildren } from "react";
import { CoinMarket } from "@/components/currencies-list/interfaces/coin-market";

interface CurrencyItemWrapperProps {
  data: CoinMarket;
}

const CurrencyItemWrapper = ({ data, children }: PropsWithChildren<CurrencyItemWrapperProps>) => (
  <div className="flex flex-col block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-center">
        {data.image && <Image src={data.image} alt="placeholder" width={200} height={200} className="object-cover object-center"/>}
    </div>
    {children}
  </div>
);

export default CurrencyItemWrapper;
