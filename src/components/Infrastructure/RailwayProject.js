import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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
    rgba(0,0,0,.15),
    rgba(0,0,0,.60)
  );
  z-index: 1;
`;

const HeroText = styled.div`
  position: relative;
  z-index: 2;
  padding: 3rem 4rem 0;

  h1{
    color:#fff;
    font-size:52px;
    line-height:1.1;
    font-weight:600;
    margin:0;
  }

  @media(max-width:768px){
    padding:2rem 1.5rem 0;

    h1{
      font-size:36px;
    }
  }
`;

const Breadcrumb = styled.div`
  position:relative;
  z-index:2;
  padding:1rem 4rem 2rem;
  display:flex;
  gap:8px;
  align-items:center;
  color:#ddd;
  font-size:14px;

  a{
    color:#ddd;
    text-decoration:none;
  }

  span{
    color:#fff;
  }
`;

const HeroSpacer = styled.div`
  height:70vh;
`;

const ContentWrapper = styled.div`
  position:relative;
  z-index:1;
  background:#fff;
`;

const Section = styled.div`
  padding:80px 4rem;
  background:${({dark})=>dark ? "#f6f6f6" : "#fff"};

  @media(max-width:768px){
    padding:60px 1.5rem;
  }
`;

const Divider = styled.div`
  height:1px;
  background:#e8e8e8;
  margin:0 4rem;
`;

const SectionHeading = styled.h2`
  font-size:42px;
  font-weight:800;
  margin:0 0 2.5rem;
  color:#111;
  text-transform:uppercase;
  opacity:0;

  ${({isVisible})=>isVisible && css`
      animation:${fadeUp} .6s ease forwards;
  `}

  @media(max-width:768px){
    font-size:30px;
  }
`;

const BodyText = styled.p`
  font-size:18px;
  line-height:1.9;
  color:#444;
  max-width:900px;
  margin:0 0 1.5rem;
  opacity:0;

  ${({isVisible,delay})=>isVisible && css`
      animation:${fadeUp} .7s ease ${delay || "0s"} forwards;
  `}
`;

const ReadMore = styled.span`
  display:inline-block;
  margin-top:10px;
  font-size:16px;
  font-weight:600;
  cursor:pointer;
  text-decoration:underline;
`;

const StatsGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1px;
  background:#ddd;
  border:1px solid #ddd;
  margin-bottom:3rem;

  @media(max-width:900px){
    grid-template-columns:repeat(2,1fr);
  }
`;

const StatCard = styled.div`
  background:white;
  text-align:center;
  padding:2rem;
  opacity:0;

  ${({isVisible,delay})=>isVisible && css`
      animation:${fadeUp} .7s ease ${delay || "0s"} forwards;
  `}

  .num{
      font-size:42px;
      font-weight:700;
      color:#2d6a2d;
  }

  .lbl{
      margin-top:10px;
      color:#666;
      line-height:1.5;
      font-size:15px;
  }
`;

const ThreeGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:1px;
  background:#ddd;
  border:1px solid #ddd;

  @media(max-width:768px){
      grid-template-columns:1fr;
  }
`;

const GlanceCard = styled.div`
  background:white;
  opacity:0;

  ${({isVisible,delay})=>isVisible && css`
      animation:${fadeUp} .7s ease ${delay || "0s"} forwards;
  `}
`;

const GlanceImg = styled.img`
  width:100%;
  height:230px;
  object-fit:cover;
`;

const GlanceCaption = styled.div`
  padding:1.5rem;
  line-height:1.7;
  color:#333;
`;

const DesignPoint = styled.div`
  display:flex;
  gap:2rem;
  align-items:flex-start;
  padding:2rem 0;
  border-bottom:1px solid #ececec;
  opacity:0;

  ${({isVisible,delay})=>isVisible && css`
      animation:${fadeLeft} .6s ease ${delay || "0s"} forwards;
  `}
`;

const DesignNum = styled.div`
  width:48px;
  height:48px;
  border-radius:50%;
  background:#2d6a2d;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  flex-shrink:0;
