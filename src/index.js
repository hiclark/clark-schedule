// @flow

import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
// $FlowFixMe
import baseCss from 'react-big-calendar/lib/css/react-big-calendar.css';

import styled from 'styled-components';
import ArrowBack from './arrow-back.svg';
import ArrowForward from './arrow-forward.svg';

import Event from './event';
import {
  HeaderCellWrap,
  NavButton,
  DayString,
  DateString,
  GutterWrap,
  TodayButton,
} from './styles';

import overrides from './overrides.css';

export type CalendarEventType = {
  id: string,
  title: string,
  start: Date,
  end: Date,
  locationRaw: ?string,
  status: 'confirmed' | 'canceled' | 'pending' | 'rescheduled' | 'busy',
};

const localizer = BigCalendar.momentLocalizer(moment);

const eventPropGetter = ({ status }) => {
  switch (status) {
    case 'canceled':
      return {
        className: 'canceled-event',
      };
    case 'busy':
      return {
        className: 'busy-event',
      };
    default:
      return {
        className: 'default-event',
      };
  }
};

const genHeaderCell = (handleNavClick, selectedDate) => ({ date }) => {
  const isSunday = moment(date).day() === 0;
  const isSaturday = moment(date).day() === 6;

  return (
    <HeaderCellWrap>
      {isSunday && (
        <NavButton
          direction="backward"
          onClick={() =>
            handleNavClick(
              new Date(
                moment(selectedDate)
                  .subtract(1, 'week')
                  .utc()
                  .format(),
              ),
            )
          }
        >
          <ArrowBack />
        </NavButton>
      )}
      {isSaturday && (
        <NavButton
          direction="forward"
          onClick={() =>
            handleNavClick(
              new Date(
                moment(selectedDate)
                  .add(1, 'week')
                  .utc()
                  .format(),
              ),
            )
          }
        >
          <ArrowForward />
        </NavButton>
      )}
      <DayString>{moment(date).format('ddd')}</DayString>
      <DateString>{moment(date).format('MMM D')}</DateString>
    </HeaderCellWrap>
  );
};

const genGutterHeader = handleTodayClick => () => (
  <GutterWrap>
    <TodayButton onClick={() => handleTodayClick(new Date())}>
      Today
    </TodayButton>
  </GutterWrap>
);

// Hardcoded to 8:45am for visual purposes
const scrollTarget = new Date(new Date().setHours(8, 45));

type PropsType = {
  events: CalendarEventType[],
  onSelectEvent(event: CalendarEventType): void,
  onSelectSlot(event: CalendarEventType): void,
  className: string,
};

type StateType = {
  selectedDate: Date,
};

class Schedule extends Component<PropsType, StateType> {
  state = {
    selectedDate: new Date(),
  };

  setSelectedDate = (date: Date) => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { className, events, onSelectSlot, onSelectEvent } = this.props;
    const { selectedDate } = this.state;

    return (
      <BigCalendar
        className={className}
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={['week']}
        step={15}
        timeslots={4}
        scrollToTime={scrollTarget}
        date={selectedDate}
        getNow={() => new Date()}
        onNavigate={() => {}} // required for some reason
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        components={{
          event: Event,
          timeGutterHeader: genGutterHeader(this.setSelectedDate),
          toolbar: () => null,
          week: {
            header: genHeaderCell(this.setSelectedDate, selectedDate),
          },
        }}
        eventPropGetter={eventPropGetter}
      />
    );
  }
}

// $FlowFixMe
export default styled(Schedule)`
  ${baseCss.toString()};
  ${overrides.toString()};
`;
