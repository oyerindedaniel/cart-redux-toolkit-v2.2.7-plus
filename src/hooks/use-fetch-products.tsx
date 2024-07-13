import { useEffect, useState } from "react";
import api from "../lib/axios";
import { ProductsResponse } from "../types";

interface UseFetchProductsParams {
  reverse_sort: boolean;
  page: number;
  size: number;
}

export const useFetchProducts = ({
  reverse_sort,
  page,
  size,
}: UseFetchProductsParams) => {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await api.get("/", {
          params: {
            reverse_sort,
            page,
            size,
          },
        });
        setData(response.data);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [reverse_sort, page, size]);

  return { data, isLoading, isError };
};
