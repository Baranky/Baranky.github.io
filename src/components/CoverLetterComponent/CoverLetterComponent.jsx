import React from "react";
import "./CoverLetterComponent.css";

const CoverLetterComponent = () => {
  return (
    <div className="cover-letter-component__root">
      <span className="cover-letter-component__name">Baran Kaya</span>
      <span className="cover-letter-component__title">
      Java Developer | software Developer
      </span>
      <span className="cover-letter-component__content">
        Java ve Spring Boot kullanarak dağıtık sistemler geliştirme, Kafka, RabbitMQ, Redis ve Docker gibi teknolojilerle ölçeklenebilir sistemler kurma ve mikroservis entegrasyonu ile CI/CD süreçlerinde uzmanlık kazanma konusunda kendimi geliştirmek isteyen bir Yazılım Geliştiricisiyim.  
      </span> 
     </div>
  );
};

export default CoverLetterComponent;
