import { parsingExcelResponseDto } from "../../model/response";
import instance from "../axios";

export const parsingExcel = async (file: File) => {
  const formData: FormData = new FormData();
  formData.append("file", file);

  const response = await instance.post<parsingExcelResponseDto>(
    `/excel/parse`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
