window.addEventListener('load', () => {
    const switchButton = document.querySelector(".switch");
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const list_el = document.querySelector("#tasks");

    switchButton.addEventListener('click', () => {
        document.body.classList.toggle("light");
        console.log("mode toggled");
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add("task");

        const task_content_el = document.createElement('div');
        task_content_el.classList.add("content");

        const task_input_el = document.createElement('input');
        task_input_el.type = "text";
        task_input_el.classList.add("text");
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add("actions");

        const task_edit_btn = document.createElement("button");
        task_edit_btn.classList.add("edit");
        task_edit_btn.innerHTML = "edit";

        const task_delete_btn = document.createElement("button");
        task_delete_btn.classList.add("delete");
        task_delete_btn.innerHTML = "delete";

        task_edit_btn.addEventListener('click', () => {
            if (task_edit_btn.innerText.toLowerCase() === 'edit') {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_btn.innerText = "save";
            } else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_btn.innerText = "edit";
            }
        });

        task_delete_btn.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        list_el.appendChild(task_el);

        task_el.appendChild(task_content_el);

        task_content_el.appendChild(task_input_el);

        task_el.appendChild(task_actions_el);

        task_actions_el.appendChild(task_edit_btn);

        task_actions_el.appendChild(task_delete_btn);

        input.value = "";
    });
});