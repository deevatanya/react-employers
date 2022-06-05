import './app-info.css';

const AppInfo = (props) => {

  const mainValue = props.data.length;
  const increaseValue = props.data.filter(item => item.increase === true ).length;
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании</h1>
      <h2>Общее число сотрудников: {mainValue}</h2>
      <h2>Премию получат: {increaseValue}</h2>
    </div>
  )
}

export default AppInfo;