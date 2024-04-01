import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#7893F1] text-white py-6 px-10 pr-20">
          <div className="flex justify-between mb-6">
            <div className="text-xl ml-10">Hakim Hub</div>
            <div className="flex space-x-10 gap-3">
              <div>
                <div>Get Connected</div>
                <div className="mt-2">
                  <div> {'>'} For Physicians</div>
                  <div> {'>'} For Hospitals</div>
                </div>
              </div>
              <div>
                <div>Actions</div>
                <div className="mt-2">
                  <div>{'>'} Find a doctor</div>
                  <div>{'>'} Find a hospital</div>
                </div>
              </div>
              <div>
                <div>Company</div>
                <div className="mt-2">
                  <div>{'>'} About Us</div>
                  <div>{'>'} Career</div>
                  <div>{'>'} Join our team</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-white" />
            <div className="flex justify-between mt-6 space-x-10">
                <div>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-use">Terms of Use</a>
                </div>
                <div className="flex space-x-3">
                    <Facebook/>
                    <Linkedin/>
                    <Instagram/>
                    <Twitter/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;