`;

const DesignText = styled.div`
  h4{
      margin:0 0 10px;
      font-size:22px;
      color:#111;
  }

  p{
      margin:0;
      color:#555;
      line-height:1.8;
      font-size:17px;
  }
`;

const ViewAllBtn = styled(Link)`
  padding:10px 24px;
  border:1px solid #111;
  text-decoration:none;
  color:#111;
  font-weight:600;

  &:hover{
      background:#111;
      color:white;
  }
`;

const SectionHeadingRow = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:2rem;

  @media(max-width:768px){
      flex-direction:column;
      align-items:flex-start;
      gap:1rem;
  }
`;

const RailwayProject = () => {

    const [expanded,setExpanded] = useState(false);

    const [aboutRef,aboutVisible] = useScrollAnimation(.2);
    const [glanceRef,glanceVisible] = useScrollAnimation(.2);
    const [networkRef,networkVisible] = useScrollAnimation(.2);
    const [benefitsRef,benefitsVisible] = useScrollAnimation(.2);
    const [galleryRef,galleryVisible] = useScrollAnimation(.2);

    return (

<PageWrapper>

<HeroSection>

<HeroImg
    src={require('../../images/railway/hero.png')}
    alt="Ghana Integrated Railway Project"
/>

<HeroOverlay/>

<HeroText>
<h1>
Ghana Integrated Railway & New Town Development Project
</h1>
</HeroText>

<Breadcrumb>
<FaHome />
·
<Link to="/">Home</Link>
·
<Link to="/infrastructure">Infrastructure</Link>
·
<span>Railway Project</span>
</Breadcrumb>

</HeroSection>

<HeroSpacer/>

<ContentWrapper>
    {/* ================= ABOUT ================= */}

<Section ref={aboutRef}>
  <BodyText isVisible={aboutVisible}>
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
    {expanded ? "Read Less" : "Read More"}
  </ReadMore>
</Section>

<Divider />

{/* ================= AT A GLANCE ================= */}

<Section dark ref={glanceRef}>

<SectionHeading isVisible={glanceVisible}>
At a Glance
</SectionHeading>

<StatsGrid>

<StatCard isVisible={glanceVisible} delay=".1s">
<div className="num">1,000+</div>
<div className="lbl">
Potential railway network (km)
</div>
</StatCard>

<StatCard isVisible={glanceVisible} delay=".2s">
<div className="num">24</div>
<div className="lbl">
Hour economy support
</div>
</StatCard>

<StatCard isVisible={glanceVisible} delay=".3s">
<div className="num">$11B+</div>
<div className="lbl">
Estimated investment
</div>
</StatCard>

<StatCard isVisible={glanceVisible} delay=".4s">
<div className="num">Nationwide</div>
<div className="lbl">
Integrated rail development
</div>
</StatCard>

</StatsGrid>

<ThreeGrid>

<GlanceCard
isVisible={glanceVisible}
delay=".15s"
>

<GlanceImg
src={require("../../images/railway/network.png")}
alt="National Railway Network"
/>

<GlanceCaption>
<strong>National Railway Network</strong>
<br /><br />
A modern standard-gauge railway system connecting Ghana's
major cities, industrial zones, mining regions, ports,
and agricultural corridors.
</GlanceCaption>

</GlanceCard>

<GlanceCard
isVisible={glanceVisible}
delay=".3s"
>

<GlanceImg
src={require("../../images/railway/new-town.png")}
alt="New Town Development"
/>

<GlanceCaption>
<strong>Transit-Oriented Development</strong>
<br /><br />
Railway stations become catalysts for new towns,
commercial districts, affordable housing,
education, healthcare and public services.
</GlanceCaption>

</GlanceCard>

<GlanceCard
isVisible={glanceVisible}
delay=".45s"
>

<GlanceImg
src={require("../../images/railway/logistics.png")}
alt="Economic Growth"
/>

<GlanceCaption>
<strong>Economic Transformation</strong>
<br /><br />
Lower logistics costs, improved labour mobility,
industrial expansion and stronger regional trade
create sustainable long-term economic growth.
</GlanceCaption>

</GlanceCard>

</ThreeGrid>

</Section>

<Divider />
{/* ================= NATIONAL RAILWAY NETWORK ================= */}

<Section ref={networkRef}>

<SectionHeading isVisible={networkVisible}>
National Railway Network
</SectionHeading>

<DesignPoint isVisible={networkVisible} delay=".1s">
    <DesignNum>1</DesignNum>

    <DesignText>
        <h4>North–South Backbone</h4>
        <p>
            A strategic railway spine connecting the southern ports to
            northern Ghana, supporting trade, mining, agriculture,
            passenger mobility and regional integration.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={networkVisible} delay=".2s">
    <DesignNum>2</DesignNum>

    <DesignText>
        <h4>Coastal Economic Corridor</h4>
        <p>
            Modern rail infrastructure linking Ghana's major coastal cities,
            ports and industrial centres, improving freight efficiency and
            reducing logistics costs across the national economy.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={networkVisible} delay=".3s">
    <DesignNum>3</DesignNum>

    <DesignText>
        <h4>Regional Branch Lines</h4>
        <p>
            Secondary railway lines extending connectivity into productive
            agricultural zones, mining districts and growing regional towns,
            ensuring inclusive national development.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={networkVisible} delay=".4s">
    <DesignNum>4</DesignNum>

    <DesignText>
        <h4>Standard Gauge Infrastructure</h4>
        <p>
            Designed to international standards, the railway network will
            accommodate both passenger and freight operations while allowing
            future expansion as demand increases.
        </p>
    </DesignText>
</DesignPoint>

</Section>

<Divider />

{/* ================= URBAN DEVELOPMENT MODEL ================= */}

<Section dark ref={benefitsRef}>

<SectionHeading isVisible={benefitsVisible}>
Urban Development Model
</SectionHeading>

<BodyText isVisible={benefitsVisible}>
The railway network is supported by a Transit-Oriented Development (TOD)
strategy that integrates transport infrastructure with new urban centres.
Railway stations become catalysts for commercial investment, residential
communities, education, healthcare and employment opportunities.
</BodyText>

<ThreeGrid>

<GlanceCard
    isVisible={benefitsVisible}
    delay=".2s"
>
    <GlanceImg
        src={require('../../images/railway/tod.png')}
        alt="Transit Oriented Development"
    />

    <GlanceCaption>
        <strong>Transit-Oriented Communities</strong>

        <br /><br />

        Compact, walkable communities centred around modern railway
        stations encourage sustainable urban growth while reducing
        congestion in existing cities.
    </GlanceCaption>

</GlanceCard>

<GlanceCard
    isVisible={benefitsVisible}
    delay=".35s"
>

    <GlanceImg
        src={require('../../images/railway/housing.png')}
        alt="Housing Development"
    />

    <GlanceCaption>
        <strong>Planned Housing</strong>

        <br /><br />

        Affordable residential communities supported by schools,
        healthcare facilities, parks, retail districts and public
        infrastructure improve quality of life.
    </GlanceCaption>

</GlanceCard>

<GlanceCard
    isVisible={benefitsVisible}
    delay=".5s"
>

    <GlanceImg
        src={require('../../images/railway/industry.png')}
        alt="Industrial Development"
    />

    <GlanceCaption>
        <strong>Industrial & Logistics Hubs</strong>

        <br /><br />

        Industrial parks and logistics centres positioned along railway
        corridors improve freight movement, reduce transportation costs
        and stimulate manufacturing investment.
    </GlanceCaption>

</GlanceCard>

</ThreeGrid>

</Section>

<Divider />

{/* ================= PROBLEM → SOLUTION ================= */}

<Section>

<SectionHeading isVisible={benefitsVisible}>
Problem → Solution Framework
</SectionHeading>

<DesignPoint isVisible={benefitsVisible} delay=".1s">
    <DesignNum>✓</DesignNum>

    <DesignText>
        <h4>Urban Congestion</h4>
        <p>
            High-capacity passenger rail reduces traffic congestion while
            improving commuting efficiency across Ghana's major cities.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".2s">
    <DesignNum>✓</DesignNum>

    <DesignText>
        <h4>Housing Shortages</h4>
        <p>
            New railway towns provide structured housing development,
            reducing pressure on existing urban centres.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".3s">
    <DesignNum>✓</DesignNum>

    <DesignText>
        <h4>High Logistics Costs</h4>
        <p>
            Efficient freight rail lowers transportation costs for mining,
            agriculture, manufacturing and import-export businesses.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".4s">
    <DesignNum>✓</DesignNum>

    <DesignText>
        <h4>Regional Inequality</h4>
        <p>
            Railway connectivity distributes investment beyond the major
            cities, unlocking economic opportunities throughout Ghana.
        </p>
    </DesignText>
</DesignPoint>

</Section>

<Divider />
{/* ================= ECONOMIC ENGINE ================= */}

<Section dark>

<SectionHeading isVisible={benefitsVisible}>
Economic Engine
</SectionHeading>

<DesignPoint isVisible={benefitsVisible} delay=".1s">
    <DesignNum>1</DesignNum>

    <DesignText>
        <h4>Expanded Labour Mobility</h4>
        <p>
            Reliable rail transport connects people with employment
            opportunities across regions, improving productivity and
            supporting labour market growth.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".2s">
    <DesignNum>2</DesignNum>

    <DesignText>
        <h4>Industrial Growth</h4>
        <p>
            Lower freight costs encourage manufacturing, mining,
            agriculture and export-oriented industries to expand along
            strategic railway corridors.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".3s">
    <DesignNum>3</DesignNum>

    <DesignText>
        <h4>Efficient Logistics</h4>
        <p>
            Modern freight infrastructure significantly reduces transport
            time while improving reliability for businesses throughout
            Ghana.
        </p>
    </DesignText>
</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".4s">
    <DesignNum>4</DesignNum>

    <DesignText>
        <h4>Sustained GDP Growth</h4>
        <p>
            Together, railway infrastructure, urban development and
            logistics investment become long-term drivers of national
            economic expansion.
        </p>
    </DesignText>
</DesignPoint>

</Section>

<Divider />

{/* ================= 24 HOUR ECONOMY ================= */}

<Section>

<SectionHeading isVisible={benefitsVisible}>
Supporting Ghana's 24-Hour Economy
</SectionHeading>

<ThreeGrid>

<GlanceCard isVisible={benefitsVisible} delay=".15s">

<GlanceImg
src={require("../../images/railway/night-train.png")}
alt="Night Transport"
/>

<GlanceCaption>

<strong>Reliable Night Transport</strong>

<br /><br />

Passenger rail enables safe and affordable movement of workers
throughout the day and night, supporting a continuous workforce.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={benefitsVisible} delay=".3s">

<GlanceImg
src={require("../../images/railway/freight.png")}
alt="Freight"
/>

<GlanceCaption>

<strong>24-Hour Logistics</strong>

<br /><br />

Continuous freight operations improve supply chains while reducing
road congestion and increasing resilience across industries.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={benefitsVisible} delay=".45s">

<GlanceImg
src={require("../../images/railway/economy.png")}
alt="Economy"
/>

<GlanceCaption>

<strong>National Productivity</strong>

<br /><br />

The railway supports industrial production, commerce and
regional development by enabling uninterrupted movement of
goods and people.

</GlanceCaption>

</GlanceCard>

</ThreeGrid>

</Section>

<Divider />

{/* ================= INVESTMENT ================= */}

<Section dark>

<SectionHeading isVisible={benefitsVisible}>
Investment Overview
</SectionHeading>

<StatsGrid>

<StatCard isVisible={benefitsVisible} delay=".1s">
<div className="num">$11B</div>
<div className="lbl">
Starting investment estimate
</div>
</StatCard>

<StatCard isVisible={benefitsVisible} delay=".2s">
<div className="num">$17.5B</div>
<div className="lbl">
Upper investment estimate
</div>
</StatCard>

<StatCard isVisible={benefitsVisible} delay=".3s">
<div className="num">PPP</div>
<div className="lbl">
Public-Private Partnership model
</div>
</StatCard>

<StatCard isVisible={benefitsVisible} delay=".4s">
<div className="num">Phased</div>
<div className="lbl">
Progressive implementation strategy
</div>
</StatCard>

</StatsGrid>

<BodyText isVisible={benefitsVisible}>
The project is structured as a phased national infrastructure
programme with flexible financing mechanisms that combine
government participation, institutional investment,
development finance and private capital.
</BodyText>

</Section>

<Divider />

{/* ================= REVENUE MODEL ================= */}

<Section>

<SectionHeading isVisible={benefitsVisible}>
Revenue Model
</SectionHeading>

<DesignPoint isVisible={benefitsVisible} delay=".1s">

<DesignNum>$</DesignNum>

<DesignText>

<h4>Passenger Rail Services</h4>

<p>
Long-term fare revenue generated from intercity and commuter
rail services operating throughout the national network.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".2s">

<DesignNum>$</DesignNum>

<DesignText>

<h4>Freight Logistics</h4>

<p>
Bulk cargo transport for mining, agriculture, petroleum,
manufacturing and import/export activities.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".3s">

<DesignNum>$</DesignNum>

<DesignText>

<h4>Real Estate Development</h4>

<p>
Land value appreciation and commercial development around
railway stations create substantial long-term recurring income.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={benefitsVisible} delay=".4s">

<DesignNum>$</DesignNum>

<DesignText>

<h4>PPP Concessions</h4>

<p>
Strategic private-sector participation creates sustainable
cash flows while sharing investment risk across multiple
stakeholders.
</p>

</DesignText>

</DesignPoint>

</Section>

<Divider />

{/* ================= FINANCIAL PERFORMANCE ================= */}

<Section dark>

<SectionHeading isVisible={benefitsVisible}>
Financial Performance
</SectionHeading>

<BodyText isVisible={benefitsVisible}>
Financial projections are based on conservative international
benchmarks and comparable railway developments worldwide.
The integrated business model combines passenger services,
freight transport, logistics, commercial real estate and
transit-oriented development to diversify revenue streams and
enhance long-term financial sustainability.
</BodyText>

<BodyText isVisible={benefitsVisible} delay=".2s">
The phased implementation strategy reduces execution risk,
supports progressive capital deployment and allows operational
cash flow from early corridors to contribute toward future
network expansion.
</BodyText>

</Section>

<Divider />
{/* ================= GLOBAL BENCHMARKS ================= */}

<Section>

<SectionHeading isVisible={galleryVisible}>
Global Benchmarks
</SectionHeading>

<ThreeGrid>

<GlanceCard isVisible={galleryVisible} delay=".15s">

<GlanceImg
src={require("../../images/railway/kenya.png")}
alt="Kenya Railway"
/>

<GlanceCaption>

<strong>Kenya Standard Gauge Railway</strong>

<br /><br />

Demonstrates how strategic rail investment can improve
regional trade, passenger mobility and logistics
throughout East Africa.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={galleryVisible} delay=".3s">

<GlanceImg
src={require("../../images/railway/ethiopia.png")}
alt="Ethiopia Djibouti"
/>

<GlanceCaption>

<strong>Ethiopia–Djibouti Railway</strong>

<br /><br />

A modern freight corridor connecting inland industries
to international ports while accelerating economic growth.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={galleryVisible} delay=".45s">

<GlanceImg
src={require("../../images/railway/morocco.png")}
alt="Morocco High Speed Rail"
/>

<GlanceCaption>

<strong>Morocco High-Speed Rail</strong>

<br /><br />

Africa's first high-speed railway demonstrates the
transformational impact of world-class rail infrastructure.

</GlanceCaption>

</GlanceCard>

</ThreeGrid>

</Section>

<Divider />

{/* ================= WHY THIS PROJECT ================= */}

<Section dark>

<SectionHeading isVisible={galleryVisible}>
Why This Project
</SectionHeading>

<DesignPoint isVisible={galleryVisible} delay=".1s">

<DesignNum>1</DesignNum>

<DesignText>

<h4>Integrated Infrastructure Platform</h4>

<p>
Railways, logistics, housing, industrial development and
new towns are delivered as one coordinated national
development programme.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={galleryVisible} delay=".2s">

<DesignNum>2</DesignNum>

<DesignText>

<h4>Diversified Revenue Streams</h4>

<p>
Passenger services, freight logistics, commercial real
estate and public-private partnerships create resilient
long-term income.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={galleryVisible} delay=".3s">

<DesignNum>3</DesignNum>

<DesignText>

<h4>Government Alignment</h4>

<p>
The project supports national infrastructure, industrial
development and regional integration objectives while
strengthening economic competitiveness.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={galleryVisible} delay=".4s">

<DesignNum>4</DesignNum>

<DesignText>

<h4>Scalable National Vision</h4>

<p>
Designed for phased expansion, the programme can continue
to grow alongside Ghana's future economic and population
needs.
</p>

</DesignText>

</DesignPoint>

</Section>

<Divider />

{/* ================= IMPLEMENTATION ROADMAP ================= */}

<Section>

<SectionHeading isVisible={galleryVisible}>
Implementation Roadmap
</SectionHeading>

<DesignPoint isVisible={galleryVisible} delay=".1s">

<DesignNum>1</DesignNum>

<DesignText>

<h4>Phase One</h4>

<p>
Detailed planning, land acquisition, engineering design,
institutional partnerships and financing mobilisation.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={galleryVisible} delay=".2s">

<DesignNum>2</DesignNum>

<DesignText>

<h4>Phase Two</h4>

<p>
Construction of priority railway corridors together with
key logistics hubs and initial transit-oriented
developments.
</p>

</DesignText>

</DesignPoint>

<DesignPoint isVisible={galleryVisible} delay=".3s">

<DesignNum>3</DesignNum>

<DesignText>

<h4>Phase Three</h4>

<p>
Expansion into regional corridors, new towns,
industrial parks and nationwide passenger services.
</p>

</DesignText>

</DesignPoint>

</Section>

<Divider />

{/* ================= PROJECT GALLERY ================= */}

<Section dark ref={galleryRef}>

<SectionHeadingRow>

<SectionHeading
isVisible={galleryVisible}
style={{margin:0}}
>

Project Gallery

</SectionHeading>

<ViewAllBtn to="/infrastructure">

Back to Infrastructure

</ViewAllBtn>

</SectionHeadingRow>

<ThreeGrid>

<GlanceCard isVisible={galleryVisible} delay=".15s">

<GlanceImg
src={require("../../images/railway/gallery1.png")}
alt="Railway Concept"
/>

<GlanceCaption>

Conceptual railway corridor connecting
major economic centres.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={galleryVisible} delay=".3s">

<GlanceImg
src={require("../../images/railway/gallery2.png")}
alt="New Town"
/>

<GlanceCaption>

Transit-oriented mixed-use urban
development surrounding railway stations.

</GlanceCaption>

</GlanceCard>

<GlanceCard isVisible={galleryVisible} delay=".45s">

<GlanceImg
src={require("../../images/railway/gallery3.png")}
alt="Logistics Hub"
/>

<GlanceCaption>

Integrated logistics and freight facilities
supporting industrial growth.

</GlanceCaption>

</GlanceCard>

</ThreeGrid>

</Section>

<Divider />

{/* ================= CLOSING ================= */}

<Section>

<SectionHeading isVisible={galleryVisible}>
Transforming Ghana's Future
</SectionHeading>

<BodyText isVisible={galleryVisible}>

The Ghana Integrated Railway & New Town Development Project
represents one of the country's most ambitious infrastructure
initiatives. By combining transportation, logistics,
urban planning and private investment into a single
development platform, the project will create sustainable
economic growth, improve connectivity and unlock new
opportunities for generations to come.

</BodyText>

</Section>

</ContentWrapper>

</PageWrapper>

);

};

export default RailwayProject;