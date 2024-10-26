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

  const tableBody = document.getElementById("signature-table-body");
  tableBody.innerHTML = ""; // Clear any existing rows

  signatures.forEach((signature) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${signature.name}</td>
      <td>${signature.offset}</td>
      <td>${signature.pattern}</td>
      <td>${signature.lastUpdate}</td>
    `;
    tableBody.appendChild(row);
  });
}
