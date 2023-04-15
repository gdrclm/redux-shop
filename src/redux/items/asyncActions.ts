import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Goods, SearchGoodsParams } from "./types";
import pickBy from "lodash/pickBy";
import identity from "lodash/identity";
import { API_URL, PAGE_LIMIT } from "../../constants";

export const fetchGoods = createAsyncThunk<Goods[], SearchGoodsParams>(
  "goods/fetchGoods",
  async (params) => {
    const { sortBy, category, search, pageCount } = params;
    const { data } = await axios.get<Goods[]>(API_URL, {
      params: pickBy(
        {
          page: pageCount,
          limit: PAGE_LIMIT,
          category,
          sortBy,
          search,
        },
        identity
      ),
    });
    return data;
  }
);

export const fetchGoodsTotalCount = createAsyncThunk<number, SearchGoodsParams>(
  "goods/fetchGoodsTotalCount",
  async (params) => {
    const { sortBy, category, search, pageCount } = params;
    const { data } = await axios.get<Goods[]>(API_URL, {
      params: pickBy(
        {
          page: pageCount,
          // limit: PAGE_LIMIT,
          category,
          sortBy,
          search,
        },
        identity
      ),
    });
    return data.length;
  }
);
