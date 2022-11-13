export interface LoginCheckDto {
    /** 로그인 사용자 ID */
    userId: string;

    /** 로그인 사용자 PW */
    password: string;
}

export interface LoginResultRes {
    /** 로그인 사용자 ID */
    userId: string;
  
    /** 로그인 성공 실패 여부 */
    status?: string;
}