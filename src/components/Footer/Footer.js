import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
  <FooterLinkTitle>Contact Us</FooterLinkTitle>
  <FooterLink href="https://wa.me/233205601679" target="_blank">
    +233 20 560 1679
  </FooterLink>
  <FooterLink to='/'>Contact</FooterLink>
  <FooterLink to='/'>Support</FooterLink>
  <FooterLink to='/'>Destinations</FooterLink>
  <FooterLink to='/'>Sponsorships</FooterLink>
</FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
           ALL DAY VENTURES 
          </SocialLogo>
          <WebsiteRights>ALL DAY VENTURES © {date.getFullYear()} </WebsiteRights>
          <SocialIcons>
  <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
    <FaFacebook />
  </SocialIconLink>
  <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
    <FaInstagram />
  </SocialIconLink>
  <SocialIconLink href='https://www.youtube.com/' target='_blank' aria-label='YouTube'>
    <FaYoutube />
  </SocialIconLink>
  <SocialIconLink href='https://twitter.com/' target='_blank' aria-label='Twitter'>
    <FaTwitter />
  </SocialIconLink>
  <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
    <FaLinkedin />
  </SocialIconLink>
   <SocialIconLink href='https://wa.me/233205601679' target='_blank' aria-label='WhatsApp'>
    <img
      src={require('../../images/whatsapp.png')}
      alt='WhatsApp'
      style={{ width: '24px', height: '24px' }}
    />
  </SocialIconLink>
</SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;