import "./styles.css";



export function getLocation() {
    return new Promise((resolve) => {
        const button = document.getElementById("selectLocation");

        button.addEventListener("click", (event) => {
            event.preventDefault();

            const form = document.createElement("form");
            form.id = "locationForm";

            const label = document.createElement("label");
            label.setAttribute("for","locationInput");
            label.textContent = "Enter location: ";
            const input = document.createElement("input");
            input.type = "text";
            input.id = "locationInput";
            input.placeholder = "Dallas, TX";
            label.appendChild(input);

            const submit = document.createElement("input");
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
    });
}