
function toggleAnswer(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const icon = button.querySelector('.faq-icon');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    icon.textContent = '+';
  } else {
    answer.style.display = 'block';
    icon.textContent = '-';
  }
}
