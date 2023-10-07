import Select from 'react-select';

type OptionsTypes = {
  value: string;
  label: string;
};

const InputSelect = (props: any) => {
  const options: OptionsTypes[] = props.options;
  const handleSelectChange = props.handleSelectChange

  return (
    <>
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'black' : 'green',
          }),
        }}
        options={options}
        onChange={handleSelectChange}
        placeholder="Search here..."
      />
    </>
  );
};

export default InputSelect;
