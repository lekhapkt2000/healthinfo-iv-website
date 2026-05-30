# HEALTHINFO IV 2026 - International Health Informatics Conference Website

A professional, responsive website for the 4th International Health Informatics Conference with theme "AI for Healthcare".

## Project Structure

```
healthinfo-website/
├── index.html                 # Homepage with hero, highlights, topics, speakers
├── about.html                 # Conference information and history
├── call-for-papers.html       # Call for papers and submission guidelines
├── important-dates.html       # Timeline and important deadlines
├── speakers.html              # Keynote speakers profiles
├── committees.html            # Conference committees
├── program.html               # Conference program and schedule
├── registration.html          # Registration information and fees
├── venue.html                 # Venue and travel information
├── contact.html               # Contact form and FAQ
│
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet with responsive design
│   └── js/
│       └── main.js            # JavaScript for interactivity
│
└── README.md                  # This file
```

## Features

### 🎨 Design
- Modern, professional design with gradient backgrounds
- Responsive layout that works on desktop, tablet, and mobile devices
- Smooth animations and transitions
- Consistent color scheme (Blue & Teal primary colors)

### 📱 Responsive
- Mobile-first approach
- Hamburger menu on mobile devices
- Optimized layout for all screen sizes
- Touch-friendly buttons and navigation

### ✨ Interactivity
- Smooth scrolling navigation
- Mobile menu toggle
- Intersection Observer for fade-in animations
- Newsletter subscription form
- Contact form with validation
- Active navigation highlighting

### 📄 Pages
1. **Home** - Hero section, conference highlights, topics, important dates, speakers
2. **About** - Conference history, objectives, organizers
3. **Call for Papers** - Submission guidelines, topics, templates
4. **Important Dates** - Timeline, key milestones, submission deadlines
5. **Speakers** - Keynote speaker profiles and bios
6. **Committees** - Conference committees and advisory board
7. **Program** - Day 1 and Day 2 detailed schedule
8. **Registration** - Categories, fees, registration process
9. **Venue & Travel** - Conference location, accommodation, transportation
10. **Contact** - Contact information, forms, FAQ

## Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox and Grid layouts, animations
- **Vanilla JavaScript** - No dependencies, pure JavaScript
- **Responsive Design** - Mobile-first approach
- **Modern Features** - Intersection Observer API, ES6

## CSS Features

- Custom CSS variables for easy theming
- Grid system for responsive layouts
- Flexbox for component alignment
- Media queries for responsive design
- Smooth transitions and animations
- Accessible color contrast

## JavaScript Features

- Mobile menu toggle with click-outside detection
- Newsletter form handling
- Smooth scroll functionality
- Active navigation link detection
- Scroll-triggered fade-in animations
- Dynamic header shadow effect
- Countdown timer for conference date

## Color Scheme

- **Primary Color**: #005b96 (Professional Blue)
- **Secondary Color**: #00a896 (Health/Teal Green)
- **Dark Color**: #102a43 (Navy)
- **Light Color**: #f7fbff (Light Blue)
- **Text Color**: #334e68 (Dark Gray-Blue)
- **White**: #ffffff

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
  --primary-color: #005b96;
  --secondary-color: #00a896;
  /* ... more colors */
}
```

### Adding Conference Information
Edit the relevant HTML files and update:
- Conference dates
- Venue details
- Contact information
- Speaker information
- Committee members
- Registration fees

### Adding Images
Create an `assets/images/` directory and add:
- `logo-uit.png` - University logo
- `banner-healthcare-ai.jpg` - Hero banner
- `speaker-1.jpg`, `speaker-2.jpg`, etc. - Speaker photos

Update the HTML to reference these images.

## Performance Optimization

- Minimal CSS (no external dependencies)
- Vanilla JavaScript (no frameworks)
- Image lazy loading support
- Intersection Observer for efficient animations
- Mobile-optimized design
- Minimal HTTP requests

## Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors for readability
- Alt text for images (when added)
- Proper heading hierarchy

## Future Enhancements

- Add speaker photos and images
- Integrate with email marketing service
- Add live chat support
- Implement user accounts for paper tracking
- Add payment gateway integration
- Create mobile app
- Add multilingual support (Vietnamese, English, etc.)

## Maintenance

### Regular Updates Needed
- Update important dates as deadlines approach
- Update program schedule as papers are accepted
- Add speaker information and bios
- Update registration status
- Post conference news and announcements

### Pre-Conference
- Verify all links and pages
- Test form submissions
- Check mobile responsiveness
- Update all contact information
- Ensure payment links work
- Test across browsers

### Post-Conference
- Add conference photos and highlights
- Publish proceedings
- Share conference videos
- Collect feedback
- Plan next conference

## Support

For questions or issues with the website:
- Email: info@healthinfo-iv.com
- Phone: +84 (28) 3725-2656
- Address: University of Information Technology, VNU-HCM, Vietnam

## License

© 2026 HEALTHINFO IV. All rights reserved.

---

**Website Version:** 1.0
**Last Updated:** 2026-05-30
