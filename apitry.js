const postData = {
    message: "/Hi"
  };

fetch('http://192.168.138.157/hi', {
    method: 'POST', // Use POST method
    headers: {
      'Content-Type': 'application/json'  // Specify that you're sending JSON
    },
    body: JSON.stringify(postData)  // Convert the data to JSON string
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();  // Parse response as text (use .json() if JSON is expected)
  })
  .then(data => {
    console.log('Response from ESP32:', data);  // Log the response
  })
  .catch(error => {
    console.error('There was a problem with the POST operation:', error);
  });
