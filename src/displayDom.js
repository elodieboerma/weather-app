import "./styles.css";

export function getLocation() {
  return new Promise((resolve) => {
    const form = document.createElement("form");
    form.id = "locationForm";

    const label = document.createElement("label");
    label.setAttribute("for", "locationInput");
    label.textContent = "Enter location: ";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "locationInput";
    input.placeholder = "Dallas, TX";
    label.appendChild(input);

    const submit = document.createElement("input");
    submit.id = "submit";
    submit.type = "submit";
    submit.textContent = "Set location";

    form.append(label, submit);
    document.body.appendChild(form);

    submit.addEventListener("click", (event) => {
      event.preventDefault();

      resolve(input.value);

      form.remove();
    });
  });
}

// need to fix
export async function displayData(dataText) {
  console.log(dataText);
  const div = document.createElement("div");
  div.textContent = dataText;
  document.body.appendChild(div);
}
