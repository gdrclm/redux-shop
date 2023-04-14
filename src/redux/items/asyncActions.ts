import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Goods, SearchGoodsParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";

export const fetchGoods = createAsyncThunk<Goods[], SearchGoodsParams>(
  "goods/fetchGoodsStatus",
  async (params) => {
    const { sortBy, category, search, pageCount } = params;
    const { data } = await axios.get<Goods[]>(
      "https://63aa356f594f75dc1dcb2168.mockapi.io/goods",
      {
        params: pickBy(
          {
            page: pageCount,
            limit: 12,
            category,
            sortBy,
            search,
          },
          identity
        ),
      }
    );
    return data;
  }
);
