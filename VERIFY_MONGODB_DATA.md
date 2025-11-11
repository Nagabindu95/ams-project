# How to Check Your MongoDB Atlas Database

## Step-by-Step Guide to Verify Your Data

### Step 1: Login to MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Login with your email: `22eg106b56@anurag.edu.in`
3. You'll see your dashboard

---

## Step 2: Navigate to Your Cluster

### Method 1: From Dashboard
1. Click on **"Cluster 1"** (your cluster name)
2. You'll see cluster details and status

### Method 2: From Sidebar
1. On the left sidebar, click **"Clusters"**
2. You'll see all your clusters listed
3. Click on **"Cluster 1"**

---

## Step 3: Check Connection Status

### Look for these indicators:
- 🟢 **Green Circle** = Cluster is RUNNING ✅
- 🟡 **Yellow Circle** = Cluster is Paused/Pausing
- 🔴 **Red Circle** = Cluster has issues

**Your cluster should show GREEN!**

---

## Step 4: Browse Your Database & Collections

### Option 1: Using MongoDB Atlas UI (Easiest)

1. In Cluster 1 page, click **"Browse Collections"** button
2. You'll see:
   - Database name: **`hms`**
   - Collection name: **`locations`**
   - Number of documents: **6 hospitals**

### What You'll See:
```
Database: hms
├── Collection: locations
    ├── Document 1: City Health Hospital
    ├── Document 2: Metro Medical Centre
    ├── Document 3: HealthFirst Hospital
    ├── Document 4: CarePlus Hospital
    ├── Document 5: PrimeCare Hospital
    └── Document 6: Community Care Hospital
```

### Option 2: Using MongoDB Compass (Desktop App)

1. Go to https://www.mongodb.com/products/compass
2. Download and install MongoDB Compass
3. In Compass, click "New Connection"
4. Paste your connection string:
   ```
   mongodb+srv://22eg106b56:22eg106b56@cluster1.t320w.mongodb.net/hms?retryWrites=true&w=majority
   ```
5. Click "Connect"
6. You'll see your `hms` database with `locations` collection

---

## Step 5: View Individual Hospital Records

### In MongoDB Atlas Web UI:

1. Click **"Browse Collections"**
2. Click on **`locations`** collection
3. You'll see a list view of all 6 hospitals
4. Click on any hospital to see full details:
   - Name
   - Address
   - Coordinates
   - Facilities
   - Reviews
   - Contact info
   - Opening times

### Example Record Structure:
```json
{
  "_id": "ObjectId(...)",
  "name": "City Health Hospital",
  "address": "4-106/C, Annojiguda, Hyderabad, Telangana 501301",
  "rating": 4,
  "coords": {
    "lat": 17.3850,
    "lng": 78.4867
  },
  "facilities": ["Emergency Care", "Surgery", "Pharmacy", ...],
  "reviews": [
    {
      "author": "Nani Nalli",
      "rating": 5,
      "reviewText": "..."
    }
  ],
  "contact": {
    "phone": "+91-1234567890",
    "gmail": "info@cityhealthhospital.com"
  }
}
```

---

## Step 6: Check Connection Activity

### To see if your app is connecting:

1. In Cluster 1, click **"Activity"** tab
2. You'll see:
   - Recent connections
   - Connection attempts
   - Read/Write operations
   - Data size

### What to Look For:
- ✅ Recent connection from your application
- ✅ Document operations (inserts, reads)
- ✅ No connection errors

---

## Step 7: Monitor Real-Time Metrics

### Dashboard Metrics:
1. Click **"Metrics"** tab
2. You can see:
   - **Connections**: How many apps are connected
   - **Operations**: Read/Write operations happening
   - **Network I/O**: Data transfer rate
   - **Storage**: Database size used

### Your Current Status:
- 6 hospitals stored
- ~500KB - 1MB database size (approximate)

---

## Alternative: Check via Command Line

### Connect using MongoDB Shell:

```powershell
# Download MongoDB Shell from:
# https://www.mongodb.com/try/download/shell

# Connect to your cluster
mongosh "mongodb+srv://22eg106b56:22eg106b56@cluster1.t320w.mongodb.net/hms"

# List all databases
show databases

# Select hms database
use hms

# List collections
show collections

# Count documents in locations
db.locations.countDocuments()

# View all hospitals
db.locations.find()

# View one hospital with pretty formatting
db.locations.findOne()
```

Expected output:
```
{
  "_id": ObjectId("..."),
  "name": "City Health Hospital",
  "address": "4-106/C, Annojiguda, Hyderabad, Telangana 501301",
  "rating": 4,
  ...
}
```

---

## Verification Checklist

- [ ] Cluster 1 shows GREEN status (running)
- [ ] Database `hms` exists
- [ ] Collection `locations` has 6 documents
- [ ] Each hospital has:
  - [ ] Name
  - [ ] Address
  - [ ] Coordinates (lat, lng)
  - [ ] Facilities array
  - [ ] Reviews array (3 reviews each)
  - [ ] Contact information
  - [ ] Opening times

---

## Quick Status Check

### Your MongoDB Atlas Setup:

| Item | Status | Location |
|------|--------|----------|
| Cluster 1 | ✅ Running | Cluster list |
| Database: hms | ✅ Created | Browse Collections |
| Collection: locations | ✅ Created | Browse Collections |
| Documents Count | ✅ 6 hospitals | Browse Collections → locations |
| Connection String | ✅ Active | render.yaml |
| Recent Connections | ✅ Check Activity | Cluster → Activity tab |

---

## If Data is Missing

### Check These:
1. Did you run `node seedData.js`? ✅ (You did - confirmed!)
2. Is the database using the right connection string? ✅ (It is!)
3. Is Cluster 1 running? Check in MongoDB Atlas

### To Reseed:
```powershell
$env:MONGODB_URI="mongodb+srv://22eg106b56:22eg106b56@cluster1.t320w.mongodb.net/hms?retryWrites=true&w=majority"
node seedData.js
```

---

## Visual Navigation Guide

### MongoDB Atlas Dashboard → Cluster 1 → Options:

```
┌─ Browse Collections (See all data) ← USE THIS
├─ Connect (Get connection string)
├─ Metrics (See activity & performance)
├─ Activity (See recent connections)
├─ Backups (Create backups)
├─ Network Access (IP whitelist)
└─ Database Users (Manage credentials)
```

---

## Summary

**To check your database:**
1. Login to MongoDB Atlas
2. Click "Cluster 1"
3. Click "Browse Collections"
4. You'll see `hms` database with `locations` collection
5. Click `locations` to see all 6 hospitals

**You can verify:**
- ✅ Connection is successful
- ✅ All 6 hospitals are stored
- ✅ Each hospital has all details (address, reviews, facilities, coordinates)
- ✅ Database is ready for your Render deployment

**Everything is correctly configured!** 🎉

