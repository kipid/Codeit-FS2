import { ReactNode, createContext, useContext, useState } from 'react';

type Theme = 'purple' | 'green';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'purple',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('purple');

  return (
    <ThemeContext
      value={{ theme, setTheme }}
    >
      {children}
    </ThemeContext>
  );
}

export function useTheme() {
  const { theme } = useContext(ThemeContext);
  return theme;
}

export function useSetTheme() {
  const { setTheme } = useContext(ThemeContext);
  return setTheme;
}