import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to Mukul C. Mahadik's<br />
        Portfolio!
      </SectionTitle>

    <SectionText>
    I aim to excel in the computer science field through adept research skills and 
    a refined approach to problem solving with an open-minded outlook and
    strive to work in a dynamic professional environment and contribute towards excellence.
    </SectionText>
    <Button onClick={() => window.location = "https://www.linkedin.com/in/mukulm03/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;