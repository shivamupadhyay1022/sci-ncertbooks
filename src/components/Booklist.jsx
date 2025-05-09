export const BookList = {
  ncert: {
    class12: {
      chemistry: {
        chemistry1: {
          title: "Chemistry Part I - Class 12",
          edition: "2023 Edition",
          isNew: true,
          image: "https://placeholder.com/book-cover-chemistry-12-1",
          chapters: {
            chapter1: {
              title: "prelims",
              pdfLink: "https://drive.google.com/file/d/1CMErHELzU4iCjHb6JFwdpM5q6NOSkpK6/view?usp=drive_link",
            },
            chapter2: {
              title: "The Solid State",
              pdfLink: "https://drive.google.com/file/d/1oGw1DwIE5SPzOUncVQM5CHr3qmU4YxJ5/view?usp=drive_link",
            },
            chapter3: {
              title: "Electrochemistry",
              pdfLink: "https://drive.google.com/file/d/1HvHugtdvgUGJGMAnikZdzhyRzIiDBf3u/view?usp=drive_link",
            },
            chapter4: {
              title: "Chemical Kinetics",
              pdfLink: "https://drive.google.com/file/d/1lIUz8hgIqEYR6BJAnPXzpxMcZfRzxxwy/view?usp=drive_link",
            },
            chapter5: {
              title: "Surface Chemistry",
              pdfLink: "https://drive.google.com/file/d/1fGR8qcG41c5iMYnPXMkCERiOnhlj4di7/view?usp=drive_link",
            },
            chapter6: {
              title: "Surface Chemistry",
              pdfLink: "https://drive.google.com/file/d/1fGR8qcG41c5iMYnPXMkCERiOnhlj4di7/view?usp=drive_link",
            },
            chapter4: {
              title: "Solutions",
              pdfLink: "https://drive.google.com/file/d/1h6PBMxjZzd-DXwaGd_J_lu4ciolYmTLO/view?usp=drive_link",
            },
            chapter5: {
              title: "Answers",
              pdfLink:
                "https://drive.google.com/file/d/1kZjD-TlvIMM8WdQxA_-QeK-F_mt5sP_L/view?usp=drive_link",
            },
          },
        },
        chemistry2: {
          title: "Chemistry Part II - Class 12",
          edition: "2023 Edition",
          isNew: true,
          image: "https://placeholder.com/book-cover-chemistry-12-2",
          chapters: {
            chapter6: {
              title:
                "General Principles and Processes of Isolation of Elements",
              pdfLink: "/pdfs/class12/chemistry/part2/chapter6.pdf",
            },
            chapter7: {
              title: "The p-Block Elements",
              pdfLink: "/pdfs/class12/chemistry/part2/chapter7.pdf",
            },
            chapter8: {
              title: "The d and f Block Elements",
              pdfLink: "/pdfs/class12/chemistry/part2/chapter8.pdf",
            },
            chapter9: {
              title: "Coordination Compounds",
              pdfLink: "/pdfs/class12/chemistry/part2/chapter9.pdf",
            },
          },
        },
      },
      physics: {
        physics1: {
          title: "Physics Part I - Class 12",
          edition: "2023 Edition",
          isNew: true,
          image: "https://placeholder.com/book-cover-physics-12-1",
          chapters: {
            chapter1: {
              title: "Electric Charges and Fields",
              pdfLink: "/pdfs/class12/physics/part1/chapter1.pdf",
            },
            chapter2: {
              title: "Electrostatic Potential and Capacitance",
              pdfLink: "/pdfs/class12/physics/part1/chapter2.pdf",
            },
          },
        },
      },
    },
    class11: {
      chemistry: {
        chemistry1: {
          title: "Chemistry Part I - Class 11",
          edition: "2023 Edition",
          isNew: false,
          image: "https://placeholder.com/book-cover-chemistry-11-1",
          chapters: {
            chapter1: {
              title: "Some Basic Concepts of Chemistry",
              pdfLink: "/pdfs/class11/chemistry/part1/chapter1.pdf",
            },
            chapter2: {
              title: "Structure of Atom",
              pdfLink: "/pdfs/class11/chemistry/part1/chapter2.pdf",
            },
          },
        },
      },
    },
  },
};
/** * Get resource by path
 * @param {string} path - Path in format "ncert:class12:chemistry:chemistry1:chapter1" * @returns {Object|null} - Resource object or null if not found
 */ export const getResource = (path) => {
  if (!path) return null;
  const segments = path.split(":");
  let current = BookList;
  for (const segment of segments) {
    if (!current[segment]) return null;
    current = current[segment];
  }
  return current;
};
/**
 * Get all books for a specific class and subject * @param {string} classLevel - Class level (e.g., "class12")
 * @param {string} subject - Subject (e.g., "chemistry") * @returns {Object} - Object containing books
 */ export const getBooksForClassAndSubject = (classLevel, subject) => {
  return BookList?.ncert?.[classLevel]?.[subject] || {};
};
/**
 * Get all chapters for a specific book * @param {string} classLevel - Class level (e.g., "class12")
 * @param {string} subject - Subject (e.g., "chemistry") * @param {string} book - Book ID (e.g., "chemistry1")
 * @returns {Object} - Object containing chapters */
export const getChaptersForBook = (classLevel, subject, book) => {
  return BookList?.ncert?.[classLevel]?.[subject]?.[book]?.chapters || {};
};
