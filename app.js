const storedHash = "99c0a12047e1d0092c6d2c0b15ce5551"; // MD5 hash of the correct password
const signaturesUrl = "signatures.json";

function authenticate() {
  const inputPassword = document.getElementById("password").value;
  const inputHash = md5(inputPassword); // Hash the input password

  if (inputHash === storedHash) {
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

  const signatureTableBody = document.getElementById("signature-table").querySelector("tbody");
  signatureTableBody.innerHTML = "";

  signatures.forEach((signature) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${signature.name}</td>
      <td>${signature.offset}</td>
      <td>${signature.pattern}</td>
      <td>${signature.lastUpdate}</td>
      <td><button onclick="editSignature('${signature.name}')">Edit</button></td>
    `;

    signatureTableBody.appendChild(row);
  });
}

function editSignature(signatureName) {
  // Function to handle editing; populate a form or modal to submit changes
}
