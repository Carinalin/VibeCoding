import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  BookOpen, 
  Trophy, 
  Star, 
  Volume2, 
  Image as ImageIcon, 
  Sparkles, 
  Award,
  Home,
  Gamepad2,
  User,
  ChevronRight,
  Check,
  X,
  ArrowLeft,
  HelpCircle,
  Lock,
  Play
} from 'lucide-react'
import './App.css'
import { lessons, levels, achievements, getLevelByPoints, getAvailableLessons } from './data/curriculum.js'
import AboutPage from './AboutPage.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [userPoints, setUserPoints] = useState(0)
  const [userLevel, setUserLevel] = useState(1)
  const [completedLessons, setCompletedLessons] = useState([])
  const [currentLesson, setCurrentLesson] = useState(null)
  const [totalLessons] = useState(40)

  // 游戏状态
  const [currentGame, setCurrentGame] = useState(null)
  const [gameScore, setGameScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // 词汇配对游戏状态
  const [selectedEnglish, setSelectedEnglish] = useState(null)
  const [selectedChinese, setSelectedChinese] = useState(null)
  const [matchedPairs, setMatchedPairs] = useState([])
  const [wrongMatch, setWrongMatch] = useState(false)

  // 句子排序游戏状态
  const [sentenceWords, setSentenceWords] = useState([])
  const [userSentence, setUserSentence] = useState([])

  // 听音辨词游戏状态
  const [currentVocab, setCurrentVocab] = useState(null)
  const [vocabOptions, setVocabOptions] = useState([])
  
  // 移动端菜单状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // 练习数量追踪
  const [practicedWords, setPracticedWords] = useState(0)
  const [practicedSentences, setPracticedSentences] = useState(0)
  const [practicedListening, setPracticedListening] = useState(0)
  
  // 游戏完成状态追踪 - 格式: { lessonId: { matching: true, sentence: false, listening: true } }
  const [completedGames, setCompletedGames] = useState({})

  // 更新用户等级
  useEffect(() => {
    const level = getLevelByPoints(userPoints)
    setUserLevel(level.level)
  }, [userPoints])

  // 语音合成函数
  const speakWord = (word) => {
    if ('speechSynthesis' in window) {
      // 取消之前的语音
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(word)
      utterance.lang = 'en-US'
      utterance.rate = 0.8 // 语速稍慢，适合学习
      utterance.pitch = 1
      utterance.volume = 1
      
      window.speechSynthesis.speak(utterance)
    } else {
      alert('您的浏览器不支持语音功能')
    }
  }

  const startVocabMatchGame = (lesson) => {
    setCurrentLesson(lesson)
    setCurrentGame('vocab-match')
    setGameScore(0)
    setMatchedPairs([])
    setSelectedEnglish(null)
    setSelectedChinese(null)
    setWrongMatch(false)
  }

  const startSentenceGame = (lesson) => {
    setCurrentLesson(lesson)
    setCurrentGame('sentence-order')
    setGameScore(0)
    setCurrentQuestion(0)
    // 将句子拆分成单词并打乱顺序
    const words = lesson.sentences[0].english.split(' ')
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    setSentenceWords(shuffled)
    setUserSentence([])
  }

  const startListeningGame = (lesson) => {
    setCurrentLesson(lesson)
    setCurrentGame('listening')
    setGameScore(0)
    setCurrentQuestion(0)
    
    const vocab = lesson.vocabulary[Math.floor(Math.random() * lesson.vocabulary.length)]
    setCurrentVocab(vocab)
    
    // 生成选项
    const options = [vocab]
    const otherVocabs = lesson.vocabulary.filter(v => v.word !== vocab.word)
    while (options.length < Math.min(4, lesson.vocabulary.length)) {
      const randomVocab = otherVocabs[Math.floor(Math.random() * otherVocabs.length)]
      if (!options.find(opt => opt.word === randomVocab.word)) {
        options.push(randomVocab)
      }
    }
    setVocabOptions(options.sort(() => Math.random() - 0.5))
  }

  const handleEnglishClick = (word) => {
    if (matchedPairs.includes(word.word)) return
    
    setSelectedEnglish(word)
    setWrongMatch(false)
    
    if (selectedChinese) {
      if (selectedChinese.word === word.word) {
        setMatchedPairs([...matchedPairs, word.word])
        setGameScore(gameScore + 10)
        setUserPoints(userPoints + 10)
        setPracticedWords(practicedWords + 1)
        setSelectedEnglish(null)
        setSelectedChinese(null)
        
        if (matchedPairs.length + 1 === currentLesson.vocabulary.length) {
          setTimeout(() => {
            alert('🎉 恭喜你完成所有配对！总得分：' + (gameScore + 10) + ' 分')
            if (!completedLessons.includes(currentLesson.id)) {
              setCompletedLessons([...completedLessons, currentLesson.id])
            }
            // 标记词汇配对游戏完成
            setCompletedGames(prev => ({
              ...prev,
              [currentLesson.id]: {
                ...prev[currentLesson.id],
                matching: true
              }
            }))
            setCurrentGame(null)
          }, 500)
        }
      } else {
        setWrongMatch(true)
        setTimeout(() => {
          setSelectedEnglish(null)
          setSelectedChinese(null)
          setWrongMatch(false)
        }, 1000)
      }
    }
  }

  const handleChineseClick = (word) => {
    if (matchedPairs.includes(word.word)) return
    
    setSelectedChinese(word)
    setWrongMatch(false)
    
    if (selectedEnglish) {
      if (selectedEnglish.word === word.word) {
        setMatchedPairs([...matchedPairs, word.word])
        setGameScore(gameScore + 10)
        setUserPoints(userPoints + 10)
        setPracticedWords(practicedWords + 1)
        setSelectedEnglish(null)
        setSelectedChinese(null)
        
        if (matchedPairs.length + 1 === currentLesson.vocabulary.length) {
          setTimeout(() => {
            alert('🎉 恭喜你完成所有配对！总得分：' + (gameScore + 10) + ' 分')
            if (!completedLessons.includes(currentLesson.id)) {
              setCompletedLessons([...completedLessons, currentLesson.id])
            }
            // 标记词汇配对游戏完成
            setCompletedGames(prev => ({
              ...prev,
              [currentLesson.id]: {
                ...prev[currentLesson.id],
                matching: true
              }
            }))
            setCurrentGame(null)
          }, 500)
        }
      } else {
        setWrongMatch(true)
        setTimeout(() => {
          setSelectedEnglish(null)
          setSelectedChinese(null)
          setWrongMatch(false)
        }, 1000)
      }
    }
  }

  const handleWordClick = (word) => {
    setUserSentence([...userSentence, word])
    setSentenceWords(sentenceWords.filter(w => w !== word))
  }

  const handleRemoveWord = (index) => {
    const word = userSentence[index]
    setUserSentence(userSentence.filter((_, i) => i !== index))
    setSentenceWords([...sentenceWords, word])
  }

  const checkSentence = () => {
    const userAnswer = userSentence.join(' ')
    if (userAnswer === currentLesson.sentences[currentQuestion].english) {
      setGameScore(gameScore + 20)
      setUserPoints(userPoints + 20)
      setPracticedSentences(practicedSentences + 1)
      alert('太棒了！答对了！🎉')
      
      if (currentQuestion < currentLesson.sentences.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        const words = currentLesson.sentences[currentQuestion + 1].english.split(' ')
        const shuffled = [...words].sort(() => Math.random() - 0.5)
        setSentenceWords(shuffled)
        setUserSentence([])
      } else {
        alert('恭喜完成所有题目！')
        if (!completedLessons.includes(currentLesson.id)) {
          setCompletedLessons([...completedLessons, currentLesson.id])
        }
        // 标记句子排序游戏完成
        setCompletedGames(prev => ({
          ...prev,
          [currentLesson.id]: {
            ...prev[currentLesson.id],
            sentence: true
          }
        }))
        setCurrentGame(null)
      }
    } else {
      alert('再试一次吧！💪')
    }
  }

  const handleListeningAnswer = (word) => {
    if (word.word === currentVocab.word) {
      setGameScore(gameScore + 15)
      setUserPoints(userPoints + 15)
      setPracticedListening(practicedListening + 1)
      alert('答对了！🎉')
      
      if (currentQuestion < currentLesson.vocabulary.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        const remainingVocabs = currentLesson.vocabulary.filter(v => v.word !== currentVocab.word)
        const vocab = remainingVocabs[Math.floor(Math.random() * remainingVocabs.length)] || currentLesson.vocabulary[0]
        setCurrentVocab(vocab)
        
        const options = [vocab]
        const otherVocabs = currentLesson.vocabulary.filter(v => v.word !== vocab.word)
        while (options.length < Math.min(4, currentLesson.vocabulary.length)) {
          const randomVocab = otherVocabs[Math.floor(Math.random() * otherVocabs.length)]
          if (!options.find(opt => opt.word === randomVocab.word)) {
            options.push(randomVocab)
          }
        }
        setVocabOptions(options.sort(() => Math.random() - 0.5))
      } else {
        alert('恭喜完成所有题目！')
        if (!completedLessons.includes(currentLesson.id)) {
          setCompletedLessons([...completedLessons, currentLesson.id])
        }
        // 标记听音辨词游戏完成
        setCompletedGames(prev => ({
          ...prev,
          [currentLesson.id]: {
            ...prev[currentLesson.id],
            listening: true
          }
        }))
        setCurrentGame(null)
      }
    } else {
      alert('再试一次吧！💪')
    }
  }

  const renderHomePage = () => {
    const currentLevelInfo = getLevelByPoints(userPoints)
    const availableLessons = getAvailableLessons(completedGames)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* 导航栏 */}
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  趣味英语乐园
                </h1>
              </div>
              {/* 桌面端菜单 */}
              <div className="hidden md:flex items-center space-x-6">
                <Button variant="ghost" onClick={() => setCurrentPage('home')}>
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('lessons')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('profile')}>
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('about')}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
              {/* 移动端汉堡菜单 */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Gamepad2 className="w-6 h-6" />}
                </Button>
              </div>
            </div>
            {/* 移动端下拉菜单 */}
            {mobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                >
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('lessons'); setMobileMenuOpen(false); }}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}
                >
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
            )}
          </div>
        </nav>

        {/* 主要内容 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 欢迎区域 */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              欢迎来到趣味英语乐园！🎉
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              通过有趣的游戏，轻松学习英语基础知识
            </p>
          </div>

          {/* 用户统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">{userPoints}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">积分</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{currentLevelInfo.badge}</div>
                <div className="text-sm sm:text-base md:text-xl font-bold text-pink-600 mb-1">{currentLevelInfo.name}</div>
                <div className="text-xs sm:text-sm text-gray-600">等级 {currentLevelInfo.level}</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">{completedLessons.length}/{totalLessons}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">已完成课程</div>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 sm:mb-2">{availableLessons.length}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600">可学习课程</div>
              </CardContent>
            </Card>
          </div>

          {/* 学习进度 */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                学习进度
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>总体进度</span>
                  <span>{Math.round((completedLessons.length / totalLessons) * 100)}%</span>
                </div>
                <Progress value={(completedLessons.length / totalLessons) * 100} className="h-3" />
              </div>
            </CardContent>
          </Card>

          {/* 快速开始 - 显示前3个可用课程 */}
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center px-2">
              <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-purple-600" />
              快速开始
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {availableLessons.slice(0, 3).map((lesson) => {
                const games = completedGames[lesson.id] || {}
                const completedCount = (games.matching ? 1 : 0) + (games.sentence ? 1 : 0) + (games.listening ? 1 : 0)
                const isFullyCompleted = completedCount === 3
                
                return (
                  <Card key={lesson.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">第{lesson.id}课</Badge>
                        <Badge variant={isFullyCompleted ? "default" : "outline"}>
                          {completedCount}/3
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{lesson.title}</CardTitle>
                      <CardDescription>{lesson.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button 
                          onClick={() => startVocabMatchGame(lesson)}
                          className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.matching && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <ImageIcon className="w-4 h-4 mr-2" />
                          词汇配对
                        </Button>
                        <Button 
                          onClick={() => startSentenceGame(lesson)}
                          className="w-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.sentence && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <BookOpen className="w-4 h-4 mr-2" />
                          句子排序
                        </Button>
                        <Button 
                          onClick={() => startListeningGame(lesson)}
                          className="w-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.listening && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <Volume2 className="w-4 h-4 mr-2" />
                          听音辨词
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-6">
              <Button onClick={() => setCurrentPage('lessons')} variant="outline" size="lg">
                查看所有课程
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderLessonsPage = () => {
    const availableLessons = getAvailableLessons(completedGames)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  趣味英语乐园
                </h1>
              </div>
              {/* 桌面端菜单 */}
              <div className="hidden md:flex items-center space-x-6">
                <Button variant="ghost" onClick={() => setCurrentPage('home')}>
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('lessons')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('profile')}>
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('about')}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
              {/* 移动端汉堡菜单 */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Gamepad2 className="w-6 h-6" />}
                </Button>
              </div>
            </div>
            {/* 移动端下拉菜单 */}
            {mobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                >
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('lessons'); setMobileMenuOpen(false); }}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}
                >
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
            )}
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-6 sm:mb-8 px-2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">所有课程</h2>
            <p className="text-sm sm:text-base text-gray-600">完成课程获得积分，解锁更多内容</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {lessons.map((lesson) => {
              const isAvailable = availableLessons.some(l => l.id === lesson.id)
              const games = completedGames[lesson.id] || {}
              const completedCount = (games.matching ? 1 : 0) + (games.sentence ? 1 : 0) + (games.listening ? 1 : 0)
              const isFullyCompleted = completedCount === 3

              return (
                <Card 
                  key={lesson.id} 
                  className={`${isAvailable ? 'hover:shadow-xl transition-all hover:-translate-y-1' : 'opacity-60'}`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant={isAvailable ? "default" : "secondary"}>
                        第{lesson.id}课
                      </Badge>
                      <div className="flex items-center gap-2">
                        {isAvailable && (
                          <Badge variant={isFullyCompleted ? "default" : "outline"}>
                            {completedCount}/3
                          </Badge>
                        )}
                        {!isAvailable && <Lock className="w-5 h-5 text-gray-400" />}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{lesson.title}</CardTitle>
                    <CardDescription>{lesson.description}</CardDescription>
                    {!isAvailable && (
                      <div className="text-sm text-orange-600 mt-2">
                        完成前一课的所有游戏后解锁
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-gray-600">
                        📝 词汇: {lesson.vocabulary.length} 个
                      </div>
                      <div className="text-sm text-gray-600">
                        📖 句型: {lesson.sentences.length} 个
                      </div>
                    </div>
                    {isAvailable ? (
                      <div className="space-y-2">
                        <Button 
                          onClick={() => startVocabMatchGame(lesson)}
                          className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.matching && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <ImageIcon className="w-4 h-4 mr-2" />
                          词汇配对
                        </Button>
                        <Button 
                          onClick={() => startSentenceGame(lesson)}
                          className="w-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.sentence && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <BookOpen className="w-4 h-4 mr-2" />
                          句子排序
                        </Button>
                        <Button 
                          onClick={() => startListeningGame(lesson)}
                          className="w-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center"
                          size="sm"
                        >
                          {games.listening && <Check className="w-4 h-4 mr-2 text-green-300" />}
                          <Volume2 className="w-4 h-4 mr-2" />
                          听音辨词
                        </Button>
                      </div>
                    ) : (
                      <Button disabled className="w-full" size="sm">
                        <Lock className="w-4 h-4 mr-2" />
                        课程已锁定
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderVocabMatchGame = () => {
    const shuffledEnglish = [...currentLesson.vocabulary].sort(() => Math.random() - 0.5)
    const shuffledChinese = [...currentLesson.vocabulary].sort(() => Math.random() - 0.5)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 sm:p-6 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
            <Button variant="outline" size="sm" onClick={() => setCurrentGame(null)}>
              <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">返回</span>
            </Button>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-base sm:text-lg md:text-xl font-bold">{gameScore} 分</span>
            </div>
          </div>

          <Card className="mb-4 sm:mb-6">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl md:text-2xl text-center">{currentLesson.title} - 词汇配对</CardTitle>
              <CardDescription className="text-center">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2 mt-2">
                  <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">点击左边的英文单词，再点击右边对应的中文意思进行配对</span>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-3 sm:mb-4">
                <Badge variant="outline" className="text-sm sm:text-base md:text-lg px-3 sm:px-4 py-1 sm:py-2">
                  已完成 {matchedPairs.length} / {currentLesson.vocabulary.length}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-center text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-4">英文单词</h3>
                  {shuffledEnglish.map((word) => (
                    <Button
                      key={`en-${word.word}`}
                      onClick={() => handleEnglishClick(word)}
                      disabled={matchedPairs.includes(word.word)}
                      className={`w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-semibold transition-all ${
                        matchedPairs.includes(word.word)
                          ? 'bg-green-500 text-white hover:bg-green-500 opacity-50 cursor-not-allowed'
                          : selectedEnglish?.word === word.word
                          ? wrongMatch
                            ? 'bg-red-500 text-white hover:bg-red-500 animate-shake'
                            : 'bg-blue-600 text-white hover:bg-blue-600 ring-4 ring-blue-300'
                          : 'bg-blue-100 text-blue-900 hover:bg-blue-200'
                      }`}
                    >
                      {word.word}
                      {matchedPairs.includes(word.word) && (
                        <Check className="w-5 h-5 ml-2" />
                      )}
                    </Button>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-center text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-4">中文意思</h3>
                  {shuffledChinese.map((word) => (
                    <Button
                      key={`cn-${word.word}`}
                      onClick={() => handleChineseClick(word)}
                      disabled={matchedPairs.includes(word.word)}
                      className={`w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-semibold transition-all ${
                        matchedPairs.includes(word.word)
                          ? 'bg-green-500 text-white hover:bg-green-500 opacity-50 cursor-not-allowed'
                          : selectedChinese?.word === word.word
                          ? wrongMatch
                            ? 'bg-red-500 text-white hover:bg-red-500 animate-shake'
                            : 'bg-orange-600 text-white hover:bg-orange-600 ring-4 ring-orange-300'
                          : 'bg-orange-100 text-orange-900 hover:bg-orange-200'
                      }`}
                    >
                      {word.meaning}
                      {matchedPairs.includes(word.word) && (
                        <Check className="w-5 h-5 ml-2" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-blue-900">
                    <p className="font-semibold mb-1">游戏规则：</p>
                    <ul className="list-disc list-inside space-y-0.5 sm:space-y-1">
                      <li>先点击左边的英文单词（变成蓝色）</li>
                      <li>再点击右边对应的中文意思（变成橙色）</li>
                      <li>配对正确会变成绿色，并获得10分</li>
                      <li>配对错误会变成红色，需要重新选择</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const renderSentenceGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <Button variant="outline" size="sm" onClick={() => setCurrentGame(null)}>
            <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="text-sm sm:text-base">返回</span>
          </Button>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <span className="text-base sm:text-lg md:text-xl font-bold">{gameScore} 分</span>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl md:text-2xl text-center">{currentLesson.title} - 句子排序</CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              题目 {currentQuestion + 1} / {currentLesson.sentences.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-gray-100 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">中文提示：</div>
                <div className="text-lg font-semibold text-gray-800">
                  {currentLesson.sentences[currentQuestion].chinese}
                </div>
              </div>

              <div className="min-h-20 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <div className="text-sm text-gray-600 mb-2">你的答案：</div>
                <div className="flex flex-wrap gap-2">
                  {userSentence.length === 0 ? (
                    <span className="text-gray-400">点击下方单词组成句子...</span>
                  ) : (
                    userSentence.map((word, index) => (
                      <Button
                        key={index}
                        variant="secondary"
                        onClick={() => handleRemoveWord(index)}
                        className="bg-purple-200 hover:bg-purple-300"
                      >
                        {word}
                        <X className="w-4 h-4 ml-2" />
                      </Button>
                    ))
                  )}
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="text-sm text-gray-600 mb-2">可选单词：</div>
                <div className="flex flex-wrap gap-2">
                  {sentenceWords.map((word, index) => (
                    <Button
                      key={index}
                      onClick={() => handleWordClick(word)}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {word}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={checkSentence} 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                disabled={userSentence.length === 0}
              >
                <Check className="w-5 h-5 mr-2" />
                检查答案
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderListeningGame = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-3 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <Button variant="outline" size="sm" onClick={() => setCurrentGame(null)}>
            <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="text-sm sm:text-base">返回</span>
          </Button>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
            <span className="text-base sm:text-lg md:text-xl font-bold">{gameScore} 分</span>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl md:text-2xl text-center">{currentLesson.title} - 听音辨词</CardTitle>
            <CardDescription className="text-center text-sm sm:text-base">
              题目 {currentQuestion + 1} / {currentLesson.vocabulary.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center py-8 sm:py-10 md:py-12 bg-pink-50 rounded-lg">
                <div className="mb-3 sm:mb-4">
                  <Volume2 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-pink-400" />
                </div>
                <Button 
                  onClick={() => speakWord(currentVocab?.word)}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6"
                  size="lg"
                >
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  点击播放发音
                </Button>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-3 sm:mt-4">听发音，选择正确的单词</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {vocabOptions.map((option) => (
                  <Button
                    key={option.word}
                    onClick={() => handleListeningAnswer(option)}
                    className="h-16 sm:h-18 md:h-20 text-base sm:text-lg md:text-xl bg-pink-100 hover:bg-pink-200 text-pink-900"
                  >
                    {option.meaning}
                  </Button>
                ))}
              </div>

              <div className="p-3 sm:p-4 bg-pink-50 rounded-lg border border-pink-200">
                <div className="flex items-start space-x-2">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-pink-900">
                    <p className="font-semibold mb-1">游戏提示：</p>
                    <p>点击“播放发音”按钮听单词的读音，然后从下方选项中选择对应的中文意思。</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderProfilePage = () => {
    const currentLevelInfo = getLevelByPoints(userPoints)
    const nextLevel = levels.find(l => l.id === currentLevelInfo.level + 1)

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  趣味英语乐园
                </h1>
              </div>
              {/* 桌面端菜单 */}
              <div className="hidden md:flex items-center space-x-6">
                <Button variant="ghost" onClick={() => setCurrentPage('home')}>
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('lessons')}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('profile')}>
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button variant="ghost" onClick={() => setCurrentPage('about')}>
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
              {/* 移动端汉堡菜单 */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Gamepad2 className="w-6 h-6" />}
                </Button>
              </div>
            </div>
            {/* 移动端下拉菜单 */}
            {mobileMenuOpen && (
              <div className="md:hidden pb-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                >
                  <Home className="w-4 h-4 mr-2" />
                  首页
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('lessons'); setMobileMenuOpen(false); }}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  课程
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}
                >
                  <User className="w-4 h-4 mr-2" />
                  个人中心
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }}
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  关于我们
                </Button>
              </div>
            )}
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Card className="mb-6">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl">个人中心</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="stats">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="stats" className="text-sm sm:text-base">学习统计</TabsTrigger>
                  <TabsTrigger value="achievements" className="text-sm sm:text-base">成就</TabsTrigger>
                </TabsList>
                
                <TabsContent value="stats" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">{userPoints}</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-600">总积分</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1 sm:mb-2">{completedLessons.length}</div>
                        <div className="text-xs sm:text-sm md:text-base text-gray-600">已完成课程</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6 text-center">
                        <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{currentLevelInfo.badge}</div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600 mb-1">{currentLevelInfo.name}</div>
                        <div className="text-xs sm:text-sm text-gray-600">等级 {currentLevelInfo.level}</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>学习进度</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={(completedLessons.length / totalLessons) * 100} className="h-3 mb-2" />
                      <p className="text-sm text-gray-600">
                        已完成 {completedLessons.length} / {totalLessons} 个课程
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>等级进度</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{currentLevelInfo.badge}</span>
                            <div>
                              <div className="font-semibold">{currentLevelInfo.name}</div>
                              <div className="text-sm text-gray-600">等级 {currentLevelInfo.level}</div>
                            </div>
                          </div>
                          {nextLevel && (
                            <div className="text-right">
                              <div className="text-sm text-gray-600">下一等级</div>
                              <div className="font-semibold">{nextLevel.name}</div>
                            </div>
                          )}
                        </div>
                        {nextLevel && (
                          <>
                            <Progress 
                              value={((userPoints - currentLevelInfo.minPoints) / (nextLevel.minPoints - currentLevelInfo.minPoints)) * 100} 
                              className="h-3" 
                            />
                            <p className="text-sm text-gray-600">
                              还需 {nextLevel.minPoints - userPoints} 积分升级
                            </p>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="achievements">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {achievements.map((achievement) => {
                      let unlocked = false
                      let progress = ''
                      
                      if (achievement.type === 'vocabulary') {
                        unlocked = practicedWords >= achievement.requirement
                        progress = `${practicedWords}/${achievement.requirement}`
                      } else if (achievement.type === 'sentence') {
                        unlocked = practicedSentences >= achievement.requirement
                        progress = `${practicedSentences}/${achievement.requirement}`
                      } else if (achievement.type === 'listening') {
                        unlocked = practicedListening >= achievement.requirement
                        progress = `${practicedListening}/${achievement.requirement}`
                      } else if (achievement.type === 'courses') {
                        unlocked = completedLessons.length >= achievement.requirement
                        progress = `${completedLessons.length}/${achievement.requirement}`
                      } else if (achievement.type === 'points') {
                        unlocked = userPoints >= achievement.requirement
                        progress = `${userPoints}/${achievement.requirement}`
                      } else if (achievement.type === 'streak') {
                        // 连续学习天数需要额外的逻辑，这里暂时设为未解锁
                        unlocked = false
                        progress = `0/${achievement.requirement}`
                      }

                      return (
                        <Card key={achievement.id} className={unlocked ? 'bg-yellow-50' : 'opacity-50'}>
                          <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                            <div className="flex items-center space-x-3 sm:space-x-4">
                              <div className="text-3xl sm:text-4xl flex-shrink-0">{achievement.emoji}</div>
                              <div className="flex-1 min-w-0">
                                <h3 className="text-sm sm:text-base font-semibold truncate">{achievement.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600">{achievement.description}</p>
                                {!unlocked && progress && (
                                  <p className="text-xs text-gray-500 mt-1">进度: {progress}</p>
                                )}
                                {unlocked && (
                                  <Badge variant="secondary" className="mt-2 text-xs">✓ 已解锁</Badge>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // 主渲染逻辑
  if (currentGame === 'vocab-match') {
    return renderVocabMatchGame()
  } else if (currentGame === 'sentence-order') {
    return renderSentenceGame()
  } else if (currentGame === 'listening') {
    return renderListeningGame()
  } else if (currentPage === 'profile') {
    return renderProfilePage()
  } else if (currentPage === 'lessons') {
    return renderLessonsPage()
  } else if (currentPage === 'about') {
    return <AboutPage setCurrentPage={setCurrentPage} />
  } else {
    return renderHomePage()
  }
}

export default App

