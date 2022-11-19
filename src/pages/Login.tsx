import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { LoginCheckDto } from "../types/Auth";
import crypto from 'crypto-js'

const defaultFormData: LoginCheckDto = {
    userId: '',
    password: '',
  };

export const Login = () => {
    const [formData, setFormData] = useState(defaultFormData);

    useEffect(() => {
    }, [])

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData((prev) => {
          return { ...prev, [field]: e.target.value };
        });
      }, []);
    
      const onSubmit = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // password 암호화, secret key 설정
          formData.password = crypto.AES.encrypt(formData.password, 'secret key').toString();
          axios.post<LoginCheckDto>('http://test.com', formData)
               .then((response) => {
                console.log(response);
               })
        },
        [formData],
      );

    return (
        <>
         <form onSubmit={onSubmit}>
                <div className="mb-4">Log-in</div>
                <div className="mb-3">
                  <input
                    name="userId"
                    onChange={(e) => onChange(e, 'userId')}
                    value={formData.userId}
                    type="text"
                    className="form-control bg-transparent border-secondary text-white"
                    placeholder="Please Input Login ID."
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="password"
                    onChange={(e) => onChange(e, 'password')}
                    value={formData.password}
                    type="password"
                    className="form-control bg-transparent border-secondary text-white"
                    placeholder="Please Input Login Password."
                  />
                </div>
                <button type="submit" className="btn btn-primary float-end">로그인</button>
              </form>
        </>
    )
}