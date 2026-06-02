import styled from 'styled-components';

export const HeroSection = styled.div`
  width: 100%;
  height: 520px;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

export const HeroImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.72));
  z-index: 1;
`;

export const HeroText = styled.div`
  position: relative;
  z-index: 2;
  padding: 2.5rem 3rem;

  p {
    color: #C8922A;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }

  h1 {
    color: #fff;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    margin: 0;
    max-width: 640px;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    h1 { font-size: 32px; }
  }
`;

export const Section = styled.div`
  padding: 80px 3rem;
  background: ${({ dark }) => (dark ? '#f5f5f5' : '#ffffff')};

  @media (max-width: 768px) {
    padding: 60px 1.5rem;
  }
`;

export const SectionLabel = styled.p`
  color: #C8922A;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0 0 10px;
`;

export const SectionHeading = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #111111;
  margin: 0 0 2.5rem;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px;
  background: #e0e0e0;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }
`;

export const CardIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #eaf3e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111111;
  margin: 0;
`;

export const CardDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  margin: 0;
`;

export const CardLink = styled.a`
  font-size: 14px;
  color: #C8922A;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;

  .num {
    font-size: 36px;
    font-weight: 600;
    color: #2d6a2d;
    line-height: 1;
  }

  .lbl {
    font-size: 16px;
    line-height: 24px;
    color: #444444;
    margin-top: 6px;
  }
`;