import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
export const Card = styled.div`
  height: 20rem;
  overflow: hidden;
  margin: 2rem 0rem;
  position: relative;
  img {
    border-radius: 2rem;
    height: 80%;
    width: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
  }
`;
export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 80%;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem, 0rem;
`;

export const CuisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;
export const CuisCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
