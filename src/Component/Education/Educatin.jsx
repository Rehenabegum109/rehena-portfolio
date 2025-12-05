import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-white text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Educational Qualification
        </h2>

        {/* Education Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center">

          {/* BSS Degree */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex-1 hover:shadow-blue-500 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-2">Bachelor of Social Science (BSS) in Economics</h3>
            <p className="text-gray-300 mb-1"><span className="font-medium">Institution:</span> National University</p>
            <p className="text-gray-300 mb-1"><span className="font-medium">Year:</span> 2022 - present</p>
          </motion.div>

          {/* HSC */}
          <motion.div 
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex-1 hover:shadow-blue-500 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h3>
            <p className="text-gray-300 mb-1"><span className="font-medium">Institution:</span> Nabigonj Govt College</p>
            <p className="text-gray-300 mb-1"><span className="font-medium">Year:</span> 2020 - 2021</p>
            <p className="text-gray-300"><span className="font-medium">GPA:</span> 4.80 / 5.00</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
