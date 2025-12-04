document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grievance-form');
    const submissionMessage = document.getElementById('submission-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  
         
        const topic = document.getElementById('topic').value;
        const details = document.getElementById('details').value;

        if (!topic || !details) {
            alert('Please select a topic and fill in the details.');
            return;
        }

        
        console.log('Form Submitted Data:');
        console.log('Name:', document.getElementById('name').value);
        console.log('Topic:', topic);
        console.log('Details:', details);
         
        
        submissionMessage.style.display = 'block';

         
        form.reset();

         
        setTimeout(() => {
            submissionMessage.style.display = 'none';
        }, 5000); 
    });
});