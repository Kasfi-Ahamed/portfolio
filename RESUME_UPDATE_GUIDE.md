# Resume Update Guide

To update the website with information from your resume, edit the file: `src/data/portfolio.ts`

## Key Sections to Update:

### 1. Personal Info & Title
Update `personalInfo` object:
```typescript
export const personalInfo = {
  name: 'Kasfi Ahamed',
  title: 'YOUR ACTUAL TITLE FROM RESUME', // Update this
  subtitle: 'Your professional tagline',
  summary: 'Your professional summary from resume',
  email: 'kasfikas@gmail.com',
  // ... rest
};
```

### 2. Experience
Update the `experience` array with your actual work history:
```typescript
export const experience = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: 'Job description and achievements',
  },
  // Add more entries...
];
```

### 3. Education
Update the `education` array:
```typescript
export const education = [
  {
    degree: 'Your Degree',
    institution: 'University/College Name',
    period: 'Start Year - End Year',
  },
];
```

### 4. Certifications
Add your certifications to the `certifications` array:
```typescript
export const certifications: Certification[] = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'ID-12345', // Optional
    credentialUrl: 'https://verify-link.com', // Optional
  },
  // Add more certifications...
];
```

### 5. Skills
Update the `skills` array to match your resume:
```typescript
export const skills: Skill[] = [
  { name: 'Skill Name', category: 'AI/ML' | 'Software Dev' | 'Cloud/Systems' },
  // Add more skills...
];
```

## Quick Steps:
1. Open `src/data/portfolio.ts`
2. Find each section above
3. Replace placeholder data with your actual resume information
4. Save the file
5. The website will automatically update!

