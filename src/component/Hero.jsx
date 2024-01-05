import React from "react";

import "/src/index.css"
function Hero() {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Merhaba</h1>
        <p className="description">
          Junior Frontend Developer. <br />
          9 aydır bu mesleğin içindeyim <br /> kendimi geliştiriyorum. <br />
          Aşağıdaki butondan bana mail atıp iletişime geçebilirsin.
        </p>
        <a href="mailto:myemail@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img src="/src/assets/hero/hero.jpg" alt="Hero image of me" className="heroImg" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
}
export default Hero