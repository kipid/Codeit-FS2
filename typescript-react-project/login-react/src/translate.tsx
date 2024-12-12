import { createContext, ReactNode, useContext, useState } from 'react';

type Locale = 'ko' | 'en';

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
}>({
  locale: 'ko',
  setLocale: () => {},
});

interface Props {
  children: ReactNode;
}

export function LocaleContextProvider({ children }: Props) {
  const [locale, setLocale] = useState<Locale>('ko');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocale,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

const dict = {
  ko: {
    signin: '로그인',
    username: '아이디',
    'email or phone number': 'Email 또는 전화번호',
    password: '비밀번호',
    'forgot your password?': '비밀번호를 잊으셨나요?',
    'new user?': '회원이 아니신가요?',
    signup: '가입하기',
    logout: '로그아웃',
  },
  en: {
    signin: 'Signin',
    username: 'Username',
    'email or phone number': 'Email or phone number',
    password: 'Password',
    'forgot your password?': 'Forgot your password?',
    'new user?': 'New user?',
    signup: 'Signup',
  },
};

function useLocale() {
  const { locale } = useContext(LocaleContext);
  return locale;
}

export function useSetLocale() {
  const { setLocale } = useContext(LocaleContext);
  return setLocale;
}

export function useTranslate(): (key: keyof typeof dict[Locale]) => string {
  const locale = useLocale();
  const t = (key: keyof typeof dict[Locale]) => dict[locale][key];
  return t;
}
