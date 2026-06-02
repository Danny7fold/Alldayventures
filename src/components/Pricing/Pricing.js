import React from "react";
import { Button } from "../../globalStyles";
import { GiFarmTractor } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { GiGearHammer } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#C8922A", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>

          <PricingContainer>
            {/* AGRICULTURE */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFarmTractor />
                </PricingCardIcon>

                <PricingCardPlan>Agriculture & Agribusiness</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>
                    Crop production & farming
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Agri-processing solutions
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Farmer support & training
                  </PricingCardFeature>
                </PricingCardFeatures>

                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* TECHNOLOGY */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiFillThunderbolt />
                </PricingCardIcon>

                <PricingCardPlan>Technology Solutions</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Digital innovation</PricingCardFeature>
                  <PricingCardFeature>
                    Software & IT services
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Automation & smart systems
                  </PricingCardFeature>
                </PricingCardFeatures>

                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* INFRASTRUCTURE */}
            
              <PricingCard>
                <Link
              to="/infrastructure"
              style={{ textDecoration: "none", color: "inherit" }}
            >
                <PricingCardInfo>
                  <PricingCardIcon>
                    <GiGearHammer />
                  </PricingCardIcon>

                  <PricingCardPlan>Infrastructure Development</PricingCardPlan>

                  <PricingCardFeatures>
                    <PricingCardFeature>
                      Construction projects
                    </PricingCardFeature>
                    <PricingCardFeature>
                      Logistics & supply chain
                    </PricingCardFeature>
                    <PricingCardFeature>
                      Industrial development
                    </PricingCardFeature>
                  </PricingCardFeatures>

                  <Button primary>Learn More</Button>
                </PricingCardInfo>
                  </Link>
              </PricingCard>
          

            {/* SERVICES */}
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>

                <PricingCardPlan>Business & Support Services</PricingCardPlan>

                <PricingCardFeatures>
                  <PricingCardFeature>Consulting services</PricingCardFeature>
                  <PricingCardFeature>Workforce development</PricingCardFeature>
                  <PricingCardFeature>Project management</PricingCardFeature>
                </PricingCardFeatures>

                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
