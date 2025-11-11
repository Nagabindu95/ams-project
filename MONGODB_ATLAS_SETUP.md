# How to Use Your MongoDB Atlas Cluster with Render

## Step 1: Get Your Connection String from MongoDB Atlas

1. **Login to MongoDB Atlas**
   - Go to https://www.mongodb.com/cloud/atlas
   - Login with email: `22eg106b56@anurag.edu.in`

2. **Navigate to Your Cluster**
   - Click on "Cluster 1"
   - Click the **"CONNECT"** button

3. **Get Connection String**
   - Select **"Drivers"** option
   - Choose **Node.js** driver
   - Copy the connection string
   - It will look like: `mongodb+srv://username:password@cluster1.xxxxx.mongodb.net/hms?retryWrites=true&w=majority`

4. **Important**: 
   - Replace `<username>` and `<password>` with your MongoDB Atlas credentials
   - Replace `myFirstDatabase` with `hms` (or your database name)
   - Final format: `mongodb+srv://username:password@cluster1.xxxxx.mongodb.net/hms?retryWrites=true&w=majority`

---

## Step 2: Test Connection Locally (Optional)

Before deploying to Render, test your connection string locally:

```bash
# Update render.yaml temporarily to test, or use environment variable
$env:MONGODB_URI="mongodb+srv://username:password@cluster1.xxxxx.mongodb.net/hms?retryWrites=true&w=majority"
npm start
```

---

## Step 3: Deploy to Render with Your Connection String

### Option A: Using Environment Variables (Recommended)

1. **In Render Dashboard:**
   - Go to your Web Service
   - Go to **Environment** tab
   - Add new environment variable:
     - **Key**: `MONGODB_URI`
     - **Value**: `mongodb+srv://username:password@cluster1.xxxxx.mongodb.net/hms?retryWrites=true&w=majority`

2. **Save and redeploy**

### Option B: Adding to render.yaml

If you want to hardcode it in render.yaml:

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
        value: mongodb+srv://username:password@cluster1.xxxxx.mongodb.net/hms?retryWrites=true&w=majority
    healthCheckPath: /
    autoDeploy: true
```

⚠️ **Note**: Option B exposes your credentials in git. Option A is safer.

---

## Step 4: Verify Your Cluster is Running

Before deploying, make sure:

1. ✅ Cluster 1 is **RUNNING** (not paused)
2. ✅ You have created a **Database User** with password
3. ✅ Your IP/Network is **whitelisted** in Atlas
   - Go to Network Access → IP Whitelist
   - Add `0.0.0.0/0` to allow Render to connect (or specific Render IPs)

---

## Checklist

- [ ] MongoDB Atlas account logged in
- [ ] Cluster 1 is running (resumed)
- [ ] Database user created with password
- [ ] Connection string copied
- [ ] IP Whitelist updated (add 0.0.0.0/0)
- [ ] Environment variable added to Render
- [ ] Render deployed with new config

---

## Troubleshooting

### "Connection refused" or "Failed to connect"
- Check if Cluster 1 is RUNNING (not paused)
- Check IP whitelist in Network Access
- Verify connection string credentials

### "Database not seeding"
- Check Render logs for MongoDB connection
- Verify MONGODB_URI variable is set
- Check MongoDB user has permission to `hms` database

### "Cannot find database 'hms'"
- The database will be created automatically when data is first inserted
- Check your collection after app starts

---

## Your Connection String Format

```
mongodb+srv://<username>:<password>@cluster1.<cluster-id>.mongodb.net/<database>?retryWrites=true&w=majority
```

Replace:
- `<username>`: Your MongoDB Atlas database user
- `<password>`: Your MongoDB Atlas database password
- `<cluster-id>`: Your cluster's unique ID (shown in Atlas)
- `<database>`: `hms` (your database name)

