import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 30px;
`

export const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: palevioletred;
`
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  color: ${props => props.color || 'white'};
  background-color: ${props => props.backgroundColor || 'palevioletred'};
  cursor: pointer;
  font-weight: bold;
  font-size: ${props => props.fontSize || '14px'}
  padding: 0.8em 1.5em;

  :hover {
    opacity: 0.7;
  }
`

export const SubTitle = styled.h3`
  font-size: 2em;
  text-align: center;
  color: ${props => props.color || '#ffefd5'};
  height: 38px;
  overflow: hidden;
`

export const Wrapper = styled.section`
  padding: 7em;
  height: 15rem;
  background: papayawhip;
  margin: 0px auto;
  overflow: hidden;
  text-align: center;
`

export const MaterialCumbs = styled.div`
  display: flex;
  padding: 40px;
  width: 50em;
  margin: 20px auto;
  border-radius: 4px;
  background-color: #ffff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

export const Label = styled.div`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  cursor: pointer;
  padding: 0.8em 5em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

export const Card = styled.div`
  width: ${props => props.size};
  overflow: hidden;
  cursor: pointer;
  height: 500px;
  margin: 40px auto;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: black;
`
export const CardImage = styled.div`
  height: ${props => props.size || '300px'}
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.image});
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const Column = styled.div`
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

export const ButtonContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`
