import React from 'react';

function Filter({ selectedLanguage, onLanguageChange }) {
  const languages = [
    'All',
    'JavaScript',
    'CSS',
    'HTML',
    'Phaser',
    'Python',
    'API',
    'React',
  ]; // Add more languages as needed

  return (
    <div className="filter">
      <label htmlFor="language-select"></label>
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
