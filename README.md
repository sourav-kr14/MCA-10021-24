## 📌 Vetty Assignment: Angular Jira-Style Task Board

A fully functional, simplified Kanban-style task board built using Angular 17 (Standalone Components) and styled with TailwindCSS.
This project includes user authentication, drag-and-drop task management, and persistent storage using LocalStorage.

### 🚀 Features
## ✅ Login Page
- Tailwind-styled UI
- Hardcoded credentials with validation
- Error message for incorrect login

## ✅ Jira-Style Board
- Four workflow columns:
- To Do
- In Progress
- Need Review
- Completed

## ✅ Task Creation Modal
- Add Task ID
- Add Title
- Add Description
- Tasks added to the correct column

## ✅ Drag & Drop (Angular CDK)
- Move tasks between columns
- Drag state persists across refresh

## ✅ LocalStorage Persistence
- Automatically saves board data
- Tasks remain after page reload
- SSR-safe implementation

## ✅ Clean UI / UX
- Fully styled using TailwindCSS
- Modern, Jira-inspired look
- Left sidebar navigation
- Responsive layout

## 🛠️ Tech Stack
- Angular 17	
- TailwindCSS	
- Angular CDK	
- TypeScript
- LocalStorage API	

## 🔑 Login Credentials
- Field	Value
- Emai-	admin@test.com
- Password- admin123
- ▶️ How to Run the Project
- 1️⃣ Install Dependencies
- npm install @angular/cdk

- 2️⃣ Start Development Server
- ng serve

- 3️⃣ Open in Browser
- http://localhost:4200

## 🧪 How to Use the Board
- ➤ Add a Task
- Click the + button under any column
- Enter Task ID, Title, and Description
- Click Save

- ➤ Move a Task
- Drag a task card and drop it into another workflow column

- ➤ Test Persistence
- Refresh the page — tasks will remain saved

## 📂 Project Structure
src/
 - ├── app/
 │   ├── login/
 │   │   ├── login.component.ts
 │   │   ├── login.component.html
 │   │   └── login.component.css
- │   ├── board/
 │   │   ├── board.component.ts
 │   │   ├── board.component.html
 │   │   └── board.component.css
 │   ├── app.routes.ts
 │   └── app.config.ts
- ├── main.ts
 - └── styles.css
 
## 📸 Screenshots
<img width="1905" height="985" alt="image" src="https://github.com/user-attachments/assets/344fe39a-ec7e-4410-b99b-e715889fbab6" />
<img width="1904" height="985" alt="image" src="https://github.com/user-attachments/assets/38a0a30d-7ca6-4373-9d5f-9ce3ed1d6957" />



## 📝 Author
- Sourav Kumar - MCA/10021/24 — Built for educational and evaluation purposes (Vetty Assignment).
