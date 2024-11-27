import React from 'react';
import './styles.scss';

const AppLayout: React.FC = () => {
  return (
    <div className="layoutContainer">
      <div className="header">
        <h1>My App</h1>
      </div>
      <div className="small-banner"><h2>Smaller Banner</h2></div>
      <div className="banner"><h2>Banner</h2></div>
      <div className="left-aside"><h2>Left aside</h2></div>
      <div className="main">
        <h3>What is Lorem Ipsum?</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="low-content"><h3>Low Content</h3></div>
      <div className="footer"><p>Copyright chu chu</p></div>
    </div>
  );
};

export default AppLayout;