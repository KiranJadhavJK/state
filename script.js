document.addEventListener("DOMContentLoaded", () => {
  const imagePopups = {
    // History Images
    "History 1": "Maratha Empire's founding by Chhatrapati Shivaji Maharaj.",
    "History 2": "Battle of Panipat and its historical consequences.",
    "History 3": "British era developments in Bombay Presidency.",
    "History 4": "Formation of Maharashtra state in 1960.",
    "History 5": "Contribution of freedom fighters from Maharashtra.",
    "History 6": "Legacy of the Peshwas and Maratha Confederacy.",

    // Sanskruti Images
    "Sankranti": "Makar Sankranti marks the sun's transition into Capricorn.",
    "Ganesh Utsav": "Celebration of Lord Ganesha’s birth, started by Tilak.",
    "Diwali": "Festival of lights symbolizing victory of light over darkness.",
    "Gudhi Padwa": "Maharashtrian New Year and spring harvest festival.",
    "Holi": "Festival of colors celebrating the arrival of spring.",
    "Mahashivratri": "Devotional festival dedicated to Lord Shiva.",

    // Tourism Images
    "Mahabaleshwar": "Hill station famous for strawberries and viewpoints.",
    "Pune": "Cultural capital and educational hub of Maharashtra.",
    "Mumbai": "Financial capital with heritage sites and Bollywood.",
    "Ajanta Ellora": "UNESCO rock-cut cave monuments of ancient India.",
    "Forts": "Historical forts like Sinhagad, Rajgad, and Raigad.",
    "Matheran": "Eco-sensitive hill station with toy train access.",
    "Panchgani": "Scenic hill station with Table Land plateau.",
    "Alibaug": "Coastal town known for beaches and Kolaba Fort."
  };

  const allImages = document.querySelectorAll(".popup-gallery img");

  allImages.forEach(img => {
    img.addEventListener("click", () => {
      const message = imagePopups[img.alt] || "No information available.";
      alert(message);
    });
  });
});
