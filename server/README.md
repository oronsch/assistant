
# Personal Learning Assistant

This project is designed to serve as a personal learning assistant, helping to track, analyze, and support project development and learning progress. The system integrates OpenAI's GPT model for conversation and progress analysis.

---

## **Setup Instructions**
### **1. Initialize the Project**
1. Create a new Node.js project:
   mkdir personal-learning-assistant
   cd personal-learning-assistant
   npm init -y


2. Install required dependencies:
   npm install `express mongoose dotenv openai cors body-parser`

### **2. Project Structure**
personal-learning-assistant/
├── config/
│   └── db.js
├── controllers/
│   ├── conversationController.js
│   └── projectController.js
├── models/
│   └── Conversation.js
│   ├── Project.js
├── routes/
│   └── conversations.js
│   ├── projects.js
├── utils/
│   └── openai.js
├── .env
├── server.js

---

### **3. Database Setup**
1. Install MongoDB locally or use MongoDB Atlas.

2. Create a `config/db.js` file to connect to MongoDB:

3. Add `MONGO_URI` and `OPENAI_API_KEY` to `.env` file:
   MONGO_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_openai_api_key

4. Connect the database in `server.js`:

---

### **4. Create Project Model**
1. Define `Project.js` schema:

---

### **5. Create Conversation Model**
1. Define `Conversation.js` schema:

---

### **6. Implement API Routes**
1. Create `projectController.js`:
2. Add project routes in `routes/projects.js`:
3. Update `server.js`:

---

### **7. OpenAI Integration**
1. Create `utils/openai.js`:
2. Add conversation API in `conversationController.js` and `routes/conversations.js`.

---

### **8. Testing the Application**
1. Start the server:
   ```bash
   node server.js
   ```

2. Use Postman to test:
   - **Create Project**: POST to `/api/projects`
   - **Analyze Conversation**: GET `/api/conversations/{id}/analyze`

---

### **Next Steps**
- Build the frontend in React/Next.js.
- Add visualization and analysis features.
- Extend the API with more advanced functionalities.

---

This README will be updated as we progress.
