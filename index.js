let url = `https://restcountries.eu/rest/v2/name/Malaysia`;

function waitForData(res) {
  return res.json();
}

function handleData(data) {
  let pop = data[0].population;
  let name = data[0].name;
  console.log(`The population of ${name} is ${pop}`);
}

fetch(url, { method: "GET" }).then(waitForData).then(handleData);
