# My Portfolio

A responsive and modern portfolio website showcasing projects, skills, and experience.
 

# Frontend:
cd frontend
python3 -m http.server 8000

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with smooth transitions
- **Easy Navigation**: Intuitive navigation bar for quick access to all sections
- **Project Showcase**: Display your projects with descriptions and technology tags
- **Contact Form**: Get in touch with visitors through the contact page
- **Social Links**: Connect with visitors via social media and direct contact
- **Smooth Animations**: Fade-in effects and hover animations for better UX

## File Structure

```
portfolio/
├── index.html          # Home page - Hero section and featured projects
├── about.html          # About page - Bio, skills, experience, and resume
├── projects.html       # Projects page - Portfolio of work
├── contact.html        # Contact page - Contact form and social links
├── styles.css          # Main stylesheet with responsive design
├── script.js           # JavaScript for interactivity and form handling
└── README.md           # Project documentation
```

## Pages

### Home (index.html)
- Hero section with welcome message
- Featured projects section
- Call-to-action button

### About (about.html)
- Personal biography
- Skills list
- Experience overview
- Resume download link

### Projects (projects.html)
- Grid layout of project cards
- Project images and descriptions
- Technology tags
- Links to individual projects

### Contact (contact.html)
- Contact form with validation
- Social media links
- Email contact option

## Getting Started

1. **Clone or download** the portfolio files
2. **Customize the content**:
   - Update personal information in HTML files
   - Add your projects with descriptions and images
   - Update social media links
   - Customize colors in `styles.css` using CSS variables

3. **Deployment options**:
   - GitHub Pages (free)
   - Netlify
   - Vercel
   - Traditional web hosting

## Customization

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #333;
    --light-bg: #f9fafb;
}
```

### Add Projects
Edit the project cards in `projects.html`:
- Update project titles and descriptions
- Replace placeholder images
- Update technology tags
- Add project links

### Update Social Links
In `contact.html`, update the social links with your profiles:
```html
<a href="your-linkedin-url" target="_blank">LinkedIn</a>
```

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript
- Responsive Web Design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Optimize images before adding to projects
- Use web-friendly image formats (WebP, JPEG, PNG)
- Minify CSS and JavaScript for production
- Consider adding lazy loading for images

## Future Enhancements

- Backend integration for contact form
- Blog section
- Dark mode toggle
- Search functionality
- Admin panel for content management

## License

Feel free to use this portfolio template for your personal use.

## Contact

For questions or suggestions, feel free to reach out through the contact page.
