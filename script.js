let total = 0;

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  if (name === "" || amount === "") {
    alert("Please enter expense details");
    return;
  }

  const li = document.createElement("li");
  li.innerText = name + " - ₹" + amount;

  document.getElementById("expenseList").appendChild(li);

  total = total + parseInt(amount);
  document.getElementById("totalAmount").innerText = total;

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}
