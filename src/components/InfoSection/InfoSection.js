import React from 'react';
import { Button } from '../../globalStyles';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  ImgWrapper,
  Img,
  Heading,
  Subtitle,
} from './InfoSection.elements';

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  start,
  url,
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <InfoSec lightBg={lightBg}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 50px' }}>
        <InfoRow imgStart={imgStart}>
          <InfoColumn isVisible={isVisible} imgStart={imgStart}>
            <TextWrapper>
              <TopLine isVisible={isVisible} lightTopLine={lightTopLine}>
                {topLine}
              </TopLine>
              <Heading isVisible={isVisible} lightText={lightText}>
                {headline}
              </Heading>
              <Subtitle isVisible={isVisible} lightTextDesc={lightTextDesc}>
                {description}
              </Subtitle>
              {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </a>
              ) : (
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              )}
            </TextWrapper>
          </InfoColumn>

          <InfoColumn isVisible={isVisible} imgStart={imgStart}>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </div>
    </InfoSec>
  );
};

export default InfoSection;