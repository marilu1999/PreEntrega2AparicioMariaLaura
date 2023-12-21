import {useState, useEffect} from "react";
import { getCategories, getProductById, getProducts, getProductsByCategory } from "../services";

export const useGetProducts = (limit = 10) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(limit)
          .then((response) => {
            setProductsData(response.data.products);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return {productsData}

}

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
      getProductById(id)
        .then((response) => {
          setProductData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return {productData}

}

export const useGetCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      getCategories()
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return {categories}

}

export const useGetProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
      getProductsByCategory(id)
        .then((response) => {
          setProductsData(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    return {productsData}

}