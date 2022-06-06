import './app-filter.css';

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'salaryMore1000', label: 'З/П больше 1000$'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    return (
      <button
        className={active ? "btn btn-light" : "btn btn-outline-light"}
        type="button"
        onClick={() => props.onFilter(name)}
        key={name}>
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;