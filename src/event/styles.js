// @flow

import { SPACING, FONT_WEIGHT, TYPE_SCALE, LINE_HEIGHT } from 'clark-styles';
import styled from 'styled-components';

const { S_05 } = SPACING;
const { FW_400, FW_700 } = FONT_WEIGHT;
const { TITLE } = LINE_HEIGHT;
const { TS_5, TS_6 } = TYPE_SCALE;

export const EventWrapper = styled.div`
  ${FW_400};
  ${TITLE};
  ${TS_6};
  padding: ${S_05};
`;

export const EventTitle = styled.div`
  ${FW_700};
  ${TS_5};
`;
