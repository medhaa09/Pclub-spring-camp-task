# Pclub-spring-camp-task

# IIT-K Student Search

This is a Student Search Web-App for students of IIT-Kanpur. We can search students based on various paramaters such as Batch, Gender, Hall, Programme, Department, Bllod-Group, Hometown and Name.


##  To Run Locally

Make sure you have Node.js and npm installed on your machine.

Clone the project

```bash
  git clone https://github.com/medhaa09/Pclub-spring-camp-task
```

Go to the project directory

```bash
  cd Pclub-spring-camp-task
```

Install dependencies

```bash
  npm install
```

Start the backend express server to connect to the database

```bash
  cd src
```
```bash
  node backend.js
```
Change the port settings according to your convenience in backend.js

Now, run the webpage on localhost by:

```bash
  npm start
```

##   Student Data Fetch and Filter Functions
Navigate to the backend folder by:
```bash
  cd ..
  cd backend task
```
Change the bearer authorization token in data.js
You can retrieve this token by observing the requests shown in the networks tab of https://search.pclub.in. The token will be under the authorization header of "find()" request.

After changing the token, execute the file to print the retrieved student data in the terminal.
```bash
  node data.js
```
Uncomment the necessary lines in data.js to save the retrieved data in a seperate file.

After saving the retrieved data in a seperate file, uncomment the necessary lines in filterdata.js to save a seperate file which contains the student data of Batch Y23. This will also create a file which will contain the Student data of Y23 batch filtered by their respective wings. Run the script with:

```bash
  filterdata.js
```






Start the backend express server to connect to the database

bash
  cd src

bash
  node backend.js

Change the port settings according to your convenience in backend.js

Now, run the webpage on localhost by:

bash
  npm start


##   Student Data Fetch and Filter Functions
Navigate to the backend folder by:
bash
  cd ..
  cd backend task

Change the bearer authorization token in data.js
You can retrieve this token by observing the requests shown in the networks tab of https://search.pclub.in. The token will be under the authorization header of "find()" request.

After changing the token, execute the file to print the retrieved student data in the terminal.
bash
  node data.js

Uncomment the necessary lines in data.js to save the retrieved data in a seperate file.

After saving the retrieved data in a seperate file, uncomment the necessary lines in filterdata.js to save a seperate file which contains the student data of Batch Y23. This will also create a file which will contain the Student data of Y23 batch filtered by their respective wings. Run the script with:

bash
  filterdata.js
