import CreatableSelect from 'react-select/async-creatable';

type OptionsTypes = {
  value: string;
  label: string;
};

const InputSelect = (props: any) => {
  const options: OptionsTypes[] = props.options;
  const handleSelectChange = props.handleSelectChange


  const filterOptions = (inputValue: string) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  
  const promiseOptions = (inputValue: string) =>
    new Promise<OptionsTypes[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  return (
    <>
      <CreatableSelect
        cacheOptions
        isClearable
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'black' : 'green',
          }),
        }}
        defaultOptions
        onChange={handleSelectChange}
        loadOptions={promiseOptions}
        placeholder="Search here..."
      />
    </>
  );
};

export default InputSelect;
