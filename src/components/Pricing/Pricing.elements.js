import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const PricingHeading = styled.h1`
  color: #111111;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #f5f5f5;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  margin: 0 12px;
  -webkit-tap-highlight-color: rgba(200, 146, 42, 0.15);

  &:nth-child(2) {
    background: #111111;
    border: 2px solid #C8922A;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    box-shadow: 0 6px 24px rgba(200, 146, 42, 0.25);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 3px 12px rgba(200, 146, 42, 0.3);
    transition: all 0.1s ease-out;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin: 12px 0;

    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #111111;

  ${PricingCard}:nth-child(2) & {
    color: #ffffff;
  }
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  color: #C8922A;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  color: inherit;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
  color: #C8922A;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
  color: #666666;

  ${PricingCard}:nth-child(2) & {
    color: #a9b3c1;
  }
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #444444;

  ${PricingCard}:nth-child(2) & {
    color: #a9b3c1;
  }
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;