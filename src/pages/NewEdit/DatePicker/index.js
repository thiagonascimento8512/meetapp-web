import React, { useRef, useEffect, useState } from 'react';
import { setHours, setMinutes, getHours, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { CustomDatePicker } from './styles';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [selected, setSelected] = useState();

  const minTime = setMinutes(setHours(new Date(), 8), 0);
  const maxTime = setMinutes(setHours(new Date(), 21), 0);
  const available = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const excludeTimes = [];
  let excludeToday = false;

  available.map(hour => {
    const h = getHours(new Date());
    if (selected <= new Date() && hour < h) {
      return excludeTimes.push(setMinutes(setHours(new Date(), hour), 0));
    }
    return hour;
  });

  if (getHours(new Date()) > 21) excludeToday = true;

  useEffect(() => {
    const now = new Date();
    if (getHours(now) >= 21) {
      setSelected(setMinutes(setHours(addDays(now, 1), 8), 0));
    }

    if (getHours(now) < 8) {
      setSelected(setMinutes(setHours(now, 8), 0));
    }
  }, []);

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
        minTime={minTime}
        maxTime={maxTime}
        excludeTimes={excludeTimes}
        excludeDates={excludeToday ? [new Date()] : []}
        timeIntervals={60}
        timeCaption="Horário"
        todayButton="Ir para data atual"
        showTimeSelect
        timeFormat="HH:mm"
        timeInputLabel="Horário"
        minDate={new Date()}
        dateFormat="dd 'de' MMMM 'de' yyyy 'às' HH:mm"
        locale={pt}
        name={fieldName}
        ref={ref}
      />

      {error && <span>{error}</span>}
    </div>
  );
}
