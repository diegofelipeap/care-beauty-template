import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  margin: 2rem auto;
`;

export const MapContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
  margin: 2rem auto;
  iframe {
    width: 100%;
    max-width: 600px;
    height: 450px;
    border: none;
    border-radius: 10px;
  }
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const IconLink = styled.a`
  text-decoration: none;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  p{
    text-align: center;
  }
`;

export const AboutText = styled.p`
 text-align: center;
 font-weight: bolder;
 color: #d070a3;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Location = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
`;

export const Section = styled.section`
  padding: 50px 0;
  background: ${(props) => (props.light ? "#f9f9f9" : "#fff")};
`;

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    text-align: center;
    margin-top: 10px;
    font-size: 1rem;
    color: #555;
  }
`;
