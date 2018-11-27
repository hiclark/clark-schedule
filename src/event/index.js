// @flow

import React, { Fragment } from 'react';
import moment from 'moment';
import { EventWrapper, EventTitle } from './styles';

export type CalendarEventType = {
  id: string,
  title: string,
  start: Date,
  end: Date,
  locationRaw: ?string,
  status: 'confirmed' | 'canceled' | 'pending' | 'rescheduled' | 'busy',
};

type PropsType = { event: CalendarEventType };

const Event = ({
  event: { title, status, start, end, locationRaw },
}: PropsType) => (
  <EventWrapper>
    <EventTitle>{title}</EventTitle>
    {status !== 'busy' && (
      <Fragment>
        <div>{status === 'canceled' && '(Canceled)'}</div>
        <div>{`${moment(start).format('h:mm')}-${moment(end).format(
          'h:mm',
        )}`}</div>
        <div>{locationRaw && locationRaw.split(',')[0]}</div>
      </Fragment>
    )}
  </EventWrapper>
);

export default Event;
