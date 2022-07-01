let initialstate = {
  users: [],
  loading: true,
};

function UserReducer(state = initialstate, action) {
  switch (action.type) {
    case "error_users":
      let erroTAsk = {
        users: [],
        error: action.payload,
        loading: false,
      };
      return erroTAsk;

    case "success_users":
      let newtask = {
        users: action.payload,
        error: "",
        loading: false,
      };
      return newtask;
    default:
      return state;
  }
}

export default UserReducer;
