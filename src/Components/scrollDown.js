// const scrollDown = (ref) => {
//   window.scrollTo({
//     top: ref.current.offsetTop,
//     behavior: "smooth",
//   });
// };

const scrollDown = (scrollDiv) => {
  if (!scrollDiv.current) return;
  scrollDiv.current.scrollIntoView({ behavior: "smooth" });
};

export default scrollDown;
