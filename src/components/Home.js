import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <ButtonWrapper className='wrapper'>
        <h1>Welcome to Drive-Gig</h1>

        <Link to='/shift'>
          <Button>
            Start Shift
          </Button>
        </Link>

        <Link to='/gas'>
          <Button background="yellow" color='black'>
            Gas Fillup
          </Button>
        </Link>

        <Link to='/stats'>
          <Button>
            Statistics
          </Button>
        </Link>
      </ButtonWrapper>
    </div>
  )
}

const ButtonWrapper = styled.div`
display: grid;
`

const Button = styled.button`
background: ${props => props.background || 'purple'};
color: ${props => props.color || 'white' };

font-size: 20px;
margin: 20px;
padding: 30px;
`
