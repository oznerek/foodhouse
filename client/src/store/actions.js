import config from "../components/utils/config";
import lodash from "lodash";

export const fetchMenu = (q) => async (dispatch) => {
  const response = await config.get(`/search`, {
    params: {
      q: q,
    },
  });
  return dispatch({
    type: "MENU_FETCHED",
    payload: response.data.recipes,
  });
};

export const fetchDishDetails = (id) => (dispatch) => _fetchMenu(id, dispatch);
const _fetchMenu = lodash.memoize(async (id, dispatch) => {
  const response = await config.get(`/get`, {
    params: {
      id: id,
    },
  });

  return dispatch({
    type: "DISH_DETAILS_FETCHED",
    payload: response.data.recipes,
  });
});

export const selectMenu = (menuSelected) => {
  return {
    type: "MENU_ITEM_SELECTED",
    payload: menuSelected,
  };
};
