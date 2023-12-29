import { useRef } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useParsingExcel } from "../../hooks";

const UploadButton = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { mutate } = useParsingExcel();

  const fileChange = async (e: any) => {
    const file = e.target.files[0];
    const formData: FormData = new FormData();
    formData.append("file", file);

    if (formData) {
      mutate(formData);
    } else {
      toast.error("엑셀 파일을 선택해주세요.", { duration: 1000 });
    }
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        ref={ref}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        onChange={fileChange}
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
