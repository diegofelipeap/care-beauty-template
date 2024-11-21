import Navbar from "../../components/Navbar/Navbar";
import Slider from "react-slick";
import {
  Container,
  Title,
  Location,
  Section,
  CarouselContainer,
  MapContainer,
  ContactIcons,
  IconLink,
  AboutText
} from "./styles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const HomePage = () => {
  const carouselImagesHome = [
    "src/assets/caroussel01.jpg",
    "src/assets/caroussel02.jpg",
    "src/assets/caroussel03.jpg",
    "src/assets/caroussel04.jpg",
  ];

  const carouselImagesServices = [
    { src: "src/assets/SECOND_slider01.jpg", alt: "Maquiagem Profissional" },
    { src: "src/assets/SECOND_slider02.jpg", alt: "Design de Sobrancelhas" },
    { src: "src/assets/SECOND_slider03.jpg", alt: "Depilação" },
    { src: "src/assets/SECOND_slider04.jpg", alt: "PMU" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Navbar />
      <Section id="home">
        <Container>
          <CarouselContainer>
            <Slider {...sliderSettings}>
              {carouselImagesHome.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Imagem ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </CarouselContainer>
        </Container>
      </Section>

      <Section id="sobre">
        <Container>
          <Title>Sobre Nós</Title>
          <AboutText>
            Somos uma equipe dedicada a oferecer serviços de beleza com alta qualidade e cuidado especial.
            Nossa missão é garantir que cada cliente se sinta único e confiante. Temos o compromisso de oferecer experiências inesquecíveis.
          </AboutText>
        </Container>
      </Section>

      <Section id="servicos">
        <Container>
          <Title>Nossos Serviços</Title>
          <CarouselContainer>
            <Slider {...sliderSettings}>
              {carouselImagesServices.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={image.alt} />
                  <p>{image.alt}</p>
                </div>
              ))}
            </Slider>
          </CarouselContainer>
        </Container>
      </Section>

      <Section id="localizacao">
        <Container>
          <Title>Localização</Title>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.6318314969967!2d-36.58896898845802!3d-10.291219311662699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70454e9e337dc4b%3A0x4e756f0799740f1d!2sPra%C3%A7a%20Doze%20de%20Abril%20-%20Centro%20Hist%C3%B3rico%2C%20Penedo%20-%20AL%2C%2057200-000!5e0!3m2!1spt-BR!2sbr!4v1732196378576!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </MapContainer>
          <Location>
            <strong>Endereço:</strong> Penedo - Alagoas
          </Location>
        </Container>
      </Section>

      <Section id="contato">
        <Container>
          <Title>Contato</Title>
          <p>Entre em contato conosco para agendar o seu horário!</p>
          <ContactIcons>
            <IconLink href="https://wa.me/5582993174680" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={32} color="#25D366" />
            </IconLink>
            <IconLink href="https://www.instagram.com/felipeapdiego" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} color="#E4405F" />
            </IconLink>
          </ContactIcons>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
