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



const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: clip;
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
  min-width: 0;
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
  min-width: 0;
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
  min-width: 0;
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
  min-width: 0;
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

const RailwayProject = () => {
  const [expanded, setExpanded] = useState(false);

  const [aboutRef, aboutVisible]         = useScrollAnimation(0.2);
  const [glanceRef, glanceVisible]       = useScrollAnimation(0.2);
  const [networkRef, networkVisible]     = useScrollAnimation(0.2);
  const [urbanRef, urbanVisible]         = useScrollAnimation(0.2);
  const [solutionRef, solutionVisible]   = useScrollAnimation(0.2);
  const [engineRef, engineVisible]       = useScrollAnimation(0.2);
  const [economyRef, economyVisible]     = useScrollAnimation(0.2);
  const [investRef, investVisible]       = useScrollAnimation(0.2);
  const [revenueRef, revenueVisible]     = useScrollAnimation(0.2);
  const [financeRef, financeVisible]     = useScrollAnimation(0.2);
  const [benchmarkRef, benchmarkVisible] = useScrollAnimation(0.2);
  const [whyRef, whyVisible]             = useScrollAnimation(0.2);
  const [roadmapRef, roadmapVisible]     = useScrollAnimation(0.2);
  const [galleryRef, galleryVisible]     = useScrollAnimation(0.2);
  const [closingRef, closingVisible]     = useScrollAnimation(0.2);

  return (
    <PageWrapper>
      <HeroSection>
        <HeroImg src={require('../../images/railway/hero.png')} alt="Ghana Integrated Railway Project" />
        <HeroOverlay />
        <HeroText>
          <h1>Ghana Integrated Railway & New Town Development Project</h1>
        </HeroText>
        <Breadcrumb>
          <FaHome /> · <Link to="/">Home</Link> · <Link to="/infrastructure">Infrastructure</Link> · <span>Railway Project</span>
        </Breadcrumb>
      </HeroSection>

      <HeroSpacer />

      <ContentWrapper>

        {/* About */}
        <Section ref={aboutRef}>
          <BodyText isVisible={aboutVisible} delay="0s">
            The Ghana Integrated Railway & New Town Development Project is a
            transformative national infrastructure initiative designed to reshape
            transportation, logistics, housing, and regional economic growth.
            Rather than delivering only railway infrastructure, the project creates
            an integrated development platform where modern rail corridors,
            logistics hubs, industrial zones, and planned urban communities work
            together to unlock long-term national prosperity.
          </BodyText>
          {expanded && (
            <>
              <BodyText isVisible={aboutVisible} delay="0.15s">
                The development combines standard-gauge railway corridors with
                transit-oriented development (TOD), creating new economic centres
                connected by reliable passenger and freight rail services. New towns
                around railway stations will provide housing, commercial districts,
                educational facilities, healthcare, and employment opportunities.
              </BodyText>
              <BodyText isVisible={aboutVisible} delay="0.3s">
                Beyond improving mobility, the railway network is expected to
                reduce logistics costs, improve labour mobility, support
                industrialisation, stimulate private investment, and strengthen
                Ghana's position as a regional trade hub within West Africa.
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
              <div className="num">1,000+</div>
              <div className="lbl">Potential railway network (km)</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.2s">
              <div className="num">24</div>
              <div className="lbl">Hour economy support</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.3s">
              <div className="num">$11B+</div>
              <div className="lbl">Estimated investment</div>
            </StatCard>
            <StatCard isVisible={glanceVisible} delay="0.4s">
              <div className="num">Nationwide</div>
              <div className="lbl">Integrated rail development</div>
            </StatCard>
          </StatsGrid>

          <ThreeGrid>
            <GlanceCard isVisible={glanceVisible} delay="0.2s">
              <GlanceImg src={require('../../images/railway/network.png')} alt="National Railway Network" />
              <GlanceCaption>A modern standard-gauge railway system connecting Ghana's major cities, industrial zones, mining regions, ports, and agricultural corridors.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={glanceVisible} delay="0.35s">
              <GlanceImg src={require('../../images/railway/new-town.png')} alt="New Town Development" />
              <GlanceCaption>Railway stations become catalysts for new towns, commercial districts, affordable housing, education, healthcare and public services.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={glanceVisible} delay="0.5s">
              <GlanceImg src={require('../../images/railway/logistics.png')} alt="Economic Growth" />
              <GlanceCaption>Lower logistics costs, improved labour mobility, industrial expansion and stronger regional trade create sustainable long-term growth.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* National Railway Network */}
        <Section ref={networkRef}>
          <SectionHeading isVisible={networkVisible}>National Railway Network</SectionHeading>
          <DesignPoint isVisible={networkVisible} delay="0.1s">
            <DesignNum>1</DesignNum>
            <DesignText>
              <h4>North–South Backbone</h4>
              <p>A strategic railway spine connecting the southern ports to northern
              Ghana, supporting trade, mining, agriculture, passenger mobility and
              regional integration.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={networkVisible} delay="0.2s">
            <DesignNum>2</DesignNum>
            <DesignText>
              <h4>Coastal Economic Corridor</h4>
              <p>Modern rail infrastructure linking Ghana's major coastal cities,
              ports and industrial centres, improving freight efficiency and
              reducing logistics costs across the national economy.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={networkVisible} delay="0.3s">
            <DesignNum>3</DesignNum>
            <DesignText>
              <h4>Regional Branch Lines</h4>
              <p>Secondary railway lines extending connectivity into productive
              agricultural zones, mining districts and growing regional towns,
              ensuring inclusive national development.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={networkVisible} delay="0.4s">
            <DesignNum>4</DesignNum>
            <DesignText>
              <h4>Standard Gauge Infrastructure</h4>
              <p>Designed to international standards, the railway network will
              accommodate both passenger and freight operations while allowing
              future expansion as demand increases.</p>
            </DesignText>
          </DesignPoint>
        </Section>

        <Divider />

        {/* Urban Development Model */}
        <Section dark ref={urbanRef}>
          <SectionHeading isVisible={urbanVisible}>Urban Development Model</SectionHeading>
          <BodyText isVisible={urbanVisible} delay="0s">
            The railway network is supported by a Transit-Oriented Development (TOD)
            strategy that integrates transport infrastructure with new urban centres.
            Railway stations become catalysts for commercial investment, residential
            communities, education, healthcare and employment opportunities.
          </BodyText>
          <ThreeGrid>
            <GlanceCard isVisible={urbanVisible} delay="0.2s">
              <GlanceImg src={require('../../images/railway/tod.png')} alt="Transit Oriented Development" />
              <GlanceCaption>Compact, walkable communities centred around modern railway stations encourage sustainable urban growth while reducing congestion.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={urbanVisible} delay="0.35s">
              <GlanceImg src={require('../../images/railway/housing.png')} alt="Housing Development" />
              <GlanceCaption>Affordable residential communities supported by schools, healthcare facilities, parks, retail districts and public infrastructure.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={urbanVisible} delay="0.5s">
              <GlanceImg src={require('../../images/railway/industry.png')} alt="Industrial Development" />
              <GlanceCaption>Industrial parks and logistics centres along railway corridors improve freight movement and stimulate manufacturing investment.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Problem -> Solution */}
        <Section ref={solutionRef}>
          <SectionHeading isVisible={solutionVisible}>Problem → Solution Framework</SectionHeading>
          <BriefGrid>
            <BriefCard isVisible={solutionVisible} delay="0.1s">
              <BriefCardTitle>Urban Congestion</BriefCardTitle>
              <BriefList>
                <li>High-capacity passenger rail</li>
                <li>Reduced traffic congestion</li>
                <li>Improved commuting efficiency</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={solutionVisible} delay="0.2s">
              <BriefCardTitle>Housing Shortages</BriefCardTitle>
              <BriefList>
                <li>New railway towns</li>
                <li>Structured housing development</li>
                <li>Reduced pressure on existing cities</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={solutionVisible} delay="0.3s">
              <BriefCardTitle>High Logistics Costs</BriefCardTitle>
              <BriefList>
                <li>Efficient freight rail</li>
                <li>Lower transport costs for mining & agriculture</li>
                <li>Improved import-export competitiveness</li>
              </BriefList>
            </BriefCard>
            <BriefCard isVisible={solutionVisible} delay="0.4s">
              <BriefCardTitle>Regional Inequality</BriefCardTitle>
              <BriefList>
                <li>Railway connectivity beyond major cities</li>
                <li>Distributed investment nationwide</li>
                <li>New economic opportunities</li>
              </BriefList>
            </BriefCard>
          </BriefGrid>
        </Section>

        <Divider />

        {/* Economic Engine */}
        <Section dark ref={engineRef}>
          <SectionHeading isVisible={engineVisible}>Economic Engine</SectionHeading>
          <DesignPoint isVisible={engineVisible} delay="0.1s">
            <DesignNum>1</DesignNum>
            <DesignText>
              <h4>Expanded Labour Mobility</h4>
              <p>Reliable rail transport connects people with employment
              opportunities across regions, improving productivity and
              supporting labour market growth.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={engineVisible} delay="0.2s">
            <DesignNum>2</DesignNum>
            <DesignText>
              <h4>Industrial Growth</h4>
              <p>Lower freight costs encourage manufacturing, mining, agriculture
              and export-oriented industries to expand along strategic railway
              corridors.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={engineVisible} delay="0.3s">
            <DesignNum>3</DesignNum>
            <DesignText>
              <h4>Efficient Logistics</h4>
              <p>Modern freight infrastructure significantly reduces transport
              time while improving reliability for businesses throughout Ghana.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={engineVisible} delay="0.4s">
            <DesignNum>4</DesignNum>
            <DesignText>
              <h4>Sustained GDP Growth</h4>
              <p>Together, railway infrastructure, urban development and
              logistics investment become long-term drivers of national
              economic expansion.</p>
            </DesignText>
          </DesignPoint>
        </Section>

        <Divider />

        {/* 24-Hour Economy */}
        <Section ref={economyRef}>
          <SectionHeading isVisible={economyVisible}>Supporting Ghana's 24-Hour Economy</SectionHeading>
          <ThreeGrid>
            <GlanceCard isVisible={economyVisible} delay="0.2s">
              <GlanceImg src={require('../../images/railway/night-train.png')} alt="Night Transport" />
              <GlanceCaption>Passenger rail enables safe and affordable movement of workers throughout the day and night, supporting a continuous workforce.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={economyVisible} delay="0.35s">
              <GlanceImg src={require('../../images/railway/freight.png')} alt="Freight" />
              <GlanceCaption>Continuous freight operations improve supply chains while reducing road congestion and increasing resilience across industries.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={economyVisible} delay="0.5s">
              <GlanceImg src={require('../../images/railway/economy.png')} alt="Economy" />
              <GlanceCaption>The railway supports industrial production, commerce and regional development by enabling uninterrupted movement of goods and people.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Investment Overview */}
        <Section dark ref={investRef}>
          <SectionHeading isVisible={investVisible}>Investment Overview</SectionHeading>
          <StatsGrid>
            <StatCard isVisible={investVisible} delay="0.1s">
              <div className="num">$11B</div>
              <div className="lbl">Starting investment estimate</div>
            </StatCard>
            <StatCard isVisible={investVisible} delay="0.2s">
              <div className="num">$17.5B</div>
              <div className="lbl">Upper investment estimate</div>
            </StatCard>
            <StatCard isVisible={investVisible} delay="0.3s">
              <div className="num">PPP</div>
              <div className="lbl">Public-Private Partnership model</div>
            </StatCard>
            <StatCard isVisible={investVisible} delay="0.4s">
              <div className="num">Phased</div>
              <div className="lbl">Progressive implementation strategy</div>
            </StatCard>
          </StatsGrid>
          <BodyText isVisible={investVisible} delay="0.1s">
            The project is structured as a phased national infrastructure
            programme with flexible financing mechanisms that combine
            government participation, institutional investment, development
            finance and private capital.
          </BodyText>
        </Section>

        <Divider />

        {/* Revenue Model */}
        <Section ref={revenueRef}>
          <SectionHeading isVisible={revenueVisible}>Revenue Model</SectionHeading>
          <DesignPoint isVisible={revenueVisible} delay="0.1s">
            <DesignNum>$</DesignNum>
            <DesignText>
              <h4>Passenger Rail Services</h4>
              <p>Long-term fare revenue generated from intercity and commuter
              rail services operating throughout the national network.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={revenueVisible} delay="0.2s">
            <DesignNum>$</DesignNum>
            <DesignText>
              <h4>Freight Logistics</h4>
              <p>Bulk cargo transport for mining, agriculture, petroleum,
              manufacturing and import/export activities.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={revenueVisible} delay="0.3s">
            <DesignNum>$</DesignNum>
            <DesignText>
              <h4>Real Estate Development</h4>
              <p>Land value appreciation and commercial development around
              railway stations create substantial long-term recurring income.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={revenueVisible} delay="0.4s">
            <DesignNum>$</DesignNum>
            <DesignText>
              <h4>PPP Concessions</h4>
              <p>Strategic private-sector participation creates sustainable
              cash flows while sharing investment risk across multiple
              stakeholders.</p>
            </DesignText>
          </DesignPoint>
        </Section>

        <Divider />

        {/* Financial Performance */}
        <Section dark ref={financeRef}>
          <SectionHeading isVisible={financeVisible}>Financial Performance</SectionHeading>
          <BodyText isVisible={financeVisible} delay="0s">
            Financial projections are based on conservative international
            benchmarks and comparable railway developments worldwide. The
            integrated business model combines passenger services, freight
            transport, logistics, commercial real estate and transit-oriented
            development to diversify revenue streams and enhance long-term
            financial sustainability.
          </BodyText>
          <BodyText isVisible={financeVisible} delay="0.2s">
            The phased implementation strategy reduces execution risk, supports
            progressive capital deployment and allows operational cash flow
            from early corridors to contribute toward future network expansion.
          </BodyText>
        </Section>

        <Divider />

        {/* Global Benchmarks */}
        <Section ref={benchmarkRef}>
          <SectionHeading isVisible={benchmarkVisible}>Global Benchmarks</SectionHeading>
          <ThreeGrid>
            <GlanceCard isVisible={benchmarkVisible} delay="0.2s">
              <GlanceImg src={require('../../images/railway/kenya.png')} alt="Kenya Railway" />
              <GlanceCaption>Kenya's Standard Gauge Railway demonstrates how strategic rail investment improves regional trade, mobility and logistics across East Africa.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={benchmarkVisible} delay="0.35s">
              <GlanceImg src={require('../../images/railway/ethiopia.png')} alt="Ethiopia Djibouti" />
              <GlanceCaption>The Ethiopia–Djibouti Railway is a modern freight corridor connecting inland industries to international ports, accelerating economic growth.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={benchmarkVisible} delay="0.5s">
              <GlanceImg src={require('../../images/railway/morocco.png')} alt="Morocco High Speed Rail" />
              <GlanceCaption>Africa's first high-speed railway, in Morocco, demonstrates the transformational impact of world-class rail infrastructure.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Why This Project */}
        <Section dark ref={whyRef}>
          <SectionHeading isVisible={whyVisible}>Why This Project</SectionHeading>
          <DesignPoint isVisible={whyVisible} delay="0.1s">
            <DesignNum>1</DesignNum>
            <DesignText>
              <h4>Integrated Infrastructure Platform</h4>
              <p>Railways, logistics, housing, industrial development and new
              towns are delivered as one coordinated national development
              programme.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={whyVisible} delay="0.2s">
            <DesignNum>2</DesignNum>
            <DesignText>
              <h4>Diversified Revenue Streams</h4>
              <p>Passenger services, freight logistics, commercial real estate
              and public-private partnerships create resilient long-term
              income.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={whyVisible} delay="0.3s">
            <DesignNum>3</DesignNum>
            <DesignText>
              <h4>Government Alignment</h4>
              <p>The project supports national infrastructure, industrial
              development and regional integration objectives while
              strengthening economic competitiveness.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={whyVisible} delay="0.4s">
            <DesignNum>4</DesignNum>
            <DesignText>
              <h4>Scalable National Vision</h4>
              <p>Designed for phased expansion, the programme can continue to
              grow alongside Ghana's future economic and population needs.</p>
            </DesignText>
          </DesignPoint>
        </Section>

        <Divider />

        {/* Implementation Roadmap */}
        <Section ref={roadmapRef}>
          <SectionHeading isVisible={roadmapVisible}>Implementation Roadmap</SectionHeading>
          <DesignPoint isVisible={roadmapVisible} delay="0.1s">
            <DesignNum>1</DesignNum>
            <DesignText>
              <h4>Phase One</h4>
              <p>Detailed planning, land acquisition, engineering design,
              institutional partnerships and financing mobilisation.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={roadmapVisible} delay="0.2s">
            <DesignNum>2</DesignNum>
            <DesignText>
              <h4>Phase Two</h4>
              <p>Construction of priority railway corridors together with key
              logistics hubs and initial transit-oriented developments.</p>
            </DesignText>
          </DesignPoint>
          <DesignPoint isVisible={roadmapVisible} delay="0.3s">
            <DesignNum>3</DesignNum>
            <DesignText>
              <h4>Phase Three</h4>
              <p>Expansion into regional corridors, new towns, industrial
              parks and nationwide passenger services.</p>
            </DesignText>
          </DesignPoint>
        </Section>

        <Divider />

        {/* Project Gallery */}
        <Section dark ref={galleryRef}>
          <SectionHeadingRow>
            <SectionHeading isVisible={galleryVisible} style={{ margin: 0 }}>
              Project Gallery
            </SectionHeading>
            <ViewAllBtn to="/infrastructure">Back to Infrastructure</ViewAllBtn>
          </SectionHeadingRow>
          <ThreeGrid>
            <GlanceCard isVisible={galleryVisible} delay="0.2s">
              <GlanceImg src={require('../../images/railway/gallery1.png')} alt="Railway Concept" />
              <GlanceCaption>Conceptual railway corridor connecting major economic centres.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={galleryVisible} delay="0.35s">
              <GlanceImg src={require('../../images/railway/gallery2.png')} alt="New Town" />
              <GlanceCaption>Transit-oriented mixed-use urban development surrounding railway stations.</GlanceCaption>
            </GlanceCard>
            <GlanceCard isVisible={galleryVisible} delay="0.5s">
              <GlanceImg src={require('../../images/railway/gallery3.png')} alt="Logistics Hub" />
              <GlanceCaption>Integrated logistics and freight facilities supporting industrial growth.</GlanceCaption>
            </GlanceCard>
          </ThreeGrid>
        </Section>

        <Divider />

        {/* Closing */}
        <Section ref={closingRef}>
          <SectionHeading isVisible={closingVisible}>Transforming Ghana's Future</SectionHeading>
          <BodyText isVisible={closingVisible} delay="0s">
            The Ghana Integrated Railway & New Town Development Project
            represents one of the country's most ambitious infrastructure
            initiatives. By combining transportation, logistics, urban
            planning and private investment into a single development
            platform, the project will create sustainable economic growth,
            improve connectivity and unlock new opportunities for
            generations to come.
          </BodyText>
        </Section>

      </ContentWrapper>
    </PageWrapper>
  );
};

export default RailwayProject;