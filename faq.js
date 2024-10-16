function toggleAnswer(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    
    // Toggle the "active" class to show or hide the answer
    faqItems[index].classList.toggle('active');
}



