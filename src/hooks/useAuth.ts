import { useCallback } from "react";
import { LoginCheckDto } from "../types/Auth";

export const useAuth = () => {
    // const loginAction = useCallback(
    //     (params: LoginCheckDto) => {
    //       return nuriAxios
    //         .post<LoginCheckDto>('http://test.com', params)
    //         .then((response) => {
    //           const { data } = response;
    //           if (didLoginSuccessfully(data.status)) {
    //             setToken(data.loginAfterData ?? null);
    //             navigate('/', { replace: true });
    //           }
    //         })
    //         .finally(() => {
    //           console.error();
    //         });
    //     },
    //     [setToken, navigate],
    //   );
}