import styled from '@emotion/styled'

export const Header = styled.div`
  width: 100%;
  background-color: red;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Menus = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 700px;
  color: white;
  h3 {
    cursor: pointer;
  }

  h3:hover {
    filter: brightness(0.9);
  }
`
