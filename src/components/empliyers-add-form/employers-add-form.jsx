import { Component } from 'react';

import './employers-add-form.css';

class EmployersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onSubmitAddForm = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || null) {
      alert('Введите фамилию и имя сотрудника!');
    } else if (this.state.salary <= 0 || null) {
      alert('Введите З/П сотрудника!');
    } else this.props.onSubmit({...this.state});
  }
  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form 
          onSubmit={this.onSubmitAddForm}
          className="add-form d-flex">
          <input type="text"
            className="form-control new-post-label"
            placeholder="Фамилия и Имя"
            name="name"
            value={name}
            onChange={this.onValueChange} />
          <input type="number"
            className="form-control new-post-label"
            placeholder="З/П в $"
            name="salary"
            value={salary}
            onChange={this.onValueChange} />
          <button type="submit"
            className="form-control new-post-label">
              Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployersAddForm;