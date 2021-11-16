// const contryInfo= fetch("http://localhost:3000/info").then(res => res.json()).catch(err => console.log);

(function () {
  let actionBtn = document.getElementById("actionBtn");
  actionBtn.addEventListener("click", sendData);

  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", clearAll);
})();

function sendData(e) {
  e.preventDefault();

  let country = document.getElementById("country").value;
  let countryId = document.getElementById("country_id").value;
  let method = document.getElementById("method").value;
  let main = document.getElementById("main");

  if (method == "GET") {
    ///if get no need for any value just display all ('/api/countries')
    fetch("http://localhost:3000/api/countries")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addElem(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  if (method == "POST") {
    //if post need  both filled in ('/api/countries)
    if (
      country.length > 0 &&
      /^[A-Za-z]*$/gm.test(country) &&
      countryId.length > 0 &&
      /^[0-9]*$/gm.test(countryId)
    ) {
      fetch("http://localhost:3000/api/countries", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ country, countryId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          addElem([{ country, countryId }]);
          addInfo(`${country} ${countryId} was updated successfully`);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Not valid input please check your self");
    }

    // let newData = { country, countryId };
    // addElem(newData);
  }

  if (method == "PUT") {
    ///if put need only need country ('/api/countries/:countryName')

    if (country.length > 0 && /^[A-Za-z]*$/gm.test(country)) {
      fetch(`http://localhost:3000/api/countries/${country}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ country, countryId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          addElem(data);
          addInfo("is a new entery in the table");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Not valid input please check your self");
    }
  }

  if (method == "DELETE") {
    // if delete need only id fill ('/api/countries/:countryId')

    if (countryId.length > 0 && /^[0-9]*$/gm.test(countryId)) {
      let NewInfo = fetch(`http://localhost:3000/api/countries/${countryId}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ country, countryId }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          addElem(data);
        })
        .then((data) => addInfo("was deleted"))
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Not valid input please check your self");
    }
  }
}

function addElem(data) {
  let newDiv = document.createElement("Div");
  newDiv.setAttribute("id", "dataOutput");
  for (let item of data) {
    let newP = document.createElement("p");
    newP.appendChild(document.createTextNode(JSON.stringify(item)));
    console.log(newP);
    newDiv.appendChild(newP);
  }
  main.appendChild(newDiv);
}
//important country and countryId

function clearAll(e) {
  e.preventDefault();
  let dataOutput = document.getElementById("dataOutput");
  dataOutput.remove();
}

function addInfo(str) {
  let dataOutput = document.getElementById("dataOutput");
  let newP = document.createElement("p");
  newP.appendChild(document.createTextNode(str));
  dataOutput.appendChild(newP);
}
