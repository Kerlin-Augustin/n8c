import { connectToDB } from "../config/mongoDatabase.js";
import { User } from "../database/models/User.js";
import { UserCompany } from "../database/models/UserCompany.js";

const seedDatabase = async () => {
  await connectToDB()

  // First part is to create a new company with a head user

  const headUser = await User.create({
    name: 'Deja Johnson',
    employeeOf: 'Citizens Bank',
    DoB: new Date('1990-01-07'),
    industry: 'Technology',
    userJobTitle: 'Investment Banker',
    department: 'Finance',
    totalLoans: ['10k', 'pdf', 'loan from Money Pool'],
    loanTypes: '10k filings',
    root: true,
    email: 'deja@svb.com',
    role: 'admin',
  });

  await UserCompany.insertMany([
    {
      userCompanyName: "Citizens Bank",
      headUser: headUser._id,
      createdAt: new Date().toLocaleDateString(),
      users: [headUser._id],
    }
  ])



/* This is to add newUsers to an already existing company 

  const nonHeadUser = await User.create({
    name: 'Alex Alexander Alexandria',
    DoB: new Date('1970-10-15'),
    industry: 'Technology',
    userJobTitle: 'CEO',
    department: 'C-Suite',
    totalLoans: ['internal loan'],
    loanTypes: 's-class',
    root: false,
    email: 'alex@svb.com',
    role: 'member'
  });

  const company = await UserCompany.findOne({ userCompanyName: "Silicon Valley Bank" })

  if (company) {
    company.users.push(nonHeadUser._id)
    await company.save()
  } else {
    console.log('Company not found')
  }

*/

  console.log('Database Seeded, running process.exit(1)')
  process.exit(1)
}

seedDatabase()