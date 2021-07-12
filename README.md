<h1>Clone Project</h1>
<text>git clone https://github.com/essamabuissa/LiwaTask-FrontEnd.git</text>
<h2>Install Dependencies</h2>
<text>yarn install</text>
<h2>Start Project</h3>
<text>yarn start</text>
<h2>Home Page</h3>
<h3>Check Permessions </h3>
<text>after starting the project , the first screen that will be shown is Home page , with list of candidates , im sending the X-ADMIN1 header in fetchCandidates function that is in the src/store/actions/index.js ,to check the permessions comment lines 7-9 in src/store/actions/index.js , once you commented it ,  refresh the page , and a 401 error will raise in alert. </text>
<text> You will see a SignUp button at the NavBar , press on it . </text>
<text> Now fill the fields , P.S: Couldn't make the file in the backend , but you will see a commented text field in SignUp component that contains the uploading proccess , press sign up and in this situation by default  you will signed up as an admin , and you will see a welcome message with your name at the NavBar, and a Home button in the NavBar so you can check the candidates list , if you wanna signup as a candidate , comment lines 26-28 in src/store/actions/index.js , and now you will see a welcome message with your name but there's no Home button because candidates cant see candidates list </text>
