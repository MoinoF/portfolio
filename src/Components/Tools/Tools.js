import React from 'react'
import { ToogleContext } from '../ToogleContext/ToogleContext';
import { styled } from 'styled-components'
import Title from '../Title/Title'
import JobCallendar from './JobCallendar/JobCallendar';

const DivTools = styled.div`
  min-height: 100vh;
  max-height: 100vh;
  background: ${({toogle}) => (!toogle ? '#101010' : '#e6e6e6')};
  color: ${({toogle}) => (!toogle ? "#e6e6e6" : "#101010")}
`;

const ToolsContainer = styled.div`
  max-width: 75rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: grid;
`;

const Tool = styled.div`
`;

const Tools = () => { 

  const { toogle, setToogle } = React.useContext(ToogleContext);

  React.useEffect(() => {

    const local = window.localStorage.getItem('toogle')

    local === 'true' ? setToogle(true) : setToogle(false)

  }, [setToogle])


  return (
    <DivTools toogle={toogle} >
      <ToolsContainer >
        <Title title='Tools' />
        <Tool>
          <JobCallendar />
        </Tool>
      </ToolsContainer>
    </DivTools>
  )
}

export default Tools