const LanguagesCard = ({ language }) => {
  return (
    <>
      {language && <button className="language-card">{language}</button>}
      {!language && (
        <button className="language-card">No languages to show!</button>
      )}
    </>
  );
};

export default LanguagesCard;
