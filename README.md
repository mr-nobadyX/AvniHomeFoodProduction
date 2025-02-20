# **Avni Home Food - Project Documentation**

## **Overview**

Avni Home Food is a beautifully designed showcase website that highlights freshly made chapatis and other home-style food products. The website delivers an authentic experience through rich visuals, smooth interactions, and an easy-to-use ordering system. It features modern web technologies to ensure responsiveness, speed, and a seamless user experience.

## **Technologies Used**

### **Front-End**

- **HTML5**: Provides a structured and semantic layout.
- **CSS3**: Enhances aesthetics with responsive and modern styling.
- **JavaScript**: Adds interactivity, animations, and dynamic behaviors.
- **EmailJS**: Enables direct email communication for customer inquiries.
- **Swiper JS**: Implements a visually appealing product slider.

### **Back-End**

- The current version is static, but a Node.js and MongoDB backend is planned for order and customer management.

## **Key Features**

### **1. Product Showcase**

A visually compelling display of chapati products, complete with pricing, descriptions, and an ordering option.

### **2. Interactive Image Slider**

A Swiper JS-powered slider that highlights best-selling chapatis with smooth transitions.

### **3. Smooth Scrolling & Dynamic Header**

Seamless page navigation with a header that adapts dynamically as users scroll.

### **4. Lazy Loading for Images**

Optimizes performance by loading images only when they come into view.

### **5. Email Subscription & Contact Form**

Powered by EmailJS, enabling customers to subscribe and send inquiries instantly.

### **6. Mobile-Optimized Experience**

A fully responsive layout with a mobile-friendly design, including a **click-to-call** feature for easy ordering.

## **Future Enhancements**

### **1. Backend Integration**

- Implement a **Node.js and MongoDB** backend for dynamic product management and customer orders.

### **2. Advanced Order Processing**

- Develop an automated ordering system integrated with email notifications and CRM tools.

### **3. Performance & SEO Optimization**

- Further improve loading speeds with optimized assets and enhanced SEO strategies.

### **4. Personalization & Reviews**

- Introduce **product recommendations** and customer reviews to boost engagement.

## **Project Setup**

### **Prerequisites**

- Modern web browser (Chrome, Firefox, etc.)
- Basic knowledge of **HTML, CSS, JavaScript, and EmailJS**
- Installed **Node.js and npm** (for future backend development)

### **Installation Steps**

#### **1. Clone the Repository**

```bash
  git clone "https://github.com/mr-nobadyX/AvniHomeFoodProduction.git"
```

#### **2. Install Dependencies**

```bash
  npm install
```

#### **3. Configure EmailJS**

- Create an [EmailJS](https://www.emailjs.com) account.
- Retrieve **Service ID, Template ID, and Public Key**.
- Add these details to your `.env` configuration file.

#### **4. Customize Content**

- Update product details, images, and pricing in HTML files.
- Adjust styles in CSS as needed.

## **Deployment Guide**

### **1. Build the Project**

- Optimize assets using Webpack.
- Run:
  ```bash
  npm run build
  ```
  This generates a `dist` folder with production-ready files.

### **2. Deploy on Netlify**

- Sign up or log in to [Netlify](https://www.netlify.com).
- Upload the `dist` folder or connect a GitHub repository.
- Set **Publish Directory** to `dist` and **Build Command** to `npm run build`.
- Deploy and obtain a live URL.

### **3. Optimize Performance**

- Use [TinyPNG](https://tinypng.com) for image compression.
- Ensure lazy loading is properly implemented.

## **Webpack Configuration Notes**

### **1. Lazy Loading**

- JavaScript-based deferred loading ensures faster initial page loads.

### **2. Asset Management**

- Webpack bundles and optimizes CSS, JavaScript, and images.

### **3. Plugins Used**

- **MiniCssExtractPlugin**: Extracts CSS into separate files.
- **HtmlWebpackPlugin**: Generates optimized HTML.
- **CopyWebpackPlugin**: Transfers static assets.

## **Conclusion**

Avni Home Food is a high-quality, performance-optimized website designed to deliver an exceptional user experience. With interactive elements, seamless navigation, and a clean UI, it offers a professional and engaging platform for showcasing home-cooked chapatis. Future backend enhancements will further elevate its functionality and user engagement.
