import LanguagesCard from "./LanguagesCard";

const RepoCard = ({ repo }) => {
  return (
    <>
      <div className="repo-card">
        <div className="repo-details">
          <h4 style={{ fontWeight: "400", fontSize: "1.1rem" }}>{repo.name}</h4>
          <p
            style={{
              paddingTop: "5px",
              fontSize: "0.9rem",
              lineHeight: "1.6em",
            }}
          >
            {repo.description}
          </p>
          <p
            style={{
              marginTop: "1rem",
            }}
          >
            <LanguagesCard language={repo.language} />
          </p>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
