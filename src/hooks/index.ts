import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { getExcelResponseDto } from "../model/response";
import toast from "react-hot-toast";

const BASE_URL = process.env.REACT_APP_PUBLIC_BASE_URL;

export const useParsingExcel = () => {
  return useMutation(
    (formData: FormData) =>
      axios.post<getExcelResponseDto>(`${BASE_URL}/excel/parse`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    {
      onSuccess: (response) => {
        toast.success("파일이 업로드 되었습니다.", { duration: 1000 });
        if (window.webkit) {
          window.webkit.messageHandlers.btnClick.postMessage(response.data);
        }
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("정보를 다시 확인해 주세요.");
              break;
            case 401:
              toast.error("개발자에게 문의해 주세요.");
              break;
          }
        } else toast.error("네트워크 연결 상태를 확인해 주세요.");
      },
    }
  );
};
