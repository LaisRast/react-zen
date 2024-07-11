import { create } from 'zustand';

const initialState = {
  name: 'zen',
};

const store = create(() => ({ ...initialState }));

export const useStore = store;

function setTheme(name: string) {
  store.setState({ name });

  document.body.setAttribute('data-theme', name);
}

export default function useTheme() {
  const theme = useStore();

  return { theme, setTheme };
}
