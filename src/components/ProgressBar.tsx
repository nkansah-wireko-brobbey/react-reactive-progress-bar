
const ProgressBar = () => {
  return (
    <div className="min-w-96 h-[100px] rounded-lg p-5 bg-gray-800" >

    <h3 className="text-white text-center transition-all">{'50%'}</h3>

    <div className="border h-5 p-1">
      <div className="bg-gradient-to-r from-[#61DAFB] to-[#0e97bd] h-full tr transition-all duration-500"></div>
    </div>

  </div>
  )
}

export default ProgressBar