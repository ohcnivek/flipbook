export const FlipbookImageCard = (imagePath) => {
  return (
    <div>
      {console.log(imagePath)}
      <img src={`${imagePath}`} alt="hi" />
    </div>
  );
};
