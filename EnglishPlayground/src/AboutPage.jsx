import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Menu, Info } from 'lucide-react'
import { useState } from 'react'

export default function AboutPage({ setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              <span className="text-lg sm:text-xl font-bold text-purple-600">趣味英语乐园</span>
            </div>
            <div className="hidden md:flex space-x-4">
              <Button variant="ghost" onClick={() => setCurrentPage('home')}>首页</Button>
              <Button variant="ghost" onClick={() => setCurrentPage('lessons')}>课程</Button>
              <Button variant="ghost" onClick={() => setCurrentPage('profile')}>个人中心</Button>
              <Button variant="default">关于我们</Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}>首页</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setCurrentPage('lessons'); setMobileMenuOpen(false); }}>课程</Button>
              <Button variant="ghost" className="w-full justify-start" onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}>个人中心</Button>
              <Button variant="default" className="w-full justify-start" onClick={() => setMobileMenuOpen(false)}>关于我们</Button>
            </div>
          </div>
        )}
      </nav>

      {/* 主要内容 */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-center">关于我们</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 网站介绍 */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-600">网站简介</h3>
              <p className="text-gray-700 leading-relaxed">
                欢迎来到趣味英语乐园！这是一个专为中国小学生（一到六年级）设计的互动英语学习平台。
                我们通过趣味游戏的方式，让孩子们在轻松愉快的氛围中学习英语基础知识。
              </p>
              <p className="text-gray-700 leading-relaxed">
                网站包含40节课程，完全同步人教版小学英语教材，从三年级上册到六年级下册。
                每节课都包含词汇配对、句子排序和听音辨词三个游戏，帮助孩子全面提升英语能力。
              </p>
            </div>

            {/* 作者介绍 */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-purple-600">作者介绍</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center">
                    <span className="text-3xl">👩‍💻</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Carina Lin</h4>
                    <p className="text-sm text-gray-600">人工智能爱好者</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  因为家有三个小学娃，所以一时兴起，创建了这个网页。
                  网页内容比较简单，仅供娱乐，请勿商用～
                </p>
              </div>
            </div>

            {/* 使用说明 */}
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold text-purple-600">使用说明</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>完成前一课的所有三个游戏，才能解锁下一课</li>
                <li>每个游戏都有多道题目，认真完成可以获得积分</li>
                <li>积分累积可以提升等级，解锁更多成就</li>
                <li>建议每天学习1-2节课，循序渐进</li>
              </ul>
            </div>

            {/* 返回按钮 */}
            <div className="flex justify-center pt-6">
              <Button onClick={() => setCurrentPage('home')} size="lg">
                返回首页
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

