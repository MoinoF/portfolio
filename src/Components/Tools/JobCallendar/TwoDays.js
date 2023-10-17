import React from 'react';
import { styled } from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Callendar.module.css'
import {ToogleContext} from '../../ToogleContext/ToogleContext';
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


const Tool = styled.div`
`

const DateChoose = styled.div`
`;



const ChooseParagraph = styled.p``

const TwoDays = () => {

  const [selectedDate, setSelectedDate] = React.useState(null);

  const {toogle, setToogle} = React.useContext(ToogleContext)

  // Função para lidar com a seleção de uma data
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

// Função para verificar se uma data deve ser pintada de vermelho (intervalo de 3 dias)
const isDateRed = (date) => {
  if (!selectedDate) return false;
  const timeDiff = Math.abs(date.getTime() - selectedDate.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff % 3 === 0;
};


  // Função para personalizar o estilo das datas no calendário
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      return (
        <div className={`tile ${isDateRed(date) ? 'red' : 'green'}`}>
          {date.getDate()}
        </div>
      );
    }
    return null;
  };
  
  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle')

    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])



  return (
    <Tool >
        <div className="App">
      <h1>Calendário</h1>
      <div className="calendar">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={tileContent}
        />
        <div className="date-colors">
          <div className="legend">
            <div className="color red"></div>
            <span>Datas em vermelho (intervalo de 2 dias)</span>
          </div>
          <div className="legend">
            <div className="color green"></div>
            <span>Outras datas</span>
          </div>
        </div>
      </div>
      <div className="selected-date">
        {selectedDate && (
          <p>Data selecionada: {selectedDate.toDateString()}</p>
        )}
      </div>
    </div>

    </Tool>
  )
}

export default TwoDays