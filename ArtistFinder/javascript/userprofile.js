document.addEventListener('DOMContentLoaded', (event) => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        const user = JSON.parse(storedUser);

        // Populate user data in the profile page
        document.getElementById('username').innerText = user.uname;
        document.getElementById('email').innerText = user.email;
        // Assuming you have a field for the joined date; otherwise, you can set it to some default value
        document.getElementById('joinedDate').innerText = user.joinedDate || 'Date not available';
    } else {
        // Handle the case where no user is logged in
        alert('No user is logged in. Please log in first.');
        window.location.href = 'responsive.html'; // Redirect to home page or login page
    }

    // Logout function
    document.getElementById('logoutButton').addEventListener('click', () => {
        // Clear user session or token
        localStorage.removeItem('user');
        alert('Logging out...');
        window.location.href = 'responsive.html'; // Redirect to home page
    });
});