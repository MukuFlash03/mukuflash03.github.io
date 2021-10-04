import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: "AIR 6222", text: 'in GATE Computer Science 2021'},
  { number: "Top 100", text: 'Teams in KPIT Sparkle India 2019'}
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Personal Achievements
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}+</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
