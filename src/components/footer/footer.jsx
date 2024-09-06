import React from 'react'

const Footer = () => {
  return (
   <div>

<footer className='mt-5 mb-7'>

        {/* ABOUT */}

    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-4">About Mentora</h3>
            <p class="text-gray-600">Mentora is dedicated to providing comprehensive mental health support and resources. Our mission is to help individuals navigate their mental well-being with ease and confidence.</p>
        </div>

        {/* QUICK LINKS */}

        <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="/about-us" class="text-blue-600 hover:underline">About Us</a></li>
                <li><a href="/contact" class="text-blue-600 hover:underline">Contact</a></li>
                <li><a href="/faq" class="text-blue-600 hover:underline">FAQ</a></li>
                <li><a href="/support" class="text-blue-600 hover:underline">Support</a></li>
                <li><a href="/blog" class="text-blue-600 hover:underline">Blog</a></li>
                <li><a href="/resources" class="text-blue-600 hover:underline">Resources</a></li>
            </ul>
        </div>

        {/* POLICIES */}

        
        <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Legal & Policies</h3>
            <ul class="space-y-2">
                <li><a href="/terms" class="text-blue-600 hover:underline">Terms of Service</a></li>
                <li><a href="/cookies" class="text-blue-600 hover:underline">Cookies Policy</a></li>
                <li><a href="/privacy" class="text-blue-600 hover:underline">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" class="text-blue-600 hover:underline">Terms and Conditions</a></li>
            </ul>
        </div>
    </div>

    {/* SOCIAL MEDIA */}
   
    <div class="my-8 border-t border-gray-300"></div>

    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
       
        <div class="flex space-x-4">
            <a href="https://facebook.com" class="text-blue-600 hover:text-blue-800">Facebook</a>
            <a href="https://twitter.com" class="text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="https://linkedin.com" class="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="https://instagram.com" class="text-blue-600 hover:text-blue-800">Instagram</a>
        </div>

        {/* CENTRE NAME */}

       
        <div class="text-center my-4 md:my-0">
            <span class="text-gray-700 font-semibold">Mentora © 2024</span>
        </div>

        {/* CONTACT INFORMATION */}
        
        <div class="text-right">
            <p class="text-gray-600">Email: <a href="mailto:support@mentora.com" class="text-blue-600 hover:underline">support@mentora.com</a></p>
            <p class="text-gray-600">Phone: +1 (123) 456-7890</p>
        </div>
    </div>
</footer>


   </div>
  )
}

export default Footer;