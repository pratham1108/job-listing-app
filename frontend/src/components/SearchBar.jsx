const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-4 border-b">
      <input
        type="text"
        placeholder="Search by location..."
        className="w-full p-2 border rounded"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
