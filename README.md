# Mystery Shop Survey Platform 🛍️

A professional mystery shopping survey platform built with Next.js 14, featuring geo-location capabilities, real-time analytics, and beautiful mobile-friendly interfaces.

## ✨ Features

- 🗺️ **Geo-Location Surveys** - Surveys that activate only when users are within specified locations
- 📊 **Real-time Analytics** - Monitor responses and completion rates in real-time
- 📱 **Mobile First** - Beautiful, responsive surveys that work perfectly on any device
- 🎨 **Modern UI** - Built with Tailwind CSS and shadcn/ui components
- 🔐 **Authentication** - Secure login system for admins and clients
- 📈 **Admin Dashboard** - Comprehensive dashboard with statistics and quick actions
- 🗃️ **Database Integration** - PostgreSQL with Prisma ORM

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix UI)
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **State Management:** TanStack Query

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- PostgreSQL database
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/karumbidza/Mystery-shopper.git
   cd Mystery-shopper
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/mystery_survey"
   
   # Supabase (optional - for production)
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # App
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   
   # Development
   NODE_ENV=development
   ```

4. **Generate Prisma Client**
   ```bash
   npm run db:generate
   ```

5. **Push database schema**
   ```bash
   npm run db:push
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
mystery-shop-survey/
├── app/                      # App router pages
│   ├── admin/
│   │   └── dashboard/       # Admin dashboard
│   ├── auth/
│   │   └── login/          # Authentication pages
│   └── api/                # API routes (to be implemented)
├── components/              # React components
│   ├── ui/                 # UI components (Button, Card, Input, etc.)
│   └── custom/             # Custom components
├── lib/                    # Utility functions
│   ├── db.ts              # Prisma client
│   └── utils.ts           # Helper functions
├── prisma/
│   └── schema.prisma      # Database schema
├── src/
│   └── app/               # Next.js app directory
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Landing page
│       └── globals.css    # Global styles
└── public/                # Static assets
```

## 🗄️ Database Schema

The application uses the following main models:

- **User** - Admin and client users
- **Project** - Survey projects
- **Survey** - Individual surveys
- **Question** - Survey questions with various types
- **SurveyLink** - Unique links with geo-location data
- **Response** - Survey responses
- **Answer** - Individual question answers

## 📱 Available Routes

- `/` - Landing page
- `/auth/login` - Login page
- `/admin/dashboard` - Admin dashboard
- `/api/*` - API endpoints (to be implemented)

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
npm run db:generate  # Generate Prisma Client
```

## 🎨 UI Components

The project includes pre-built UI components:
- Button (with multiple variants)
- Card
- Input
- Label
- And more to come...

## 🔐 Authentication

Currently implements a basic authentication flow. Future enhancements will include:
- JWT-based authentication
- Role-based access control (Admin/Client)
- Session management

## 📊 Features Roadmap

- [ ] Survey builder with drag-and-drop interface
- [ ] Advanced question types (rating scales, matrix, file upload)
- [ ] Survey logic and branching
- [ ] Geo-location validation
- [ ] Real-time response monitoring
- [ ] Export to CSV/Excel
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Survey templates
- [ ] Advanced analytics and reporting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Karumbidza**
- GitHub: [@karumbidza](https://github.com/karumbidza)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [Radix UI](https://www.radix-ui.com/)

---

Made with ❤️ for mystery shoppers everywhere
