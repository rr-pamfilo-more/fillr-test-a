module.exports.extract = function (window) {

  const obj = {};

  // specific form which contains the Amazon and eCommerce controls
  const pageForm = window.document.forms[1];

  // get and store all form elements
  const formCtrls = Array.from(pageForm.elements);

  // iterate through elements
  formCtrls.forEach((element) => {
    // passes in all name attributes and control labels to each variable and combines it to create the metadata
    const nameAttributes = element.name;
    const ctrlLabels = element.parentNode.previousElementSibling.innerText; // will be obj keys
    obj[ctrlLabels] = ctrlLabels + " " + nameAttributes; // will be obj values
  })

  return obj
}




