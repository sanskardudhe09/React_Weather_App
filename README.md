# Weather App 🌤️

A **clean and simple single-page application** to display the weather for any city. Built with **React**, **TypeScript**, and **Styled Components**, this app fetches data from the free **OpenWeatherMap API**.

---

## 🚀 Project Goal

The goal of this project is to create a responsive and user-friendly weather application where users can search for any city and view its current weather along with a 5-day forecast.

---

## 📌 Core Features

- Search bar to enter a city name
- Fetch current weather data from **OpenWeatherMap API**
- Display:
  - Current temperature (°C)
  - Weather condition (e.g., Clouds)
  - Humidity
  - Min & Max temperature
- Shows a **loading indicator** while fetching data
- Shows a **clear error message** if the city is not found
- Responsive and user-friendly design

---

## ✨ Bonus Features

- Save the last searched city in **localStorage**
- Display a **5-day weather forecast**
- Clean state management with **React hooks**  

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript  
- **Styling:** Styled Components  
- **API:** OpenWeatherMap (free tier)  
- **State Management:** React Hooks (useState, useEffect, useCallback)  

---

## 💻 Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
2. **Install Dependencies**
```bash
npm install
```

3. **WEATHER API KEY SETUP**
```bash
 Create .env file in the root directory and add your OpenWeatherMap API key
 REACT_APP_API_KEY=your_api_key_here
```

4. **RUN THE APP**
```bash
 npm start
```

## 🧩 Assumptions & Design Choices

### **API Source**
- The application uses the **OpenWeatherMap API** for fetching real-time weather data.  
- It assumes that the user has a valid and active API key stored securely in a `.env` file.

### **Environment Variables**
The API key is **not hardcoded** and must be stored in a `.env` file as:
```REACT_APP_API_KEY=your_api_key_here```
- This file is excluded from version control using `.gitignore` to prevent exposing sensitive information.

### **Default Units and Location**
- The temperature is displayed in **Celsius** by default.  
- On **first-time visits** or if **localStorage is cleared**, the app attempts to auto-fetch the user’s current location using the **browser’s Geolocation API**.
- If geolocation is unavailable, denied, or fails, the app falls back to a **default city 'Pune'** for demonstration purposes.
- For returning users, the last searched city stored in localStorage is automatically displayed.

### **Error Handling**
- The app gracefully handles invalid city names, empty input, or failed API requests.  
- A clear and relevant **error message** is displayed to the user in such cases.

### **Responsive UI Design**
- The layout is designed to be **fully responsive**, ensuring usability across devices — desktop, tablet, and mobile.

### **Minimal Dependencies**
- The project uses **minimal external libraries** to keep the bundle size small and the setup lightweight.  
- Core stack: **React.js**, **TypeScript** (if applicable), and **Styled Components**.

### **Code Organization**
- The project follows a **modular folder structure** under the `src/` directory to ensure clean separation of concerns and maintainability.
- All **UI components** (such as search, current weather, and forecast display) are organized inside the `components/` folder for better reusability.
- **Type definitions and interfaces** are stored in the `interface/` folder, maintaining type safety across the application.
- The `utils/` folder contains helper functions used across multiple components, keeping the codebase DRY (Don’t Repeat Yourself).
- The main application logic and state management reside in the `App.tsx` file, which serves as the entry point for rendering all components.
- This structure ensures scalability and makes it easy to extend or refactor individual modules without affecting the overall application.
- Environment-specific configurations are isolated to avoid accidental exposure of credentials.


 **SCREENSHOTS**
<img width="1832" height="970" alt="Screenshot from 2025-10-04 18-39-31" src="https://github.com/user-attachments/assets/d20bd27b-3fcd-4664-9487-cc896e858aa5" />
