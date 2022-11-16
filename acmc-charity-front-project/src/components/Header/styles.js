import styled from '@emotion/styled'

export const Header = styled.div`
  width: 100%;
  background-color: rgb(45, 56, 94, 0.8);
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SocialMedia = styled.div`
  width: 100%;
  color: white;
  background-color: rgb(45, 56, 94, 1);
  height: 2rem;
  display: flex;
  align-items: center;
  padding-right: 15px;
  justify-content: flex-end;
  top: 0;
  position: absolute;
`

export const Menus = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-evenly;
  width: 700px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  a:hover {
    filter: brightness(0.9);
  }
`
