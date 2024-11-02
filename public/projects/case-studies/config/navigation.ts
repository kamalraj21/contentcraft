export const siteNavigation = {
  main: [
    { 
      name: 'Case Studies', 
      href: '/contentcraft/src/pages/#projects', 
      match: '/projects'
    },
    { 
      name: 'About', 
      href: '/contentcraft/src/pages/#about', 
      match: '/about'
    },
    { 
      name: 'Contact', 
      href: '/contentcraft/src/pages/#contact', 
      match: '/contact'
    }
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/your-profile',
      icon: 'linkedin'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/your-username',
      icon: 'github'
    }
    // Add other social links
  ]
};

// Updated Header.astro props interface
interface Props {
  currentPage: string;
}

---
// In your [slug].astro case study template
---
import Layout from '../../layouts/Layout.astro';
import CaseStudyNavigation from '../../components/CaseStudyNavigation.astro';

const { slug } = Astro.params;

// Get case study data based on slug
const caseStudy = await getCaseStudyBySlug(slug);

// 404 handling
if (!caseStudy) {
  return Astro.redirect('/404');
}
---

<Layout title={caseStudy.title}>
  <!-- Your case study content -->
  
  <!-- Add the navigation component at the bottom -->
  <CaseStudyNavigation currentSlug={slug} />
</Layout>

---
// 404.astro
---
<Layout title="Page Not Found">
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
      <a 
        href="/contentcraft" 
        class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        Go Home
      </a>
    </div>
  </div>
</Layout>