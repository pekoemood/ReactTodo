const Card = ({ title, image, description}) => {
  
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full h-48 object-cover" src={image} alt="カード画像" />
    <div className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 py-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        詳細を見る
      </button>
    </div>
  </div>
  )
}

export default Card;