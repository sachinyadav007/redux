// let resp = await fetch("https://react-backend101.herokuapp.com/genres");

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import userFetchMiddleWare from "../middelware/usermiddelware";

// function User() {
//   console.log(" in users");
//   const [loading, setloading] = useState(true);
//   const [error, setError] = useState("");
//   const [user, setUser] = useState([]);
//   useEffect(async () => {
//     try {
//       console.log("try block");

//       let resp = await fetch("https://jsonplaceholder.typicode.com/users");
//       let users = await resp.json();
//       console.log(users);
//       setloading(false);
//       setUser(users);
//     } catch (err) {
//       setloading(false);
//       setError(err.message);
//     }
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <h2> loading...</h2>
//       ) : error ? (
//         <h2> {error.message} </h2>
//       ) : (
//         <div>
//           <h2>user fech form databse</h2>

//           <ul>
//             {user.map((person) => {
//               return <li key={person.id}>{person.name} </li>;
//             })}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default User;

// <--------------------------------------------------------------------------------------------->

function User(props) {
  // console.log(" in usere");
  // const [loading, setloading] = useState(true);
  //   const [error, setError] = useState("");
  //   const [user, setUser] = useState([]);
  const { loading, error, users } = props;

  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <div>
      {loading ? (
        <h2> Loading... </h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <div>
          <h2> user find sucessfull</h2>

          {users.map((person, idx) => {
            return <div key={idx}> {person.name}</div>;
          })}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (store) => {
  return store.User;
};

const mapDispatchToProps = (dispathc) => {
  return {
    fetchUser: () => {
      return dispathc(userFetchMiddleWare);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
