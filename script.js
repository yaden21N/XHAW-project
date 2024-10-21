function calculateTotal() {
    // Get all selected courses
    let checkboxes = document.querySelectorAll('input[name="course"]:checked');
    let totalFee = 0;
    let selectedCourses = [];

    // Array to store course names for the invoice
    checkboxes.forEach(checkbox => {
        totalFee += parseFloat(checkbox.value);
        selectedCourses.push(checkbox.dataset.course);
    });

    // Discount logic (e.g., 10% off if 3 or more courses)
    let discount = 0;
    if (selectedCourses.length >= 3) {
        discount = totalFee * 0.10; // 10% discount
    }

    // Apply the discount
    let discountedTotal = totalFee - discount;

    // Calculate VAT (15%)
    let vat = discountedTotal * 0.15;

    // Final total with VAT
    let finalTotal = discountedTotal + vat;

    // Display the calculated fee
    document.getElementById('totalFee').innerText = finalTotal.toFixed(2);

    // Optional: Display discount message
    let discountMessage = discount > 0 
        ? `A 10% discount has been applied. You saved R${discount.toFixed(2)}!` 
        : '';
    document.getElementById('discountMessage').innerText = discountMessage;

    // Optional: Store the selected courses for generating an invoice later
    console.log('Selected Courses:', selectedCourses);
}

function submitForm() {
    
    alert("Your details have been submitted successfully!");
}