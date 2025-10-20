import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 sm:p-12 border border-gray-800/50"
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src="https://raw.githubusercontent.com/MoAfrika/my-images/refs/heads/main/Neon%20Halo%20Portrait%20with%20Digital%20Overlays.png"
              alt="MoAfrika Skotch Ntilane"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center mb-8">
            Right, About Me...
          </h1>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6">
            <p>
              I'm not a résumé in motion, I'm a constellation of obsessions stitched together with stubborn grace. A freelance writer by trade, yes. A software whisperer, sometimes. A database tamer on days the digital gods demand a duel. But those titles? They're postcards from a much larger map.
            </p>

            <p>
              I'm an architect of stories and systems, fluent in the language of both algorithms and allegory. The keyboard is my instrument... sometimes it hums with clean, efficient code, sometimes it howls with sentences sharp enough to draw blood.
            </p>

            <p>
              Every scar in my portfolio is a plot twist I refused to edit out. Mistakes? I prefer to call them experiments in becoming, each one a breadcrumb on the path to mastery.
            </p>

            <p>
              I move through the world with an appetite: for precision, for possibility, for the kind of beauty that lives in contradictions. The brutalist elegance of logic. The feral freedom of art.
            </p>

            <p>
              I'm not here to "fit in" or fill a seat. I'm here to tilt the stage, to rewire the script, to make sure when the credits roll, the name MoAfrika Skotch Ntilane rings like a war drum in your memory. Because it does have thunder in it... if you're listening.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
