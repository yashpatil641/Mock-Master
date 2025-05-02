# MockMaster - Master Your Interview Skills with AI



## About MockMaster

MockMaster is an advanced AI-powered platform designed to help job seekers prepare for interviews with personalized mock interviews, real-time feedback, and comprehensive performance analytics. Whether you're preparing for a technical role, management position, or entry-level job, MockMaster provides tailored practice experiences to boost your confidence and improve your interview skills.

## Features

### 🤖 AI-Generated Questions
- Role-specific interview questions tailored to your target position, company, and experience level
- Questions adapt to different industries and job functions

### 🎙️ Voice Recording & Analysis
- Practice answering verbally while our system records and transcribes your responses
- Get feedback on speech patterns, verbal tics, and delivery

### 📝 Transcript Generation
- Receive complete transcripts of your mock interviews
- Review your answers and identify areas for improvement

### 📊 Performance Scoring
- Detailed scoring across multiple dimensions including content, delivery, and technical accuracy
- Track your progress over time

### ⭐ Personalized Feedback
- Actionable feedback with specific suggestions to improve your interview responses
- Expert guidance on addressing weak points

### ✅ Interview Mastery
- Track your progress across multiple practice sessions
- Master the skills needed to ace your next job interview

## How It Works

### 1️⃣ Select Your Role
Choose the specific job role, seniority level, and target company for your interview preparation.

### 2️⃣ Practice Interview
Complete a realistic mock interview with AI-generated questions tailored to your target position.

### 3️⃣ Get Feedback
Receive instant analysis, scoring, and personalized recommendations to improve your performance.

## Tech Stack

MockMaster is built using modern, robust technologies:

- **Frontend**: [Next.js](https://nextjs.org/) for server-side rendering and optimal performance
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive and customizable design
- **UI Components**: [Primda](https://primda.io/) for elegant user interface elements
- **Database**: [PostgreSQL](https://www.postgresql.org/) for reliable data storage and retrieval
- **AI**: Custom prompt engineering and post-processing logic to fine-tune the behavior of Gemini for mock interviews

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- PostgreSQL 12 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/mockmaster.git
cd mockmaster
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env.local` file in the root directory and add the following variables:
```
DATABASE_URL=postgresql://username:password@localhost:5432/mockmaster
NEXT_PUBLIC_API_URL=http://localhost:3000/api
# Add other required environment variables
```

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```



## Deployment

MockMaster can be easily deployed on [Vercel](https://vercel.com/), the platform created by the team behind Next.js:

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Configure your environment variables
4. Deploy!

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

We welcome contributions to MockMaster! Please feel free to submit pull requests or open issues to improve the platform.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
