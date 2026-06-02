import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'

 const InfoSection = ({ 
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start,
    url ,
    link
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                
                                {url ? (
                                    /* If a URL exists (like WhatsApp), use a standard anchor tag */
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </a>
                                ) : (
                                    /* Otherwise, keep using the internal Link */
                                    <Link to={link || '/sign-up'}>
                                        <Button big fontBig primary={primary}>
                                            {buttonLabel}
                                        </Button>
                                    </Link>
                                )}
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;