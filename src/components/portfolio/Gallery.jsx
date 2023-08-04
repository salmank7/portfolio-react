import { useState } from "react";
import FilterButtons from "./FilterButtons";
import GalleryCard from "./GalleryCard";
import { portfolioConstants } from "./portfolioConstants";
import {AnimatePresence, motion} from "framer-motion"
import CardPreviewModal from "./CardPreviewModal";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedCard, setSelectedCard] = useState(null)

  let categories = ["All"];
  portfolioConstants.forEach((item) => {
    if (!categories.includes(item.category)) categories.push(item.category);
  });

  let filteredCategories;
  if (filter === "All") {
    filteredCategories = portfolioConstants;
  } else {
    filteredCategories = portfolioConstants.filter(
      (item) => item.category === filter
    );
  }

  const handleCardClick = (item) => {
    console.log("working")
    setSelectedCard(item)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
  }

  return (
    <div className="gallery">
      <FilterButtons categories={categories} filter={setFilter} />
      <motion.div
      layout
      className="gallery__grid">
        <AnimatePresence>
        {filteredCategories.map((item) => (
          <GalleryCard key={item.id} data={item} onClick={()=> handleCardClick(item)} />
          ))}
          </AnimatePresence>
      </motion.div>
      {/*card preview  */}
      {selectedCard && (
        <CardPreviewModal data={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Gallery;
