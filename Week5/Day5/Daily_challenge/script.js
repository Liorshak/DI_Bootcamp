(function () {
  let convert = document.getElementById("convert");
  convert.addEventListener("click", converter);
})();

let data;
let identifier;

let from = document.getElementById("from");
let to = document.getElementById("to");

let getData = async () => {
  let urls = [
    "http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1",
    "https://pkgstore.datahub.io/core/currency-codes/codes-all_json/data/029be9faf6547aba93d64384f7444774/codes-all_json.json",
  ];

  let dataList = await Promise.all(
    urls.map((urls) => {
      return fetch(urls)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    })
  );

  data = dataList[0].quotes;
  identifier = dataList[1];
  addSelection(data, identifier);
};

getData();

function addSelection(data, identifier) {
  console.log(data, identifier);
  let CurrenciesARR = Object.keys(data).filter((v) => v != null);
  let identifierARR = identifier.filter((v) => v.AlphabeticCode != null);
  console.log(CurrenciesARR);
  console.log(identifierARR);
  let selectOption = CurrenciesARR.map((v) => {
    let index = identifierARR.findIndex((x) => {
      console;
      if (`USD${x.AlphabeticCode}` === v) return true;
    });

    console.log(index);
    if (index >= 0) {
      return [identifierARR[index].Currency, v];
    }
  });

  selectOption = selectOption.filter((v) => v != undefined);

  selectOption.forEach((v) => {
    newFrom = document.createElement("option");
    newFrom.appendChild(document.createTextNode(v[0]));
    newFrom.setAttribute("value", v[1]);
    from.appendChild(newFrom);

    newTo = document.createElement("option");
    newTo.appendChild(document.createTextNode(v[0]));
    newTo.setAttribute("value", v[1]);
    to.appendChild(newTo);
  });
}

function converter(event) {
  event.preventDefault();
  let amount = document.getElementById("amount");

  if (from.value.length > 0 && to.value.length > 0) {
    if (amount.value.length > 0) {
      amount = parseFloat(amount.value);
      console.log(amount);
      console.log(data[from.value]);
      console.log(data[to.value]);
      let total = (amount / data[from.value]) * data[to.value];

      let result = document.getElementById("result");
      result.textContent = `${
        Math.round(total * 100) / 100
      } ${to.value.substring(3)}`;
    } else {
      alert("Please enter valid amount of currency.");
    }
  } else {
    alert("Please select FROM currency and TO currency");
  }
}
