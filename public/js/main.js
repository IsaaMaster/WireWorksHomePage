function handleSubmit(e) {
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message sent — we\'ll be in touch!';
  btn.disabled = true;
  // let the form submit naturally to Web3Forms
}