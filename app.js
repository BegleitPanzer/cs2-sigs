const password = "basedrapist"; // Set your password here
const signaturesUrl = "signatures.json"; // Path to the JSON file containing signature data

function authenticate() {
  const inputPassword = document.getElementById("password").value;
  if (inputPassword === password) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadSignatures();
  } else {
    document.getElementById("error-message").innerText = "Incorrect password. Try again.";
  }
}

async function loadSignatures() {
  const response = await fetch(signaturesUrl);
  const signatures = await response.json();

  const signatureList = document.getElementById("signature-list");
  signatureList.innerHTML = "<h2>Stored Signatures</h2>";

  signatures.forEach((signature) => {
    const signatureDiv = document.createElement("div");
    signatureDiv.classList.add("signature");

    signatureDiv.innerHTML = `
      <p><strong>Name:</strong> ${signature.name}</p>
      <p><strong>Signature:</strong> ${signature.value}</p>
    `;
    signatureList.appendChild(signatureDiv);
  });
}
