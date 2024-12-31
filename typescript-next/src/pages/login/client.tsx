import { postLogin } from "@/apis/authService";
import { useState } from "react";
import { useForm } from "react-hook-form";

const EMAIL_REGEX = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function LogIn() {
  const [pwdIsVisible, setPwdIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      const userData = await postLogin(data);
    } catch (err) {

    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-96 max-w-full mx-auto p-1">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-stretch w-full">
        <label className="w-full" htmlFor="email">이메일</label>
        <input className="w-full p-2 h-10 text-slate-700 border border-gray-300 rounded-lg"
          {...register('email', {
            required: '이메일을 입력해 주세요.',
            pattern: {
              value: EMAIL_REGEX,
              message: '유효한 이메일을 입력해 주세요.',
            },
          })}
          type="email"
          id="email"
          placeholder="이메일"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
        <label className="w-full" htmlFor="password">비밀번호</label>
        <div className="relative w-full h-10 text-slate-700">
          <input className="w-full h-full p-2 border border-gray-300 rounded-lg"
            {...register('password', {
              required: '암호를 입력해 주세요.',
              minLength: {
                value: 8,
                message: '암호는 최소 8글자 이상이어야 합니다.',
              },
            })}
            type="password"
            id="password"
            placeholder="비밀번호"
          />
        </div>
        {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
        <button className="w-full h-10 rounded-lg text-white bg-blue-600" type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LogIn;