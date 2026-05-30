import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">8 Thập Kỷ Khẳng Định Vị Thế Quốc Gia</h1>
        <p className="text-gray-400 mb-8">
          Trang web longform với hiệu ứng Parallax Scrolling - Phiên bản HTML/CSS/JS thuần
        </p>
        
        <div className="bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-amber-400">Các file đã tạo:</h2>
          <ul className="text-left space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-sm">/public/vnexpress-style/index.html</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-sm">/public/vnexpress-style/styles.css</code>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <code className="bg-gray-700 px-2 py-1 rounded text-sm">/public/vnexpress-style/script.js</code>
            </li>
          </ul>
        </div>

        <Link 
          href="/vnexpress-style/index.html"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
        >
          Xem trang web với hiệu ứng Parallax
        </Link>

        <div className="mt-8 text-sm text-gray-500">
          <p>Hoặc mở trực tiếp file <code>index.html</code> trong trình duyệt khi sử dụng VS Code</p>
        </div>
      </div>
    </div>
  )
}
