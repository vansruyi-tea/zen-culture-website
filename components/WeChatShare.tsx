'use client'

import { useState, useEffect } from 'react'
import { X, Share2, Copy, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WeChatShareProps {
  title?: string
  description?: string
  url?: string
}

export default function WeChatShare({ 
  title = '禅意文化空间 - 李青忆引领的禅意生活体系',
  description = '李青忆：茶心映山海，她力振乡邦。禅茶文化传承者，乡村振兴践行者，公益自媒体赋能开创者。',
  url = typeof window !== 'undefined' ? window.location.href : ''
}: WeChatShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // 检测是否移动端
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // 备用方案
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleShare = () => {
    if (navigator.share && isMobile) {
      navigator.share({
        title,
        text: description,
        url,
      })
    } else {
      setIsOpen(true)
    }
  }

  const shareOptions = [
    {
      name: '微信好友',
      icon: '💬',
      action: () => {
        if (isMobile) {
          // 在微信内打开分享菜单
          alert('请点击右上角 ··· 菜单，选择"发送给朋友"')
        } else {
          alert('请使用手机微信扫描二维码分享')
        }
      }
    },
    {
      name: '朋友圈',
      icon: '👥',
      action: () => {
        if (isMobile) {
          alert('请点击右上角 ··· 菜单，选择"分享到朋友圈"')
        } else {
          alert('请使用手机微信分享到朋友圈')
        }
      }
    },
    {
      name: '复制链接',
      icon: <Copy className="h-5 w-5" />,
      action: handleCopyLink
    },
    {
      name: '复制微信号',
      icon: '📱',
      action: () => {
        navigator.clipboard.writeText('shanger9561')
        alert('微信号 shanger9561 已复制到剪贴板')
      }
    }
  ]

  if (!isMobile) {
    return null // 只在移动端显示
  }

  return (
    <>
      {/* 浮动分享按钮 */}
      <button
        onClick={handleShare}
        className="fixed bottom-24 right-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 active:scale-95 transition-all touch-target"
        aria-label="分享"
      >
        <Share2 className="h-6 w-6 text-primary-foreground" />
      </button>

      {/* 分享模态框 */}
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <div
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 分享面板 */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl shadow-2xl animate-slide-up">
            <div className="p-4">
              {/* 标题 */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-primary">分享到</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-accent touch-target"
                  aria-label="关闭"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* 分享选项 */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      option.action()
                      setIsOpen(false)
                    }}
                    className="flex flex-col items-center space-y-2 p-3 rounded-xl hover:bg-accent active:bg-accent/80 transition-colors touch-target"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary text-2xl">
                      {typeof option.icon === 'string' ? option.icon : option.icon}
                    </div>
                    <span className="text-xs font-medium">{option.name}</span>
                  </button>
                ))}
              </div>

              {/* 操作按钮 */}
              <div className="space-y-3">
                <Button
                  onClick={handleCopyLink}
                  variant={copied ? "default" : "outline"}
                  className="w-full touch-button"
                >
                  {copied ? '已复制链接' : '复制页面链接'}
                </Button>
                
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText('shanger9561')
                    alert('微信号已复制到剪贴板')
                    setIsOpen(false)
                  }}
                  variant="outline"
                  className="w-full touch-button"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  复制微信号
                </Button>
              </div>

              {/* 提示信息 */}
              <div className="mt-6 p-3 rounded-lg bg-muted/50">
                <p className="text-xs text-muted-foreground text-center">
                  在微信内，可以点击右上角 ··· 菜单进行分享
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}