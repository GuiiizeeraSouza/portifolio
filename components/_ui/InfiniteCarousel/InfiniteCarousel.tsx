"use client"

interface InfiniteCarouselProps {
  items: string[]
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export default function InfiniteCarousel({
  items,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: InfiniteCarouselProps) {
  // Duplicar items para criar efeito infinito contínuo
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div
        className={`flex gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full"
          >
            <span className="text-white font-medium text-sm whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
