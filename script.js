function showForm(role) {
  document.getElementById("performer-form").classList.add("hidden");
  document.getElementById("customer-form").classList.add("hidden");
  document.getElementById(`${role}-form`).classList.remove("hidden");
}

function register(event, role) {
  event.preventDefault();
  alert(`Регистрация ${role} отправлена! Код подтверждения скоро придёт.`);
  window.location.href = "verify.html";
}

function openChat(user) {
  document.getElementById("chat-title").textContent = `Чат с ${user}`;
  document.getElementById("chat-messages").innerHTML = `<p>Сообщение от ${user}: Привет, нужен заказ!</p>`;
}

function sendMessage() {
  const input = document.getElementById("message-input");
  const msg = input.value.trim();
  if (msg) {
    document.getElementById("chat-messages").innerHTML += `<p>Вы: ${msg}</p>`;
    input.value = "";
  }
}