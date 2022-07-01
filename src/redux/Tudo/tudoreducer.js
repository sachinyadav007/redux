let tasklist = {
  task: [],
};

function TudoReducer(state = tasklist, action) {
  switch (action.type) {
    case "AddTask":
      console.log(" in add ");
      let newtask = {
        ...state,
        task: [
          ...state.task,
          { task: action.currentTask, id: state.task.length },
        ],

        // { task: currTask, id: this.state.taskList.length }
      };
      // console.log(" simple in tudo", state);
      return newtask;
    case "deletask":
      // console.log("in elete task", action.idx);
      let deletnewtask = {
        ...state,
        task: state.task.filter((el) => el.id !== action.idx),
      };
      return deletnewtask;

    default:
      return state;
  }
}
export default TudoReducer;
