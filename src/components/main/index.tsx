import styled from "styled-components";
import UploadButton from "./UploadButton";

const Main = () => {
  return (
    <Container>
      <UploadButton />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Main;
