

### Documentation: Avni Home Food

---

### **Project Overview**

Avni Home Food is a showcase website dedicated to displaying a range of freshly made chapatis and other home-style food products. The site is designed to deliver a warm, authentic experience by featuring detailed product imagery, pricing, and easy ordering options. It also includes dynamic features like smooth scrolling, lazy-loaded images, and an email subscription form for customer inquiries.

---

### **Technologies Used**

#### **Front-End**
- **HTML5**: Provides the semantic structure for the website.
- **CSS3**: Used for styling and creating a responsive, visually appealing layout.
- **JavaScript**: Powers interactivity (e.g., smooth scrolling, lazy loading, and dynamic content).
- **EmailJS**: Manages email form submissions, enabling customers to reach out directly.
- **Swiper JS**: Implements a dynamic slider for the popular chapati products.

#### **Back-End**
- Currently, the website is fully static. Future enhancements might include a Node.js backend with a database (like MongoDB) for managing orders and product data.

---

### **Features**

1. **Product Showcase**:  
   Displays an engaging, image-rich listing of various chapati products with prices, descriptions, and ordering options.

2. **Interactive Image Slider**:  
   Utilizes Swiper JS to create a dynamic, coverflow-style slider that highlights top-selling chapatis.

3. **Smooth Scrolling & Header Effects**:  
   Provides seamless scrolling throughout the page along with dynamic header shadows based on the scroll position.

4. **Lazy Loading Images**:  
   Implements lazy loading to defer offscreen images until they’re needed, improving performance and reducing initial load time.

5. **Email Subscription Form**:  
   Integrated EmailJS for handling newsletter sign-ups and customer inquiries.

6. **Responsive Design**:  
   The site is designed to be fully responsive, ensuring an optimal viewing experience on devices of all sizes.

7. **Phone Call Feature**:  
   Offers a click-to-call functionality for mobile users, simplifying the ordering process.

---

### **Future Goals**

1. **Enhanced Product Management**:  
   Implement a dynamic backend (Node.js with MongoDB) to manage product listings, orders, and customer feedback.

2. **Improved Order Processing**:  
   Introduce an advanced ordering system that integrates with a custom email backend or CRM for better customer management.

3. **Performance & SEO Optimization**:  
   Continue optimizing image sizes, lazy loading, and metadata to improve site performance and search engine visibility.

4. **User Personalization**:  
   Add features such as product recommendations and customer reviews to enhance the user experience further.

---

### **How to Set Up the Project**

#### **Prerequisites**
- A modern web browser (Chrome, Firefox, etc.)
- Basic familiarity with HTML, CSS, JavaScript, and EmailJS.
- Node.js and npm installed on your development machine.

#### **Getting Started**
1. **clone the repo the Repository (if applicable)**:
   ```bash
   git clone "YourGithubRepositoryURL"
   ```

2. **Install Dependencies**:
   Navigate to the project directory and run:
   ```bash
   npm install
   ```

3. **Setup EmailJS**:
   - Create an account at [EmailJS](https://www.emailjs.com).
   - Obtain your **Service ID**, **Template ID**, and **Public Key**.
   - Update these details in your environment configuration (e.g., in a `.env` file).

4. **Customize the Content**:
   - Update product details, images, and pricing in the HTML and data files.
   - Adjust styles as needed in your CSS files.

---

### **Deployment**

#### **Steps for Deployment**
1. **Build the Project**:
   - Ensure assets are optimized using Webpack.
   - Run the build command:
     ```bash
     npm run build
     ```
     This generates a `dist` folder with production-ready files.

2. **Deploy on Netlify**:
   - Sign up or log in to [Netlify](https://www.netlify.com).
   - Connect your Git repository or drag-and-drop the `dist` folder.
   - Configure deployment settings:
     - **Publish Directory:** `dist`
     - **Build Command:** `npm run build`
   - Netlify will deploy the site and provide you with a live URL.

3. **Performance Enhancements**:
   - Use image compression tools (e.g., [TinyPNG](https://tinypng.com)) to optimize large images.
   - Lazy loading is already implemented to improve performance.

---

### **Notes on Webpack Configuration**

- **Lazy Loading**:  
  Implemented via JavaScript to defer the loading of images until they are nearly in view.
  
- **Asset Management**:  
  Webpack bundles CSS, JavaScript, and copies images to the `dist` folder for efficient deployment.
  
- **Plugins Used**:
  - `MiniCssExtractPlugin`: Extracts and bundles CSS.
  - `HtmlWebpackPlugin`: Generates the final HTML file with linked assets.
  - `CopyWebpackPlugin`: Copies static assets (images, fonts, etc.) to the build folder.

---

### **Conclusion**

Avni Home Food is designed as a modern, responsive, and user-friendly platform to showcase a range of fresh, homemade chapatis and related food items. With advanced features like interactive sliders, lazy loading, and a seamless email contact form, the website is built to provide a rich customer experience. Future enhancements and backend integrations will further enable the site to scale and meet growing customer demands.

