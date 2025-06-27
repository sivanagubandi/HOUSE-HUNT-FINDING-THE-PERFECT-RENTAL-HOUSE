// Auth Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const authModal = document.getElementById('authModal');
    const listPropertyModal = document.getElementById('listPropertyModal');
    const signInTab = document.getElementById('signInTab');
    const signUpTab = document.getElementById('signUpTab');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    // Auth buttons
    const signInBtn = document.querySelector('.auth-buttons .btn-outline');
    const listPropertyBtn = document.querySelector('.auth-buttons .btn-primary');
    const switchToSignupLinks = document.querySelectorAll('.switch-to-signup');
    const switchToSigninLinks = document.querySelectorAll('.switch-to-signin');
    
    // Open Sign In modal
    signInBtn.addEventListener('click', function(e) {
        e.preventDefault();
        authModal.style.display = 'block';
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
    });
    
    // Open List Property modal
    listPropertyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        listPropertyModal.style.display = 'block';
    });
    
    // Close modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            authModal.style.display = 'none';
            listPropertyModal.style.display = 'none';
        });
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', function(e) {
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
        if (e.target === listPropertyModal) {
            listPropertyModal.style.display = 'none';
        }
    });
    
    // Switch between sign in and sign up
    switchToSignupLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            signInTab.classList.remove('active');
            signUpTab.classList.add('active');
        });
    });
    
    switchToSigninLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            signUpTab.classList.remove('active');
            signInTab.classList.add('active');
        });
    });
    
    // Form submissions
    document.getElementById('signInForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;
        
        // Here you would typically send this data to your backend
        console.log('Sign In Attempt:', { email, password });
        
        // For demo purposes, just close the modal
        authModal.style.display = 'none';
        alert('Sign in successful! (This is a demo)');
    });
    
    document.getElementById('signUpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signUpName').value;
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('signUpConfirm').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Here you would typically send this data to your backend
        console.log('Sign Up Attempt:', { name, email, password });
        
        // For demo purposes, just close the modal
        authModal.style.display = 'none';
        alert('Account created successfully! (This is a demo)');
    });
    
    // Property Form Functionality
    const photoUploadArea = document.getElementById('photoUploadArea');
    const photoPreview = document.getElementById('photoPreview');
    const propertyPhotosInput = document.getElementById('propertyPhotos');
    
    // Handle photo uploads
    photoUploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    photoUploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });
    
    photoUploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });
    
    propertyPhotosInput.addEventListener('change', function() {
        handleFiles(this.files);
    });
    
    function handleFiles(files) {
        photoPreview.innerHTML = '';
        
        for (let i = 0; i < Math.min(files.length, 10); i++) {
            const file = files[i];
            if (!file.type.startsWith('image/')) continue;
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Property form submission
    document.getElementById('propertyForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const formData = {
            title: document.getElementById('propertyTitle').value,
            type: document.getElementById('propertyType').value,
            price: document.getElementById('propertyPrice').value,
            bedrooms: document.getElementById('bedrooms').value,
            bathrooms: document.getElementById('bathrooms').value,
            squareFeet: document.getElementById('squareFeet').value,
            address: document.getElementById('propertyAddress').value,
            city: document.getElementById('propertyCity').value,
            state: document.getElementById('propertyState').value,
            zip: document.getElementById('propertyZip').value,
            description: document.getElementById('propertyDescription').value,
            amenities: Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(el => el.value),
            contactName: document.getElementById('contactName').value,
            contactPhone: document.getElementById('contactPhone').value,
            contactEmail: document.getElementById('contactEmail').value,
            contactAvailability: document.getElementById('contactAvailability').value,
            photos: Array.from(propertyPhotosInput.files)
        };
        
        // Here you would typically send this data to your backend
        console.log('Property Listing Submission:', formData);
        
        // For demo purposes, just close the modal
        listPropertyModal.style.display = 'none';
        alert('Property listed successfully! (This is a demo)');
    });
    
    // Save draft button
    document.getElementById('saveDraftBtn').addEventListener('click', function() {
        alert('Draft saved! (This is a demo)');
    });
});