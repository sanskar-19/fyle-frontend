import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

const UserDetails = ({ profile }) => {
  return (
    <>
      <div className="user-profile-wrapper">
        <div className="user-profile">
          <div className="user-avatar">
            <img src={profile.avatar_url} alt="Profile cannot be displayed" />
          </div>
          <div className="user-content">
            <div className="user-content-details">
              <h2>{profile.name}</h2>
              {!profile.bio && <p> No bio to display!</p>}
              {profile.bio && <p>{profile.bio}</p>}
              {!profile.location && <p>No location to display!</p>}
              {profile.location && (
                <p>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    style={{ marginRight: "10px" }}
                  />
                  {profile.location}
                </p>
              )}
              <p>
                Twitter : https://www.twitter.com/{profile.twitter_username}
              </p>
              <p>Profile Link : {profile.html_url}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
