import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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

const animateIn = (direction, delay) => css`
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${direction === 'up' ? fadeUp : direction === 'left' ? fadeLeft : fadeRight}
        0.7s ease-out ${delay} forwards;
    `}
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
  a { color: #ccc; text-decoration: none; &:hover { text-decoration: underline; } }
  span { color: #fff; }
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
  background: ${({ dark }) => (dark ? '#f5f5f5' : '#ffffff')};
  @media (max-width: 768px) { padding: 60px 1.5rem; }
`;

const BodyText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #444444;
  margin: 0 0 1.2rem;
  max-width: 860px;
  opacity: 0;
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.6s ease-out ${delay || '0s'} forwards;
    `}
`;

const ReadMore = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #111111;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  margin-top: 0.5rem;
`;

const SectionHeading = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #111111;
  text-transform: uppercase;
  margin: 0 0 2.5rem;
  opacity: 0;
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.5s ease-out forwards;
    `}
  @media (max-width: 768px) { font-size: 28px; }
`;

const SectionHeadingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;
const ViewAllBtn = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  color: #111111;
  border: 1.5px solid #111111;
  padding: 10px 24px;
  text-decoration: none;
  border-radius: 2px;
  white-space: nowrap;
  &:hover { background: #111111; color: #fff; }
`;

const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border: 1px solid #e0e0e0;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const GlanceCard = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  opacity: 0;
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.6s ease-out ${delay || '0s'} forwards;
    `}
`;

const GlanceImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
`;

const GlanceCaption = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #111111;
  padding: 1.25rem 1.25rem 1.5rem;
  margin: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: #e8e8e8;
  margin: 0 4rem;
`;

const BriefGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const BriefCard = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  opacity: 0;
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.6s ease-out ${delay || '0s'} forwards;
    `}
  &:hover { background: #f9f9f9; }
`;

const BriefCardTitle = styled.h4`
  font-size: 15px;
  font-weight: 700;
  color: #2d6a2d;
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const BriefList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    font-size: 16px;
    color: #444444;
    line-height: 1.6;
    padding: 6px 0;
    border-bottom: 0.5px solid #f0f0f0;
    &:last-child { border-bottom: none; }
    &::before {
      content: '→';
      color: #C8922A;
      margin-right: 8px;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #e0e0e0;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  margin-bottom: 3rem;
  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
`;

const StatCard = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  text-align: center;
  opacity: 0;
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeUp} 0.6s ease-out ${delay || '0s'} forwards;
    `}
  .num {
    font-size: 40px;
    font-weight: 700;
    color: #2d6a2d;
    line-height: 1;
  }
  .lbl {
    font-size: 15px;
    color: #666666;
    margin-top: 8px;
    line-height: 1.4;
  }
`;

const DesignPoint = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding: 2rem 0;
  border-bottom: 0.5px solid #e0e0e0;
  opacity: 0;
  ${({ isVisible, delay }) =>
    isVisible &&
    css`
      animation: ${fadeLeft} 0.6s ease-out ${delay || '0s'} forwards;
    `}
  &:last-child { border-bottom: none; }
`;

const DesignNum = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #2d6a2d;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const DesignText = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #111111;
    margin: 0 0 8px;
  }
  p {
    font-size: 17px;
    line-height: 1.7;
    color: #444444;
    margin: 0;
  }
