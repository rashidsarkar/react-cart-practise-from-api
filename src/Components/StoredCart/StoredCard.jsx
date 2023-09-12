const StoredCard = ({ stord, handleRemoved }) => {
  return (
    <div className="bg-slate-500">
      <h2 className="text-center my-9">Items in Cart: {stord.length}</h2>
      <div className="flex flex-wrap gap-2 ">
        {stord.map((item) => (
          <div key={item.id}>
            <img className="w-40" src={item.thumbnail} alt="" />
            <button className="btn" onClick={() => handleRemoved(item.id)}>
              REmoved
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoredCard;
