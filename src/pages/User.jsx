import axios from "axios";
import { useEffect, useState } from "react";

function UserData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

    useEffect(() => {
    axios
      // .get(`https://randomuser.me/api/?results=${Math.floor(Math.random()*100-70)+70}`)
      // .get("https://randomuser.me/api/?nat=pakistan&results=100")
      .get(`https://randomuser.me/api/?results=87`)
      .then((response) => {
        setUsers(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loader"><h1>Loading...</h1></div> 
  if (error) return <div className="loader"> <h1>Error: {error}</h1></div>;

  return (
    <>
      <h1><span className="animatedHeartBeat">❤️🫀</span>Heart touching Users</h1>
     <div className="userList">
      {users.map((user, index) => (
        <div key={index} className="user">
          <div className="userIntro">
          <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}'s Image`} />
          <h3><strong>{user.gender==='female'?'Miss':'Mr'}</strong>. {user.name.first} {user.name.last}</h3>
          </div>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>
            Location: {user.location.city}, {user.location.country}
          </p>
          <button className="gradientButton">Contact</button>
        </div>
      ))}
    </div>
          </>
  );
}

export default UserData;
