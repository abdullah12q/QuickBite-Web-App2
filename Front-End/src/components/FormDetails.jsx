import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function FormDetails({ texts, children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 ">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 500 }}
        className="bg-linear-to-r from-gray-600 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md -mb-16"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-2 text-left">
          {texts.title}
        </h2>
        <p className="text-gray-400 mb-4 text-left">{texts.subtitle}</p>
        {children}
        <p className="text-center text-gray-400 mt-4">
          {texts.link}{" "}
          <Link
            to={`/auth?mode=${texts.linkMode}`}
            className="text-orange-500 hover:text-orange-600"
          >
            {texts.linkText}
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
