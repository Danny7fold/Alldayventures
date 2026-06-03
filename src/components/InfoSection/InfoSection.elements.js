import styled, { keyframes, css } from 'styled-components';

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeSlideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeSlideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const InfoSec = styled.div`
  color: #111111;
  padding: 80px 0;
  background: ${({ lightBg }) => (lightBg ? '#ffffff' : '#f5f5f5')};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  opacity: 0;

  ${({ isVisible, imgStart }) =>
    isVisible &&
    css`
      animation: ${imgStart ? fadeSlideRight : fadeSlideLeft} 0.6s ease-out forwards;
    `}

  &:last-child {
    ${({ isVisible, imgStart }) =>
      isVisible &&
      css`
        animation: ${imgStart ? fadeSlideLeft : fadeSlideRight} 0.9s ease-out forwards;
      `}
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (max-width: 1200px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: #C8922A;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeSlideUp} 0.5s ease-out 0.1s forwards;
    `}
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #111111;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeSlideUp} 0.6s ease-out 0.2s forwards;
    `}
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #444444;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: ${fadeSlideUp} 0.7s ease-out 0.35s forwards;
    `}
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;