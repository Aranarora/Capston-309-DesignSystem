const copyButtonLabel = "Copy";

// use a class selector if available
let blocks = document.querySelectorAll(".html");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}

// css
const copyButtonLabel1 = "Copy";

// use a class selector if available
let blocks1 = document.querySelectorAll(".css");

blocks1.forEach((block1) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button1 = document.createElement("button");

    button1.innerText = copyButtonLabel1;
    block1.appendChild(button1);

    button1.addEventListener("click", async () => {
      await copyCode(block1, button1);
    });
  }
});

async function copyCode(block1, button1) {
  let code = block1.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button1.innerText = "Copied";

  setTimeout(() => {
    button1.innerText = copyButtonLabel1;
  }, 700);
}