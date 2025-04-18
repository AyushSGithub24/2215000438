# 2215000438


{
    "email": "ayush.gupta4_cs22@gla.ac.in",
    "name": "ayush gupta",
    "rollNo": "2215000438",
    "accessCode": "CNneGT",
    "clientID": "7a3f112b-ec36-45f5-85f2-ba7398947f29",
    "clientSecret": "ZjGFzZWTTBaDUqnn"
}




{
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3MDk0LCJpYXQiOjE3NDQ5NTY3OTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.C-1ZOe1n4cNaeJoIrwasDz2vuWvF-8Gz9joG1_exmoc",
    "expires_in": 1744954284
}


input
const url = "http://20.244.56.144/evaluation-service/users";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3NTQ0LCJpYXQiOjE3NDQ5NTcyNDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.mCVh_12EDwtr0HpKAhiUcawjWneRiORGvlGuajSMFEY";

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

output
![alt text](image.png)




input
const url = "http://20.244.56.144/evaluation-service/users/1/posts";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU3OTQ4LCJpYXQiOjE3NDQ5NTc2NDgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjdhM2YxMTJiLWVjMzYtNDVmNS04NWYyLWJhNzM5ODk0N2YyOSIsInN1YiI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiJ9LCJlbWFpbCI6ImF5dXNoLmd1cHRhNF9jczIyQGdsYS5hYy5pbiIsIm5hbWUiOiJheXVzaCBndXB0YSIsInJvbGxObyI6IjIyMTUwMDA0MzgiLCJhY2Nlc3NDb2RlIjoiQ05uZUdUIiwiY2xpZW50SUQiOiI3YTNmMTEyYi1lYzM2LTQ1ZjUtODVmMi1iYTczOTg5NDdmMjkiLCJjbGllbnRTZWNyZXQiOiJaakdGelpXVFRCYURVcW5uIn0.BytsTO8lJuHyqQpJhB32gmVV8u6c1loHy9IMBhTC8sU";

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




