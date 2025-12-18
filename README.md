# Next.js Mistakes - Common Pitfalls & Best Practices

A comprehensive educational repository demonstrating **29 common mistakes** developers make when building Next.js 16 applications. Each mistake includes interactive examples, explanations, and solutions to help you write better Next.js code.

## 🎓 Want to Master Next.js?

Looking for a comprehensive course to master modern Next.js 16 development? Check out the **[Modern Full Stack Next.js Course](https://nextjscourse.dev)** - a complete guide to building production-ready Next.js applications with best practices, advanced patterns, and real-world examples. Ship 7+ Production-ready Modern Apps with this course.

## 🎯 Purpose

This project serves as a learning resource for Next.js developers, showcasing real-world mistakes and their solutions. Whether you're new to Next.js or looking to deepen your understanding, this repository provides practical examples of what **not** to do and how to fix it.

## ✨ Features

- **29 Interactive Examples**: Each mistake is demonstrated with working code examples
- **Server & Client Components**: Learn when and how to use each appropriately
- **Server Actions**: Understand proper implementation patterns
- **Caching Strategies**: Explore Next.js caching mechanisms and common pitfalls
- **Form Handling**: See correct patterns for form submissions
- **Dynamic Routes**: Examples of proper dynamic routing implementation
- **Error Handling**: Learn about error boundaries and error pages
- **Performance Optimization**: Discover common performance anti-patterns
- **Dark Mode Support**: Built-in theme switching functionality
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs-mistakes
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
nextjs-mistakes/
├── app/                      # Next.js App Router pages
│   ├── mistake1/            # Individual mistake examples (1-29)
│   ├── mistake2/
│   ├── ...
│   ├── mistake29/
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── actions/                  # Server Actions
│   ├── cart-actions.ts
│   ├── mistake8-actions.ts
│   ├── mistake23-actions.ts
│   ├── mistake24-actions.ts
│   └── signup-actions.ts
├── components/               # React components
│   ├── ui/                  # Reusable UI components
│   ├── mistakes/            # Mistake-specific components
│   └── ...
├── lib/                     # Utility functions and helpers
│   ├── cart.ts
│   ├── cart.server.ts
│   ├── mistake8-data.ts
│   ├── mistake19-data.ts
│   ├── mistake23-data.ts
│   └── utils.ts
├── types/                   # TypeScript type definitions
│   ├── cart.ts
│   └── products.ts
└── public/                  # Static assets
```

## 📚 Covered Mistakes

The repository covers 29 common Next.js mistakes, including but not limited to:

1. **Marking Page.tsx as a Client Component** - Understanding when components should be server vs client
2. **Improper Server Component Usage** - Common server component mistakes
3. **Server Actions Organization** - Proper structure for server actions
4. **Caching Misconfigurations** - Understanding Next.js caching
5. **Form Handling Patterns** - Correct form submission approaches
6. **Dynamic Route Implementation** - Proper dynamic routing
7. **Error Boundary Setup** - Error handling best practices
8. **Cache Tagging & Refresh** - Using `updateTag` vs `refresh` correctly
9. **Unnecessary Client Components** - When to avoid "use client"
10. **Loading States** - Proper loading UI implementation
11. **Metadata Configuration** - SEO and metadata best practices
12. **API Route Patterns** - When to use API routes vs Server Actions
13. **Layout Patterns** - Understanding layout behavior
14. **Suspense Boundaries** - Proper async component handling
15. **Cookie & Session Management** - Server-side data handling
16. **Performance Optimization** - Common performance pitfalls
17. **Type Safety** - TypeScript best practices
18. **Route Groups** - Organizing routes effectively
19. **Parallel Routes** - Advanced routing patterns
20. **Intercepting Routes** - Modal and overlay patterns
21. **Error Pages** - Custom error handling
22. **Loading Pages** - Loading state management
23. **Server Component Data Fetching** - Proper data fetching patterns
24. **Client Component Hydration** - Avoiding hydration mismatches
25. **Middleware Usage** - When and how to use middleware
26. **Image Optimization** - Next.js Image component best practices
27. **Font Optimization** - Using next/font correctly
28. **Environment Variables** - Proper configuration management
29. **Deployment Considerations** - Production-ready patterns

## 🎓 How to Use This Repository

1. **Browse Mistakes**: Use the sidebar navigation to explore different mistakes
2. **Read the Code**: Each mistake page includes example code demonstrating the issue
3. **Compare Patterns**: Look for both incorrect and correct implementations
4. **Experiment**: Modify the code to see how changes affect behavior
5. **Learn**: Understand the underlying concepts and why certain patterns are mistakes

## 🔍 Key Concepts Demonstrated

### Server Components vs Client Components

Learn when to use `"use client"` and when to keep components as server components for optimal performance.

### Server Actions

Understand the proper way to implement server actions, including:

- Form submissions
- Data mutations
- Server-side validation

### Caching Strategies

Explore Next.js caching mechanisms:

- Static generation
- Dynamic rendering
- Cache tags
- Revalidation patterns

### Data Fetching

See examples of:

- Server component data fetching
- Client component data fetching
- API route usage
- Server action patterns

## 🧪 Development Guidelines

### Code Style

- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Consistent component structure
- Proper error handling

### Component Organization

- UI components in `components/ui/`
- Mistake-specific components in `components/mistakes/`
- Reusable utilities in `lib/`
- Type definitions in `types/`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! If you'd like to add more mistakes or improve existing examples:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available for educational purposes.

## 🔗 Resources

- **[Modern Full Stack Next.js Course](https://nextjscourse.dev)** - Comprehensive Next.js course covering everything from basics to advanced patterns
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 💡 Tips for Learning

1. **Start with Basics**: Begin with mistakes 1-5 to understand fundamental concepts
2. **Read the Comments**: Code comments explain the "why" behind each mistake
3. **Experiment**: Try modifying the code to see different outcomes
4. **Check the Console**: Browser and terminal logs often reveal important information
5. **Compare Patterns**: Look at similar mistakes to understand common themes

## 🐛 Troubleshooting

### Common Issues

**Port Already in Use**

```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Module Not Found**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**TypeScript Errors**

```bash
# Restart TypeScript server in your IDE
# Or run type check
npx tsc --noEmit
```

## 📞 Support

For questions or issues, please open an issue on the repository.

---

**Happy Learning!** 🚀

Remember: Making mistakes is part of learning. This repository helps you learn from common pitfalls so you can write better Next.js applications.
