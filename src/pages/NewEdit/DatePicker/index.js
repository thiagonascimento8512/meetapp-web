import React, { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  setHours,
  setMinutes,
  getHours,
  addDays,
  addHours,
  parseISO,
} from 'date-fns';
import pt from 'date-fns/locale/pt';

import { CustomDatePicker } from './styles';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState();
  const meetup = useSelector(state => state.meetapp.meetupPreview);

  const minTime = setMinutes(setHours(new Date(), 8), 0);
  const maxTime = setMinutes(setHours(new Date(), 21), 0);

  /* True caso o horário do dia atual seja maior que
   * os horários permitidos
   */
  let excludeToday = false;

  if (getHours(new Date()) > 21) excludeToday = true;

  useEffect(() => {
    const now = new Date();
    setSelected(setMinutes(addHours(new Date(), 1), 0));

    if (meetup) {
      setSelected(parseISO(meetup.date));
      return;
    }

    if (getHours(now) >= 21) {
      setSelected(setMinutes(setHours(addDays(now, 1), 8), 0));
      return;
    }

    if (getHours(now) < 8) {
      setSelected(setMinutes(setHours(now, 8), 0));
      return;
    }
  }, [meetup]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <div>
      <CustomDatePicker
        isClearable
        id="date"
        selected={selected}
        onChange={date => setSelected(date)}
        placeholderText="Selecione o dia e horário"
        minDate={new Date()}
        minTime={minTime}
        maxTime={maxTime}
        excludeDates={excludeToday ? [new Date()] : []}
        timeIntervals={60}
        timeCaption="Horário"
        todayButton="Ir para data atual"
        showTimeSelect
        timeFormat="HH:mm"
        timeInputLabel="Horário"
        dateFormat="dd 'de' MMMM 'de' yyyy 'às' HH:mm"
        locale={pt}
        name={fieldName}
        ref={ref}
      />

      {error && <span>{error}</span>}
    </div>
  );
}
