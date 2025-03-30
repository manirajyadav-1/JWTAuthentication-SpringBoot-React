## 🚀 JWT Authentication with Spring Boot & Spring Security

This project implements JWT-based authentication in a Spring Boot application with Spring Security, Spring Data JPA, and MonfoDB. It provides user signup, login, and protected API routes.


📌 Features

✅ User Registration & Login<br>
✅ Secure API endpoints using JWT<br>
✅ Password hashing with BCryptPasswordEncoder<br>
✅ Stateless authentication using Spring Security<br>
✅ CORS Configuration for frontend integration<br>
✅ Custom JWTAuthenticationFilter<br>


⸻

🛠 Tech Stack
	•	Spring Boot 3<br>
	•	Spring Security<br>
	•	JWT (JSON Web Token)<br>
	•	Spring Data JPA<br>
	•	H2 / MySQL / PostgreSQL (Any Database)<br>
	•	Maven
 

⸻

🎯 API Endpoints

Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Authenticate user & get JWT token
GET	/auth/getUsers	Fetch all users (JWT Required)


⸻

🏗 Setup & Installation

1️⃣ Clone the Repository

git clone [https://github.com/yourusername/jwt-auth-spring-boot.git](https://github.com/manirajyadav-1/JWTAuthentication-SpringBoot-React.git)
cd JWTAuthentication-SpringBoot-React

2️⃣ Configure Database

Update application.properties for MySQL/PostgreSQL:

spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

For MongoDB:

spring.data.mongodb.uri=mongodb+srv://
spring.data.mongodb.database=users
spring.data.mongodb.auto-index-creation=true



### Test APIs using Postman
	•	Signup: POST /auth/signup
	•	Login: POST /auth/login
	•	Access Secure API: Add Authorization: Bearer <your_token> in headers

⸻

🔐 JWT Token Usage

After login, you will receive a JWT Token:

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}

Use this token in Authorization header to access secured endpoints.

⸻


💡 Contributing

Feel free to fork this repository and submit pull requests. All contributions are welcome! 😊

