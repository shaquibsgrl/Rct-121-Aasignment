import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "http://localhost:4001/Products",
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  //console.log(data)
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            Product:{item.name},Price:{item.price}
            <Link to={`/products/${item.id}`}>More details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
