import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: auto;
  display: flex;
  gap: 20px;
  .menuIsOpen {
    @media only screen and (max-width: 1000px) {
      display: block;
      transition: all 0.3s ease;
    }
  }
`

export const ProductsContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
`
