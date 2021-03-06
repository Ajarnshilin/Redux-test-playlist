import React from "react";
import styled from "styled-components";
import { ListContextV2 } from "../../context/ListContextV2";
import Cherry from "../../assets/cherry.jpeg";
import Brick from "../../assets/brick.jpeg";
import Leaf from "../../assets/leaf.jpeg";
import Scale from "../../assets/scale.jpeg";

const bg = {
  backgroundImage: `url(${Brick})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const Head = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
`;
const RightHeader = styled.div`
  margin-left: 2rem;
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;
const Pic = styled.div`
  width: 10rem;
  height: 10rem;
  backgroundimage: "url(${Cherry})";
  padding: 2rem;
  span {
    font-size: 10rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function Header() {
  const { doge } = React.useContext(ListContextV2);
  const { idSong, setIdSong, dogwow, setDogwow, name } = doge;
  const nameless = `${name[0]}.spilt('')`;
  const text = nameless[0];
  return (
    <Head>
      <Pic className="wrapper" style={bg}>
        <span>{text}</span>
      </Pic>
      <RightHeader>
        <h1>{name[0]}</h1>
        <span>
          CREART BY {name[0]} {idSong.length}{" "}
          {idSong.length >= 2 ? "songs" : "song"}, {dogwow} sec
        </span>
      </RightHeader>
    </Head>
  );
}
export default Header;
