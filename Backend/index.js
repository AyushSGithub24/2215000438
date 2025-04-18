const url = "http://20.244.56.144/evaluation-service/posts/150/comments";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU4NTIwLCJpYXQiOjE3NDQ5NTgyMjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.iLd4c7bmQ7nIxe1SPixuxiBsvpQnb4urgroAmXSquJY";

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
  }
  return response.json();
})
.then(data => {
  console.log('User data:', data);
})
.catch(error => {
  console.error('Error fetching user data:', error.message);
});

