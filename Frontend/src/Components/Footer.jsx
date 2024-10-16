import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-center py-6 border-t-2">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold mb-5">QuizifyAI by Anurag</h2>
        <p className="text-sm mb-1">2024 All rights reserved.</p>
        <div className="flexCenter space-x-4 mt-4 text-xs">
          <a href="#" className="text-blue-600 hover:text-blue-500 transition duration-200">Privacy Policy</a>
          <a href="#" className="text-blue-600 hover:text-blue-500 transition duration-200">Terms of Service</a>
          <a href="#" className="text-blue-600 hover:text-blue-500 transition duration-200">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

