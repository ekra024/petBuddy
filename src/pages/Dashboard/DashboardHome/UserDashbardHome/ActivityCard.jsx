const ActivityCard = ({ title, children }) => (
  <div className="bg-white p-5 rounded-xl shadow border space-y-3">
    <h3 className="font-semibold text-[#002169]">{title}</h3>
    {children}
  </div>
);

export default ActivityCard;