output
User data: {
  posts: [
    { id: 333, userid: 1, content: 'Post about honey' },
    { id: 248, userid: 1, content: 'Post about zebra' },
    { id: 934, userid: 1, content: 'Post about x-ray' },
    { id: 315, userid: 1, content: 'Post about house' },
    { id: 622, userid: 1, content: 'Post about honey' },
    { id: 172, userid: 1, content: 'Post about lamp' },
    { id: 754, userid: 1, content: 'Post about bat' },
    { id: 714, userid: 1, content: 'Post about giraffe' },
    { id: 487, userid: 1, content: 'Post about watermelon' },
    { id: 356, userid: 1, content: 'Post about giraffe' },
    { id: 915, userid: 1, content: 'Post about giraffe' },
    { id: 945, userid: 1, content: 'Post about honey' },
    { id: 258, userid: 1, content: 'Post about apple' },
    { id: 555, userid: 1, content: 'Post about honey' },
    { id: 425, userid: 1, content: 'Post about cat' },
    { id: 467, userid: 1, content: 'Post about tiger' },
    { id: 140, userid: 1, content: 'Post about orange' },
    { id: 360, userid: 1, content: 'Post about apple' },
    { id: 198, userid: 1, content: 'Post about orange' },
    { id: 370, userid: 1, content: 'Post about elephant' },
    { id: 250, userid: 1, content: 'Post about mountain' },
    { id: 724, userid: 1, content: 'Post about queen' },
    { id: 971, userid: 1, content: 'Post about igloo' },
    { id: 396, userid: 1, content: 'Post about mountain' },
    { id: 821, userid: 1, content: 'Post about zebra' },
    { id: 867, userid: 1, content: 'Post about elephant' },
    { id: 976, userid: 1, content: 'Post about cat' },
    { id: 720, userid: 1, content: 'Post about watermelon' },
    { id: 180, userid: 1, content: 'Post about tiger' },
    { id: 307, userid: 1, content: 'Post about grape' },
    { id: 895, userid: 1, content: 'Post about dog' },
    { id: 761, userid: 1, content: 'Post about river' },
    { id: 395, userid: 1, content: 'Post about rose' },
    { id: 990, userid: 1, content: 'Post about ocean' },
    { id: 893, userid: 1, content: 'Post about notebook' },
    { id: 603, userid: 1, content: 'Post about jungle' },
    { id: 335, userid: 1, content: 'Post about rose' },
    { id: 203, userid: 1, content: 'Post about fox' },
    { id: 355, userid: 1, content: 'Post about nest' },
    { id: 966, userid: 1, content: 'Post about notebook' },
    { id: 560, userid: 1, content: 'Post about banana' },
    { id: 540, userid: 1, content: 'Post about sun' },
    { id: 605, userid: 1, content: 'Post about notebook' },
    { id: 109, userid: 1, content: 'Post about tree' },
    { id: 334, userid: 1, content: 'Post about ocean' },
    { id: 920, userid: 1, content: 'Post about ant' },
    { id: 869, userid: 1, content: 'Post about sunflower' },
    { id: 103, userid: 1, content: 'Post about pear' },
    { id: 589, userid: 1, content: 'Post about orange' },
    { id: 123, userid: 1, content: 'Post about ocean' },
    { id: 926, userid: 1, content: 'Post about x-ray' },
    { id: 650, userid: 1, content: 'Post about zebra' },
    { id: 953, userid: 1, content: 'Post about bat' },
    { id: 759, userid: 1, content: 'Post about fox' },
    { id: 635, userid: 1, content: 'Post about queen' },
    { id: 686, userid: 1, content: 'Post about umbrella' },
    { id: 420, userid: 1, content: 'Post about island' },
    { id: 774, userid: 1, content: 'Post about sunflower' },
    { id: 956, userid: 1, content: 'Post about vampire' },
    { id: 191, userid: 1, content: 'Post about x-ray' },
    { id: 260, userid: 1, content: 'Post about piano' },
    { id: 242, userid: 1, content: 'Post about giraffe' },
    { id: 749, userid: 1, content: 'Post about piano' },
    { id: 692, userid: 1, content: 'Post about banana' },
    { id: 400, userid: 1, content: 'Post about umbrella' },
    { id: 931, userid: 1, content: 'Post about x-ray' },
    { id: 667, userid: 1, content: 'Post about banana' },
    { id: 818, userid: 1, content: 'Post about rose' },
    { id: 819, userid: 1, content: 'Post about igloo' },
    { id: 638, userid: 1, content: 'Post about tiger' },
    { id: 716, userid: 1, content: 'Post about pear' },
    { id: 876, userid: 1, content: 'Post about fox' },
    { id: 161, userid: 1, content: 'Post about jacket' },
    { id: 171, userid: 1, content: 'Post about queen' },
    { id: 269, userid: 1, content: 'Post about kite' },
    { id: 883, userid: 1, content: 'Post about umbrella' },
    { id: 937, userid: 1, content: 'Post about orange' },
    { id: 669, userid: 1, content: 'Post about watermelon' },
    { id: 763, userid: 1, content: 'Post about elephant' },
    { id: 469, userid: 1, content: 'Post about fox' },
    { id: 866, userid: 1, content: 'Post about nest' },
    { id: 514, userid: 1, content: 'Post about kite' },
    { id: 891, userid: 1, content: 'Post about orange' },
    { id: 830, userid: 1, content: 'Post about grape' },
    { id: 954, userid: 1, content: 'Post about apple' },
    { id: 144, userid: 1, content: 'Post about whale' },
    { id: 802, userid: 1, content: 'Post about violet' },
    { id: 767, userid: 1, content: 'Post about fox' },
    { id: 980, userid: 1, content: 'Post about grape' },
    { id: 104, userid: 1, content: 'Post about cherry' },
    { id: 559, userid: 1, content: 'Post about lemon' },
    { id: 814, userid: 1, content: 'Post about xylophone' },
    { id: 262, userid: 1, content: 'Post about jungle' },
    { id: 993, userid: 1, content: 'Post about monkey' },
    { id: 879, userid: 1, content: 'Post about bat' },
    { id: 380, userid: 1, content: 'Post about jungle' },
    { id: 145, userid: 1, content: 'Post about bat' },
    { id: 839, userid: 1, content: 'Post about fox' },
    { id: 951, userid: 1, content: 'Post about piano' },
    { id: 541, userid: 1, content: 'Post about sunflower' },
    ... 186 more items
  ]
}

![alt text](image-1.png)



input
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

output
![alt text](image-2.png)

