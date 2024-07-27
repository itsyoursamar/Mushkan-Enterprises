import { useEffect, useState } from 'react';
import contactus from "../../public/contactus.jpg";
import toast from 'react-hot-toast';
import '../index.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    userEmail: '',
    idea: '',
    inquiry: '',
    orderSize: '',
    userPhone: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('#whatsapp').classList.add('animate-ring');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.userPhone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    setLoading(true);

    fetch('https://me-server-sygl.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.status === 200) {
          toast.success('Email sent successfully!');
          setFormData({
            userEmail: '',
            idea: '',
            inquiry: '',
            orderSize: '',
            userPhone: '',
          });
        } else {
          throw new Error('Failed to send email');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('There was an error sending the email.');
        setLoading(false);
      });
  };

  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4 my-10">
        <div className="mt-28 items-center justify-center text-center"></div>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="relative flex-1 md:w-1/4 p-6 border border-gray-300 rounded-lg">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${contactus})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
              <p className="text-sm mb-2 text-white md:text-lg">
                <i className="fas fa-phone-alt mr-2"></i>+91 9717973906
              </p>
              <p className="text-sm mb-2 text-white md:text-lg">
                <i className="fas fa-envelope mr-2"></i>info2mushkanenterprises@gmail.com
              </p>
            </div>
          </div>

          <div className="flex-1 md:w-3/4 p-6 bg-green-100 border border-gray-300 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 md:text-5xl ">Request a Query</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="userEmail" className="block text-lg font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="userPhone" className="block text-lg font-medium mb-1">Your Phone Number</label>
                <input
                  type="text"
                  id="userPhone"
                  name="userPhone"
                  value={formData.userPhone}
                  onChange={handleChange}
                  required
                  pattern="\d{10}"
                  maxLength="10"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="idea" className="block text-lg font-medium mb-1">What Idea Do You Have?</label>
                <input
                  type="text"
                  id="idea"
                  name="idea"
                  value={formData.idea}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-lg font-medium mb-1">What Would You Like to Know?</label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label htmlFor="orderSize" className="block text-lg font-medium mb-1">Order Size</label>
                <input
                  type="text"
                  id="orderSize"
                  name="orderSize"
                  value={formData.orderSize}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="circular-ring animate-circularRing"></div>
        </div>
      )}

      <div
        id="whatsapp"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer transition-transform flex items-center justify-center"
        style={{ zIndex: 9999 }}
      >
        <a
          href="https://wa.me/9717973906?text=Dear%20Sir/Madam,%20I%20would%20like%20to%20inquire%20about%20embroidery%20services%20concerning%20an%20order.%20Could%20you%20please%20provide%20more%20information?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
      </div>
    </>
  );
}
