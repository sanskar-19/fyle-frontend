import Pagination from "../Components/Pagination";
import { useEffect } from "react";
import RepoCard from "../Components/RepoCard";
import UserDetails from "../Components/UserDetails";

const GitListings = ({ repositories, profile, setrepos, setloading, user }) => {
  useEffect(() => {
    console.log(repositories);
  }, []);
  return (
    <>
      <div className="user-details-page">
        <UserDetails profile={profile} />
        <Pagination setrepos={setrepos} user={user} setloading={setloading} />
        <div className="repository-container">
          {repositories.map((element) => {
            return (
              <div className="repository-card" key={element.id}>
                <RepoCard repo={element} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GitListings;
