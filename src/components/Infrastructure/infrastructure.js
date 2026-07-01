import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeLeft = keyframes`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeRight = keyframes`
  from { opacity: 0; transform: translateX(40px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const PageWrapper = styled.div`
  position: relative;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  z-index: 0;
`;

const HeroImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.55)
  );
  z-index: 1;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  padding: 3rem 4rem 0;
  h1 {
    color: #fff;
    font-size: 52px;
    line-height: 1.1;
    font-weight: 600;
    margin: 0;
  }
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 0;
    h1 {
      font-size: 36px;
    }
  }
`;

const Breadcrumb = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem 4rem 2rem;
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 14px;
  color: #ccc;
  a {
    color: #ccc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: #fff;
  }
`;

const HeroSpacer = styled.div`
  height: 70vh;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
`;

const Section = styled.div`
  padding: 80px 4rem;
  background: ${({ dark }) => (dark ? "#f5f5f5" : "#ffffff")};
  @media (max-width: 768px) {
    padding: 60px 1.5rem;
  }
`;

const PortfolioHeading = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #111111;
  letter-spacing: -0.5px;
  margin: 0 0 3rem;
  text-transform: uppercase;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.5s ease-out forwards;
    `}

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: stretch;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImageBox = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
`;

const ClickHint = styled.span`
  margin-top: auto;
  padding-top: 12px;

  font-size: 13px;
  font-weight: 600;
  color: #c8922a;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.3s ease, opacity 0.3s ease;

  &::after {
    content: "→";
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  @media (min-width: 961px) {
    opacity: 0;
  }
`;

const ProjectTextBox = styled.div`
  padding: 1.25rem 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;               /* Fill remaining height */
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-top: none;
  border-radius: 0 0 4px 4px;
  transition: border-color 0.3s ease;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #111111;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: "→";
    font-size: 18px;
    color: #c8922a;
    transition: transform 0.3s ease;
    display: inline-block;
    flex-shrink: 0;
  }
`;

const ProjectDesc = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #666666;
  margin: 0;
  max-width: 480px;
`;

const ProjectThumb = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;
  border-radius: 4px;
  -webkit-tap-highlight-color: rgba(200, 146, 42, 0.1);

  ${({ isVisible, side, delay }) =>
    isVisible &&
    css`
      animation: ${side === "left" ? fadeLeft : fadeRight} 0.7s ease-out
        ${delay || "0s"} forwards;
    `}

  &:hover ${ProjectImageBox} img {
    transform: scale(1.04);
  }

  &:hover ${ProjectTitle}::after {
    transform: translateX(5px);
  }

  &:hover ${ClickHint} {
    opacity: 1;
    gap: 10px;
  }

  &:hover ${ClickHint}::after {
    transform: translateX(3px);
  }

  &:hover ${ProjectTextBox} {
    border-color: #c8922a;
  }

  &:active ${ProjectTextBox} {
    background: #fffaf3;
    border-color: #c8922a;
  }

  @media (max-width: 960px) {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);

    &:hover ${ProjectImageBox} img {
      transform: none;
    }

    &:active ${ProjectTextBox} {
      background: #fffaf3;
      border-color: #c8922a;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #e8e8e8;
  margin: 0 4rem;
`;

const Infrastructure = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.2);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImg
          src={require("../../images/page_16.jpg")}
          alt="Infrastructure"
        />
        <HeroOverlay />
        <HeroText>
          <h1>Infrastructure</h1>
        </HeroText>
        <Breadcrumb>
          <FaHome /> · <a href="/">Home</a> · <span>Infrastructure</span>
        </Breadcrumb>
      </HeroSection>

      <HeroSpacer />

      <ContentWrapper>
        <Section ref={sectionRef}>
          <PortfolioHeading isVisible={sectionVisible}>
            Business Portfolio
          </PortfolioHeading>

          <PortfolioGrid>
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                height: "100%",
              }}
              to="/infrastructure/gaf"
            >
              <ProjectThumb isVisible={sectionVisible} side="left" delay="0.2s">
                <ProjectImageBox>
                  <img
                    src={require("../../images/page_1.jpg")}
                    alt="GAF Special Needs Center"
                  />
                </ProjectImageBox>
                <ProjectTextBox>
                  <ProjectTitle>GAF Special Needs Center</ProjectTitle>
                  <ProjectDesc>
                    Delivering a 42-classroom special needs school at Burma Camp
                    for the Ghana Armed Forces — education, therapy, and sensory
                    spaces across 10,000+ sqm.
                  </ProjectDesc>
                  <ClickHint>View Project</ClickHint>
                </ProjectTextBox>
              </ProjectThumb>
            </Link>

            <ProjectThumb isVisible={sectionVisible} side="right" delay="0.4s">
              <ProjectImageBox>
                <img
                  src={require("../../images/infrastructure1.jpeg")}
                  alt="Industrial Development"
                />
              </ProjectImageBox>
              <ProjectTextBox>
                <ProjectTitle style={{ cursor: "default" }}>
                  Industrial development
                  <span style={{ opacity: 0, pointerEvents: "none" }}>→</span>
                </ProjectTitle>
                <ProjectDesc>
                  Construction and logistics infrastructure designed to enable
                  long-term economic growth across Ghanaian communities.
                </ProjectDesc>
              </ProjectTextBox>
            </ProjectThumb>

            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                height: "100%",
              }}
              to="/infrastructure/railway-project"
            >
              <ProjectThumb isVisible={sectionVisible} side="left" delay="0.6s">
                <ProjectImageBox>
                  <img
                    src={require("../../images/railway-cover.png")}
                    alt="Ghana Integrated Railway & New Town Development Project"
                  />
                </ProjectImageBox>

                <ProjectTextBox>
                  <ProjectTitle>
                    Ghana Integrated Railway & New Town Development
                  </ProjectTitle>

                  <ProjectDesc>
                    A national railway and transit-oriented development
                    initiative connecting major economic corridors while
                    creating new towns, logistics hubs, and sustainable urban
                    communities across Ghana.
                  </ProjectDesc>

                  <ClickHint>View Project</ClickHint>
                </ProjectTextBox>
              </ProjectThumb>
            </Link>
          </PortfolioGrid>
        </Section>

        <Divider />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Infrastructure;
