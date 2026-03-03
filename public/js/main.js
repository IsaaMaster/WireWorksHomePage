function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message sent — we\'ll be in touch!';
  btn.style.background = '#16a34a';
  btn.disabled = true;
}
