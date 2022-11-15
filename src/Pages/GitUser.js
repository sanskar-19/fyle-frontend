import { useState } from "react";
import { GetAllRepositories, GetUserProfile } from "../Utility/Utility";

const GitUser = ({
  setusername,
  setrepos,
  setloading,
  setprofile,
  settotal,
}) => {
  const [user, setuser] = useState("");
  const submitUsername = async (e) => {
    setloading(true);
    e.preventDefault();
    setusername(user);
    let response_getrepos = await GetAllRepositories(user, 1);
    if (response_getrepos[0] === 200) {
      setrepos(response_getrepos[1].data);
    } else {
      alert("Unable to fetch Repositories! Kindly check username");
      setusername();
      setloading(false);
    }

    let response_getuserprofile = await GetUserProfile(user);
    if (response_getuserprofile[0] === 200) {
      setprofile(response_getuserprofile[1].data);
      setloading(false);
    } else {
      alert("Unable to fetch Profile! Kindly check username");
      setusername();
      setloading(false);
    }
  };
  return (
    <>
      <div className="form-wrapper">
        <p style={{ textAlign: "center", marginBottom: "1rem" }}>
          Please Enter a valid github Username!
        </p>
        <form onSubmit={submitUsername}>
          <div className="input-username">
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setuser(e.target.value);
              }}
              value={user}
              required
            />
          </div>
          <button type="submit">Get Repositories</button>
        </form>
      </div>
    </>
  );
};

export default GitUser;
