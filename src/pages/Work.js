import React, { useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import details from '../components/workDetails';
import Footer from '../components/Footer';
import Filter from '../components/Filter';

function createCard(detail) {
  return (
    <Card
      key={detail.id}
      name={detail.name}
      image={detail.image}
      link={detail.link}
      gitHub_link={detail.gitHub_link}
      language={detail.language}
    />
  );
}

const Work = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const filteredDetails =
    selectedLanguage === 'All'
      ? details
      : details.filter((detail) => detail.language.includes(selectedLanguage));

  return (
    <>
      <Header />
      <div className="filter">
        <Filter
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>

      <div className="work container">{filteredDetails.map(createCard)}</div>
      <Footer />
    </>
  );
};

export default Work;