`;

const GAFProject = () => {
  const [expanded, setExpanded] = useState(false);

  const [aboutRef, aboutVisible]       = useScrollAnimation(0.2);
  const [glanceRef, glanceVisible]     = useScrollAnimation(0.2);
  const [briefRef, briefVisible]       = useScrollAnimation(0.2);
  const [rendersRef, rendersVisible]   = useScrollAnimation(0.2);
  const [designRef, designVisible]     = useScrollAnimation(0.2);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImg src={require('../../images/page_1.jpg')} alt="GAF Special Needs Center" />
        <HeroOverlay />
        <HeroText>
          <h1>GAF Special Needs Center</h1>
        </HeroText>
        <Breadcrumb>
          <FaHome /> · <Link to="/">Home</Link> · <Link to="/infrastructure">Infrastructure</Link> · <span>GAF Special Needs Center</span>
        </Breadcrumb>
      </HeroSection>

      <HeroSpacer />

      <ContentWrapper>

        {/* About */}
        <Section ref={aboutRef}>
          <BodyText isVisible={aboutVisible} delay="0s">
            The Ghana Armed Forces Special Needs Center at Burma Camp, Accra is a
            landmark project delivered by All Day Ventures for the Ghana Armed Forces.
            The center provides dedicated education, therapy, and emotional support
            for children with autism spectrum disorder (ASD) and similar
            neurodevelopmental conditions — serving the families of Ghana's military
            personnel.
          </BodyText>
          {expanded && (
            <>
              <BodyText isVisible={aboutVisible} delay="0.15s">
                The facility spans over 10,570 sqm across four floors, housing 42
                autism-friendly classrooms, sensory integration rooms, speech and
                language therapy suites, occupational therapy rooms, and behavioural
                counselling spaces. It also includes a parents' resource and training
                centre, multi-purpose hall, secure playgrounds, sensory gardens, and
                a full administrative block.
              </BodyText>
              <BodyText isVisible={aboutVisible} delay="0.3s">
                Designed by Eighth Urban Studios, the building features colorful
                vertical fins along its facade, generous courtyard spaces, rooftop
                solar panels, and a basketball court and football field — creating
                an environment that is stimulating yet calming for its young users.
                This initiative aligns with GAF's welfare goals and Ghana's inclusive
                education policy.
              </BodyText>
            </>
          )}
          <ReadMore onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Read Less' : 'Read More'}
          </ReadMore>
        </Section>

        <Divider />

        {/* At a Glance */}
        <Section dark ref={glanceRef}>
          <SectionHeading isVisible={glanceVisible}>At a Glance</SectionHeading>
          <StatsGrid>
            <StatCard isVisible={glanceVisible} delay="0.1s">
              <div className="num">42</div>
              <div className="lbl">Autism-friendly classrooms</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.2s">
              <div className="num">4</div>
              <div className="lbl">Floor levels</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.3s">
              <div className="num">10,570</div>
              <div className="lbl">sqm total area</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.4s">
              <div className="num">3</div>
              <div className="lbl">Courtyard spaces</div>
            </StatCard>
          </StatsGrid>

          <ThreeGrid>
            <GlanceCard isVisible={glanceVisible} delay="0.2s">
              <GlanceImg src={require('../../images/page_14.jpg')} alt="Aerial view" />
              <GlanceCaption>4-storey facility with rooftop solar panels and green courtyard spaces.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={glanceVisible} delay="0.35s">
              <GlanceImg src={require('../../images/page_17.jpg')} alt="Front elevation" />
              <GlanceCaption>Colorful vertical fin facade designed to engage and welcome young students.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={glanceVisible} delay="0.5s">
              <GlanceImg src={require('../../images/page_18.jpg')} alt="Grounds" />
              <GlanceCaption>Football field, basketball court, and secure sensory playgrounds on site.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Design Brief */}
        <Section ref={briefRef}>
          <SectionHeading isVisible={briefVisible}>Design Brief</SectionHeading>
          <BriefGrid>
            <BriefCard isVisible={briefVisible} delay="0.1s">
              <BriefCardTitle>Teaching & Learning</BriefCardTitle>
              <BriefList>
                <li>42 autism-friendly classrooms</li>
                <li>Speech and language therapy rooms</li>
                <li>Occupational therapy rooms</li>
                <li>Behavioural therapy & counselling rooms</li>
                <li>Sensory integration rooms</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={briefVisible} delay="0.2s">
              <BriefCardTitle>Staff Facilities</BriefCardTitle>
              <BriefList>
                <li>Teaching staff offices</li>
                <li>Therapy staff offices</li>
                <li>Staff lounge and rest area</li>
                <li>Parents' training and resource centre</li>
                <li>Multi-purpose training / workshop hall</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={briefVisible} delay="0.3s">
              <BriefCardTitle>Outdoor & Recreation</BriefCardTitle>
              <BriefList>
                <li>Secure playgrounds (active play)</li>
                <li>Quiet outdoor retreat spaces</li>
                <li>Sensory gardens</li>
                <li>Covered outdoor play areas</li>
                <li>Outdoor seating and shaded areas</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={briefVisible} delay="0.4s">
              <BriefCardTitle>Administration</BriefCardTitle>
              <BriefList>
                <li>Reception and waiting area</li>
                <li>School administration offices</li>
                <li>Head teacher / director's office</li>
                <li>Meeting and conference rooms</li>
                <li>Records and secure storage rooms</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={briefVisible} delay="0.5s">
              <BriefCardTitle>Utility & Services</BriefCardTitle>
              <BriefList>
                <li>General storage rooms</li>
                <li>Learning materials & equipment storage</li>
                <li>Janitorial / cleaners' rooms</li>
                <li>Maintenance and services rooms</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={briefVisible} delay="0.6s">
              <BriefCardTitle>Circulation & Support</BriefCardTitle>
              <BriefList>
                <li>Wide, uncluttered corridors</li>
                <li>Waiting alcoves and transition spaces</li>
                <li>Controlled entrance and security post</li>
                <li>Sick bay / first aid room</li>
              </BriefList>
            </BriefCard>
          </BriefGrid>
        </Section>

        <Divider />

        {/* Renders */}
        <Section dark ref={rendersRef}>
          <SectionHeadingRow>
            <SectionHeading isVisible={rendersVisible} style={{ margin: 0 }}>
              Architectural Renders
            </SectionHeading>
            <ViewAllBtn to="/infrastructure">Back to Infrastructure</ViewAllBtn>
          </SectionHeadingRow>
          <ThreeGrid>
            <GlanceCard isVisible={rendersVisible} delay="0.2s">
              <GlanceImg src={require('../../images/page_16.jpg')} alt="Night render" />
              <GlanceCaption>Night aerial render showing the illuminated facade and courtyard.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={rendersVisible} delay="0.35s">
              <GlanceImg src={require('../../images/page_13.jpg')} alt="Day elevation" />
              <GlanceCaption>Street-level day render of the main entrance and colorful fins.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={rendersVisible} delay="0.5s">
              <GlanceImg src={require('../../images/page_1.jpg')} alt="Aerial day" />
              <GlanceCaption>Aerial day render showing the full site including sports facilities.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Interior Design */}
        <Section ref={designRef}>
          <SectionHeading isVisible={designVisible}>Interior Design Strategy</SectionHeading>
          <DesignPoint isVisible={designVisible} delay="0.1s">
            <DesignNum>1</DesignNum>
            <DesignText>
              <h4>Calm, predictable, and low-sensory</h4>
              <p>Spaces minimize overstimulation, creating a safe and consistent
              environment where children can focus and feel secure.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={designVisible} delay="0.2s">
            <DesignNum>2</DesignNum>
            <DesignText>
              <h4>Acoustic ceilings, soft lighting, and muted colours</h4>
              <p>Sound-absorbing materials reduce noise. Soft, even lighting avoids
              harsh contrasts. Neutral colour palettes promote calmness.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={designVisible} delay="0.3s">
            <DesignNum>3</DesignNum>
            <DesignText>
              <h4>Simple, sturdy, and adjustable furniture</h4>
              <p>Flexible furniture with comfortable flooring throughout — designed
              with safety in mind for children who may fall.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={designVisible} delay="0.4s">
            <DesignNum>4</DesignNum>
            <DesignText>
              <h4>Clear zones with wide paths and ample personal space</h4>
              <p>Room layouts have defined activity zones with wide, uncluttered
              circulation paths giving children space to move safely.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={designVisible} delay="0.5s">
            <DesignNum>5</DesignNum>
            <DesignText>
              <h4>Smooth walls and minimal clutter</h4>
              <p>Wall surfaces kept smooth and free from excessive decoration
              to reduce visual noise and help children maintain focus.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={designVisible} delay="0.6s">
            <DesignNum>6</DesignNum>
            <DesignText>
              <h4>Sound-absorbing materials, sensory tools, and visual cues</h4>
              <p>Sensory integration tools embedded throughout, with clear visual
              cues to help children navigate spaces independently.</p>
            </DesignText>
          </DesignPoint>
        </Section>

      </ContentWrapper>
    </PageWrapper>
  );
};

export default GAFProject;