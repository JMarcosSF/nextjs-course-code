import { useState, useEffect } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-3965f-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    const transformedSales = [];
    if (data) {
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].salesperson,
          vol: data[key].vol,
        });
      }
    }

    setSales(transformedSales);
  }, [data]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch("https://nextjs-course-3965f-default-rtdb.firebaseio.com/sales.json")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       const transformedSales = [];
  //
  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].salesperson,
  //           vol: data[key].vol,
  //         });
  //       }
  //
  //       setSales(transformedSales);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <div>
      {!data ? (
        <div>LOADING</div>
      ) : (
        <div>
          LOADED
          <ul>
            {sales.map((sale) => (
              <li key={sale.username}>{sale.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LastSalesPage;
