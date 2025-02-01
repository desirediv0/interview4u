"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiCode, FiDatabase, FiServer, FiLayers, FiBarChart, FiCloud, FiCheckCircle } from "react-icons/fi"

const TechShowcase = () => {
  const [activeTab, setActiveTab] = useState("Frontend Dev")

  const categoryIcons = {
    "Frontend Dev": <FiCode />,
    "Backend Dev": <FiServer />,
    "Full Stack Dev": <FiLayers />,
    "Database Dev": <FiDatabase />,
    "Data Science": <FiBarChart />,
    "Dev Ops": <FiCloud />,
    "Quality Assurance": <FiCheckCircle />,
  }

  const categories = [
    {
      name: "Frontend Dev",
      technologies: [
        ["HTML", "CSS", "JavaScript", "Bootstrap", "AJAX", "jQuery", "WinForms", "AngularJS", "ReactJS"],
        ["VueJS", "Popper.JS", "KnockoutJS", "Ionic Framework", "ExpressJS", "Flutter", "Svelte", "WebAssembly"],
        ["TypeScript", "BackboneJS", "ReduxJS", "ChaiJS", "MochaJS", "SinonJS", "ExtJS"],
      ],
    },
    {
      name: "Backend Dev",
      technologies: [
        ["Node.js", "Python", "Java", "PHP", "Ruby", "C", "C++", "C#", ".NET Core", "Go", "Java Spring"],
        ["Express.js", "Django", "Flask", "Spring Boot", "Laravel", "Ruby on Rails", "Hibernate", "Scala"],
        ["Kotlin", "Unix Shell", "Linux Shell", "Apache Maven"],
      ],
    },
    {
      name: "Full Stack Dev",
      technologies: [
        [
          "MERN Stack",
          "PHP Full Stack",
          "C# Full Stack",
          "Django Stack",
          "Ruby on Rails Full Stack",
          "LAMP Stack",
          "LEMP Stack",
        ],
      ],
    },
    {
      name: "Database Dev",
      technologies: [
        ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Oracle", "SQL Server"],
        ["Prisma", "Sequelize", "Mongoose", "TypeORM", "Hibernate"],
        ["ElasticSearch", "Cassandra", "Neo4j", "DynamoDB"],
      ],
    },
    {
      name: "Data Science",
      technologies: [
        ["Python", "R", "Julia", "MATLAB", "SAS", "SPSS"],
        ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
        ["Jupyter", "RStudio", "Tableau", "Power BI"],
      ],
    },
    {
      name: "Dev Ops",
      technologies: [
        ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
        ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Terraform"],
        ["Prometheus", "Grafana", "ELK Stack", "New Relic"],
      ],
    },
    {
      name: "Quality Assurance",
      technologies: [
        ["Jest", "Mocha", "Jasmine", "Selenium", "Cypress", "TestNG"],
        ["JUnit", "PyTest", "PHPUnit", "RSpec", "Postman"],
        ["SonarQube", "ESLint", "Jenkins", "CircleCI"],
      ],
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-transparent pt-8">
      {/* Navigation Pills */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.name}
            onClick={() => setActiveTab(category.name)}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base 
                            transition-all duration-300 ${
                              activeTab === category.name
                                ? "bg-white text-[#103080] shadow-lg "
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {categoryIcons[category.name]}
            {category.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Technologies Container */}
      <AnimatePresence mode="wait">
        {categories.map(
          (category) =>
            category.name === activeTab && (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-4 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md 
                                border border-white/20 shadow-xl"
              >
                <div className="space-y-4 sm:space-y-6">
                  {category.technologies.map((row, rowIndex) => (
                    <motion.div
                      key={rowIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: rowIndex * 0.1 }}
                      className="flex flex-wrap gap-2 sm:gap-3"
                    >
                      {row.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: rowIndex * 0.1 + techIndex * 0.05,
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                          }}
                          className="px-3 sm:px-5 py-1 sm:py-2  rounded-full text-white 
                                                    hover:shadow-lg transition-all duration-300
                                                    text-xs sm:text-sm md:text-base backdrop-blur-sm
                                                    border border-white/20 cursor-pointer"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default TechShowcase

