import config from "../../components/utils/config";

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

export const selectMenu = (menuSelected) => {
  console.log("run");
  return {
    type: "MENU_ITEM_SELECTED",
    payload: menuSelected,
  };
};
