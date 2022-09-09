import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`
export const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
export const LeftSide = styled.div`
  background-color: rgba(255, 255, 255, 0.92);
  width: 600px;
  height: auto;
`
export const RightSide = styled.div`
  background-color: rgb(45, 56, 94, 0.9);
  width: 100%;
  height: 100vh;
`
