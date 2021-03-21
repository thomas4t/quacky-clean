import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDidMount, useUnmount } from "../../helpers/customHooks";
import { ProductType } from "./types";

type TParams = { id: string };

export default function CategoryPage() {
  let { id } = useParams<TParams>();
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      //TODO fix this
      const url =
        process.env.REACT_APP_BACKEND_URL + `/products/category/${id}`;
      const data: ProductType[] = await (await axios.get(url)).data;
      setProducts(data);
    };

    loadProducts();
  }, [id]);
  return (
    <div>
      {products.map((prod) => {
        return (
          <div key={prod.ID_Product}>
            <div>
              <strong>Name:</strong> {prod.name_p}
            </div>
            <div>
              <strong>Description: </strong> {prod.description_p}
            </div>
            <div>
              <strong>Color: </strong>
              {prod.color || "Not provided"}
            </div>
            <div>
              <strong>Price: </strong>
              {prod.price} EUR?
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
