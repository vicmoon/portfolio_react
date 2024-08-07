import React from "react";

function Filter({ selectedLanguage, onLanguageChange }) {
  const languages = [
    "All",
    "JavaScript",
    "CSS",
    "HTML",
    "Phaser",
    "API",
    "React",
    "DOM",
  ]; // Add more languages as needed

  return (
    <div className="filter">
      <label htmlFor="language-select">Filter: </label>
      <select
        className="select"
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
