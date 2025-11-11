# Render Deployment Guide for HMS/AMS Project

## ✅ Issues Fixed

I've made the following fixes to make your project deployment-ready for Render:

### 1. **Added Node.js version specification** (package.json)
   - Added `"engines": { "node": "18.x" }` to ensure consistent Node version
   - Added `"build"` script that installs and builds both backend and Angular frontend

### 2. **Updated app.js** 
   - Added conditional serving of Angular build files in production
   - Angular app will be built and served as static files from `app_public/dist/app_public/browser`

### 3. **Updated render.yaml**
   - Changed `buildCommand` from `npm install` to `npm run build`
   - This ensures Angular frontend is built during deployment

### 4. **Created automatic database seeding** (app_server/config/dbSeed.js)
   - New module that seeds 6 hospitals on first connection
   - Only seeds if database is empty (won't duplicate data)
   - Automatically runs in production environment

### 5. **Updated database connection** (app_server/models/db.js)
   - Integrated auto-seeding on production
   - Respects MONGODB_URI environment variable from Render

---

## 🚀 Steps to Deploy on Render

### Step 1: Set Up MongoDB Atlas (Cloud Database)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (free tier available)
4. Create a database and user
5. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/hms`

### Step 2: Push Code to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### Step 3: Create Render Account and Deploy
1. Go to https://render.com
2. Sign in with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Fill in deployment details:
   - **Name**: appointment-booking-system
   - **Environment**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Auto-deploy**: Enable

### Step 4: Add Environment Variables
In Render dashboard, add environment variable:
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://username:password@cluster.mongodb.net/hms`
  (Replace with your actual MongoDB Atlas connection string)

### Step 5: Deploy
- Click "Create Web Service"
- Render will build and deploy automatically
- The deployment will:
  1. Install backend dependencies
  2. Install frontend dependencies  
  3. Build Angular app
  4. Start the Node.js server
  5. Auto-seed database with 6 hospitals

---

## 📋 Checklist Before Deploying

- [ ] MongoDB Atlas account created with database and user
- [ ] Connection string copied and ready
- [ ] Code pushed to GitHub
- [ ] render.yaml present in root directory
- [ ] All dependencies in package.json
- [ ] Angular build output configured correctly

---

## 🔍 What Happens During Deployment

1. **Build Phase** (`npm run build`):
   - Installs backend dependencies
   - Installs Angular dependencies
   - Builds Angular app → `app_public/dist/app_public/browser`

2. **Start Phase** (`npm start`):
   - Starts Express.js server
   - Connects to MongoDB Atlas
   - Auto-seeds database (6 hospitals added)
   - Serves Angular app as static files

3. **Result**:
   - Your app runs at: `https://your-app-name.onrender.com`
   - Backend API available at: `https://your-app-name.onrender.com/location/...`
   - Frontend available at: `https://your-app-name.onrender.com/`

---

## 🆘 Troubleshooting

### Database not seeding
- Check `MONGODB_URI` environment variable is set
- Verify MongoDB Atlas user has permission to database
- Check Render logs for connection errors

### Angular app not loading
- Verify `npm run build` completes successfully
- Check browser console for 404 errors on static assets
- Ensure `app_public/dist/app_public/browser` exists

### API endpoints returning 404
- Make sure backend routes are still configured
- Check routes file: `app_server/routes/index.js`

---

## 📚 Project Structure After Build

```
project-root/
├── app.js
├── app_server/
├── app_public/
│   ├── dist/app_public/browser/  ← Angular build output
│   └── ...
├── public/
├── bin/www
└── package.json
```

Your deployment is now ready! Follow the steps above to deploy on Render. 🎉
