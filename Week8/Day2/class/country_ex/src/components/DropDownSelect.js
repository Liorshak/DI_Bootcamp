import React from "react";

// const DropDownSelect = (promps) => {
//   const countryArr = promps.countries;
//   console.log(countryArr);
//   return (
//     <div>
//       <select name="country">
//         {countryArr.map((item) => {
//           return <option value={item.country}>{item.country}</option>;
//         })}
//       </select>
//     </div>
//   );
// };

class DropDownSelect extends React.Component {
  constructor() {
    super();
    this.state = {
      arrCountry: [],
      arrCities: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => this.setState({ arrCountry: data }))
      .catch((err) => console.log(err));
  }

  getcities = (e) => {
    console.log(e.target.value);
    return fetch(`http://localhost:5000/country/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => this.setState({ arrCities: data }))
      .catch((err) => console.log(err));
  };

  render() {
    const { arrCountry, arrCities } = this.state;
    return (
      <div>
        <select name="country" onChange={this.getcities}>
          <option>Please select a country</option>
          {arrCountry.map((item, i) => {
            return (
              <option key={i} value={item.country_id}>
                {item.country}
              </option>
            );
          })}
        </select>

        <select name="city">
          <option>Please select a city</option>
          {arrCities.map((item, i) => {
            return (
              <option key={i} value={item.city_id}>
                {item.city}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default DropDownSelect;
