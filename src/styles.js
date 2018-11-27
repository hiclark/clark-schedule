// @flow
import styled from 'styled-components';
import {
  COLORS,
  SPACING,
  FONT_WEIGHT,
  BORDER_RADIUS,
  Z_INDEX,
} from 'clark-styles';

const { GREY_25, GREY_75 } = COLORS;
const { S_05 } = SPACING;
const { FW_400, FW_700 } = FONT_WEIGHT;
const { BR_2 } = BORDER_RADIUS;
const { Z_1 } = Z_INDEX;

export const GutterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderCellWrap = styled.div`
  padding: 16px 0;
  position: relative;
`;

export const TodayButton = styled.button`
  ${Z_1};
  background: white;
  border: 1px solid ${GREY_25};
  color: ${GREY_75};
  ${BR_2};
  padding: ${S_05} 0;
  width: 90%;
  margin: ${S_05} ${S_05} ${S_05} 0;
  text-transform: uppercase;
  ${FW_700};
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;

export const NavButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  ${({ direction }) =>
    direction === 'forward' ? 'right: -10px;' : 'left: -10px;'};
  top: 50%;
  transform: translateY(-50%);

  :focus {
    outline: 0;
  }
`;

export const DayString = styled.div`
  color: ${GREY_75};
  text-transform: uppercase;
  ${FW_700};
`;

export const DateString = styled.div`
  color: ${GREY_75};
  ${FW_400};
`;
