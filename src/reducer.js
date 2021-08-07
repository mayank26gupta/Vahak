export const initialState = {
  details: null,
  bid: null,
  negotiable: null,
  mobile: null,
  name: null,
  remarks: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_Details":
      return {
        ...state,
        details: action.details,
      };
    case "ADD_PersonalDetails":
      return {
        ...state,
        negotiable: action.negotiable,
        mobile: action.mobile,
        name: action.name,
        remarks: action.remarks,
      };
    case "ADD_BidPrice":
      return {
        ...state,
        bid: action.bid,
        negotiable: action.negotiable,
      };
    default:
      return state;
  }
};

export default reducer;
