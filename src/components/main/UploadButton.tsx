import { useRef } from "react";
import styled from "styled-components";

const UploadButton = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        ref={ref}
        onChange={() => ""}
      />
      <Button
        onClick={() => {
          ref.current!.click();
        }}
      >
        엑셀 파일 업로드
      </Button>
    </>
  );
};

const Button = styled.button`
  width: 240px;
  height: 60px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export default UploadButton;
