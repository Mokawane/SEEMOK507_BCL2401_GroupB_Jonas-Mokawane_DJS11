// import React, { useState } from "react";

// export default function SortIcon({ sortOption, setSortOption }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSortOptions = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSortOptionChange = (option) => {
//     setSortOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="sort-icon-container">
//       <button onClick={toggleSortOptions}>
//         <img src="" alt="Sort" />
//       </button>
//       {isOpen && (
//         <div className="sort-options">
//           <div onClick={() => handleSortOptionChange("a-z")}>A-Z</div>
//           <div onClick={() => handleSortOptionChange("z-a")}>Z-A</div>
//           <div onClick={() => handleSortOptionChange("newest")}>Newest-Oldest</div>
//           <div onClick={() => handleSortOptionChange("oldest")}>Oldest-Newest</div>
//         </div>
//       )}
//     </div>
//   );
// }
