# Quick Setup: Use Your Existing MongoDB Atlas Cluster with Render

## 📍 Your MongoDB Atlas Info
- **Email**: 22eg106b56@anurag.edu.in
- **Cluster**: Cluster 1 (already created)
- **Status**: Just resumed ✅

---

## 🔑 Step 1: Get Your Connection String

### From MongoDB Atlas Dashboard:

1. Go to https://www.mongodb.com/cloud/atlas
2. Login with `22eg106b56@anurag.edu.in`
3. Click on **Cluster 1**
4. Click **CONNECT** button
5. Select **Drivers** → **Node.js**
6. Copy the connection string

### You'll see something like:
```
mongodb+srv://myUser:myPassword@cluster1.mongodb1234.mongodb.net/?retryWrites=true&w=majority
```

**Modify it to:**
```
mongodb+srv://myUser:myPassword@cluster1.mongodb1234.mongodb.net/hms?retryWrites=true&w=majority
```

Replace `myUser` and `myPassword` with your actual credentials!

---

## 🌐 Step 2: Test Connection (Optional but Recommended)

In PowerShell, test your connection string:

```powershell
# Set the connection string
$env:MONGODB_URI="mongodb+srv://myUser:myPassword@cluster1.mongodb1234.mongodb.net/hms?retryWrites=true&w=majority"

# Start your app
npm start

# Check logs for: "Mongoose connected to mongodb+srv://..."
```

If you see `Mongoose connected to...` - it works! ✅

---

## 🚀 Step 3: Deploy to Render

### Option 1: Add Environment Variable in Render Dashboard (Recommended)

1. Go to https://render.com → Your Web Service
2. Go to **Environment** tab
3. Click **Add Environment Variable**
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://myUser:myPassword@cluster1.mongodb1234.mongodb.net/hms?retryWrites=true&w=majority`
4. Click **Save Changes** → Render will auto-redeploy

### Option 2: Add to render.yaml (Less Secure)

```yaml
services:
  - type: web
    name: appointment-booking-system
    env: node
    buildCommand: npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        value: mongodb+srv://myUser:myPassword@cluster1.mongodb1234.mongodb.net/hms?retryWrites=true&w=majority
    healthCheckPath: /
    autoDeploy: true
```

---

## ✅ Prerequisites Checklist

Before deploying, verify:

- [ ] Cluster 1 is **RUNNING** (not paused/suspended)
- [ ] You have a **Database User** created in MongoDB Atlas
- [ ] IP Whitelist allows connections:
  - Go to **Network Access** in MongoDB Atlas
  - Click **Add IP Address**
  - Add `0.0.0.0/0` (allows all IPs - needed for Render)

---

## 📋 Summary of Changes Needed

1. **Your code is already configured** ✅
   - `app_server/models/db.js` already uses `MONGODB_URI` env variable
   - Auto-seeding is configured
   - Everything ready to go

2. **Just add the connection string to Render:**
   - Set environment variable: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string

3. **Deploy:**
   - Push to GitHub
   - Render auto-deploys
   - Your app connects to Cluster 1
   - Database auto-seeds with 6 hospitals

---

## 🎯 Final Steps

1. Copy your connection string from MongoDB Atlas
2. Add `MONGODB_URI` variable to Render
3. Git push (if you haven't already)
4. Watch Render logs for successful connection
5. Access your app!

That's it! Your MongoDB Atlas Cluster 1 will be used for production. 🎉

