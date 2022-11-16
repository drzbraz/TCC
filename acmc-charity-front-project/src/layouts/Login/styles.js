import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
`
export const Button = styled.button`
  background-color: #4f77ff;
  border-color: #4f77ff;
  font-size: 14px;
  border-radius: 4px;
  color: white;
  padding: 12px;
  width: 100%;
  margin-top: 50px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`
export const LeftSide = styled.div`
  background-color: rgba(255, 255, 255, 0.92);
  width: 600px;
  height: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const RightSide = styled.div`
  background-color: rgb(45, 56, 94, 0.9);
  width: 100%;
  height: 100vh;
  color: white;
  font-size: 36px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  margin-top: 200px;
`

export const Input = styled.div`
  display: flex;
  flex-direction: column;
`

export const Logo = styled.div`
  width: 500px;
`
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
