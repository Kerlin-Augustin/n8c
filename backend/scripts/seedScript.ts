import { connectToDB } from "../config/mongoDatabase.js";
import { User } from "../database/models/User.js";
import { UserCompany } from "../database/models/UserCompany.js";

const seedUserCompany = async () => {
  await connectToDB()

  const headUser = await User.create({
    name: 'Alice',
    DoB: new Date('1994-09-07'),
    industry: 'Technology',
    userJobTitle: 'Investment Banker',
    department: 'Finance',
    totalLoans: ['10k', 'pdf', 'loan from goSavant'],
    loanTypes: '10k filings',
    root: true,
    email: 'alice@svb.com',
    role: 'admin'
  });

  await UserCompany.insertMany([
    {
      userCompanyName: "Silicon Valley Bank",
      headUser: headUser._id,
      // createdAt: new Date().toLocaleDateString(),
      users: [headUser._id],
    }
  ])

  console.log('Database Seeded')
  process.exit(1)
}

seedUserCompany()