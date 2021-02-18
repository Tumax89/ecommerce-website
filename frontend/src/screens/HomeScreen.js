import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "../components/Products";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varaint="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Products key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
