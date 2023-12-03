
const FormSelect = ({label, name, list, defaultValue, size}) => {
    return (
      <div className="form-control capitalize">
        <label htmlFor={name} className="label">
          <span className="label-text capitalize">{label}</span>
        </label>
        <select
          name={name}
          id={name}
          className={`select select-bordered ${size} capitalize`}
          defaultValue={defaultValue}

        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  export default FormSelect