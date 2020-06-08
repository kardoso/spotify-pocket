import React, { useEffect, useState } from "react";

import "./Login.scss";

import { debounce } from "lodash";

import { endpoints } from "../../helpers/endpoints";

import { Logo } from "../../components";

import backgroundImageMobile from "../../assets/images/app-intro-1.jpg";
import backgroundImageDesktop from "../../assets/images/app-intro-2.jpg";

const Login = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onResizeHandler = (e) => {
    const { innerWidth } = e.target;

    if (innerWidth <= 768) {
      setIsMobile(true);

      return;
    }

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(onResizeHandler, 250));

    return () => {
      window.removeEventListener("resize", debounce(onResizeHandler));
    };
  }, []);

  const screenWidth = window.innerWidth;

  return (
    <main
      className="login"
      data-testid="login"
      style={{
        backgroundImage: `url(${
          isMobile || screenWidth <= 768
            ? backgroundImageMobile
            : backgroundImageDesktop
        })`,
      }}
    >
      <div className="container">
        <Logo />
        <h2 className="login__microcopy">
          Não toca a música inteira,
          <strong>
            Mas toca o seu{" "}
            <span
              role="img"
              className="login__microcopy__heart"
              aria-label="Coração"
            >
              ❤️
            </span>
          </strong>
        </h2>

        <a href={endpoints.getAuthorization.url} className="login__auth-button">
          Entrar com spotify
        </a>
      </div>
    </main>
  );
};

export default Login;
