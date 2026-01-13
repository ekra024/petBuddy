const ActivityCard = ({ title, children }) => (
  <div className="bg-white p-5 rounded-xl shadow border space-y-2">
    <h3 className="font-semibold text-[#002169]">{title}</h3>
    {children.length ? children : <p className="text-gray-500">No data</p>}
  </div>
);

export default ActivityCard;
