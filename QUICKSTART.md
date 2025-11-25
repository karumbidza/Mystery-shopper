# Quick Start Guide 🚀

Get your Mystery Shop Survey platform up and running in 5 minutes!

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] PostgreSQL database running
- [ ] Git installed

## Step-by-Step Setup

### 1. Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/karumbidza/Mystery-shopper.git
cd Mystery-shopper

# Install dependencies
npm install --legacy-peer-deps
```

### 2. Database Setup (2 minutes)

Create a PostgreSQL database:
```bash
# Using psql
createdb mystery_survey

# Or using SQL
CREATE DATABASE mystery_survey;
```

### 3. Configure Environment (1 minute)

Create `.env.local` file:
```bash
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/mystery_survey"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV=development
```

### 4. Initialize Database (1 minute)

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

### 5. Start Development (30 seconds)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) 🎉

## What's Next?

1. **Explore the App:**
   - Visit `/` for the landing page
   - Go to `/auth/login` to test authentication
   - Check out `/admin/dashboard` for the admin interface

2. **Customize:**
   - Update colors in `tailwind.config.js`
   - Modify the landing page in `src/app/page.tsx`
   - Add your logo to `public/`

3. **Build Features:**
   - Create survey builder UI
   - Implement API routes in `app/api/`
   - Add survey response collection

## Common Issues

### Database Connection Error
```bash
# Check PostgreSQL is running
brew services list | grep postgresql

# Restart if needed
brew services restart postgresql
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps
```

## Need Help?

- 📖 Check the [main README](README.md)
- 🐛 [Report issues](https://github.com/karumbidza/Mystery-shopper/issues)
- 💬 Start a [discussion](https://github.com/karumbidza/Mystery-shopper/discussions)

Happy coding! 🎊
