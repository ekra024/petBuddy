const StatCard = ({ icon, title, value }) => (
  <div className="bg-white p-5 rounded-xl shadow border">
    <div className="flex items-center gap-3 text-[#894b8d] text-xl">
      {icon}
      <h3 className="font-medium text-gray-600">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-[#002169] mt-2">{value}</p>
  </div>
);

export default StatCard;
