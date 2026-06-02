import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Link } from "react-router-dom";

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
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55));
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
    h1 { font-size: 36px; }
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
  a { color: #ccc; text-decoration: underline; }
  span { color: #fff; }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
`;

const Section = styled.div`
  padding: 80px 4rem;
  background: ${({ dark }) => (dark ? '#f5f5f5' : '#ffffff')};
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
  @media (max-width: 768px) { font-size: 28px; }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const ProjectThumb = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ProjectImageBox = styled.div`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  &:hover img { transform: scale(1.04); }
`;

const ProjectTextBox = styled.div`
  padding: 1.5rem 0 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #111111;
  margin: 0 0 12px;
`;

const ProjectDesc = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #666666;
  margin: 0;
  max-width: 480px;
`;

const Divider = styled.div`
  height: 1px;
  background: #e8e8e8;
  margin: 0 4rem;
`;

const Infrastructure = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroImg src={require('../../images/page_16.jpg')} alt="Infrastructure" />
        <HeroOverlay />
        <HeroText>
          <h1>Infrastructure</h1>
        </HeroText>
        <Breadcrumb>
        <FaHome /> · <a href="/">Home</a> · <span>Infrastructure</span>
        </Breadcrumb>
      </HeroSection>

      <ContentWrapper>
        <Section>
          <PortfolioHeading>Business Portfolio</PortfolioHeading>
          <PortfolioGrid>
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/infrastructure/gaf">
            <ProjectThumb>
              <ProjectImageBox>
                <img src={require('../../images/page_1.jpg')} alt="GAF Special Needs Center" />
              </ProjectImageBox>
              <ProjectTextBox>
                <ProjectTitle>GAF Special Needs Center</ProjectTitle>
                <ProjectDesc>
                  Delivering a 42-classroom special needs school at Burma Camp for
                  the Ghana Armed Forces — education, therapy, and sensory spaces
                  across 10,000+ sqm.
                </ProjectDesc>
              </ProjectTextBox>
            </ProjectThumb>
            </Link>
            

            <ProjectThumb>
              <ProjectImageBox>
                <img src={require('../../images/infrastructure1.jpeg')} alt="Industrial Development" />
              </ProjectImageBox>
              <ProjectTextBox>
                <ProjectTitle>Industrial development</ProjectTitle>
                <ProjectDesc>
                  Construction and logistics infrastructure designed to enable
                  long-term economic growth across Ghanaian communities.
                </ProjectDesc>
              </ProjectTextBox>
            </ProjectThumb>
          </PortfolioGrid>
        </Section>

        <Divider />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Infrastructure;