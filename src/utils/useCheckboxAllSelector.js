import { useState } from 'react';

export const useCheckboxAllSelector = ({ initialState, items }) => {
  const [selected, setSelected] = useState(initialState || []);

  const handleOnChange = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else if (value === 'all') {
      if (selected.length === items.length - 1) {
        setSelected([]);
      } else {
        setSelected([
          ...items
            .filter(({ value }) => value !== 'all')
            .map(({ value }) => value),
        ]);
      }
    } else {
      setSelected([...selected.filter((item) => item !== 'all'), value]);
    }
  };

  // useEffect(() => {
  //   if (selected.length === items.length - 1) {
  //     setSelected([items.filter(({ value }) => value !== 'all').map()]);
  //   }
  // }, [selected]);

  return [selected, setSelected, handleOnChange];
};
