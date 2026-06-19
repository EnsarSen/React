import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });
  
  
  
  
  
  
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <h1>
      This is the home page <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
};
