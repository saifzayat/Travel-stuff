export default function Stats({ items }) {
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {numItem === 0
          ? "Start adding some items to your packing list 🚀"
          : percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${numItem} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
