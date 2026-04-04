"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface CardData {
  title: string
  description: string
  image?: string
}

interface Card {
  id: number
  dataIndex: number
}

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ data }: { data: CardData }) {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10 bg-brand-sand/30">
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full select-none object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brand-olive/10 text-brand-olive font-serif text-2xl">
            RE:BA
          </div>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-medium text-brand-charcoal">{data.title}</span>
          <span className="text-brand-charcoal/60 text-sm line-clamp-2 whitespace-normal">{data.description}</span>
        </div>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
  data,
}: {
  card: Card
  index: number
  isAnimating: boolean
  data: CardData
  key?: any
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[320px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-brand-charcoal/10 bg-white p-1 shadow-lg will-change-transform sm:w-[480px]"
    >
      <CardContent data={data} />
    </motion.div>
  )
}

export function AnimatedCardStack({ items }: { items: CardData[] }) {
  const [cards, setCards] = useState<Card[]>(
    items.slice(0, 3).map((_, i) => ({ id: i + 1, dataIndex: i }))
  )
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    if (isAnimating) return;
    setIsAnimating(true)

    const nextDataIndex = (cards[2].dataIndex + 1) % items.length

    setCards([...cards.slice(1), { id: nextId, dataIndex: nextDataIndex }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center pt-2">
      <div className="relative h-[380px] w-full overflow-hidden sm:w-[500px]">
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard 
              key={card.id} 
              card={card} 
              index={index} 
              isAnimating={isAnimating} 
              data={items[card.dataIndex]}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-10 -mt-px flex w-full items-center justify-center border-t border-brand-charcoal/10 py-4">
        <button
          onClick={handleAnimate}
          className="flex h-9 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-lg border border-brand-charcoal/10 bg-white px-4 font-medium text-brand-charcoal transition-all hover:bg-brand-sand/50 active:scale-[0.98]"
        >
          Next Reason
        </button>
      </div>
    </div>
  )
}
