"use client"

import FeedbackCard from "@/components/_ui/FeedbackCard"
import FeedbackModal from "@/components/_ui/Modal/FeedbackModal"
import { useEffect, useRef, useState } from "react"

interface Feedback {
    name: string
    photoUrl: string
    text: string
    role: string
    company?: string
    rating?: number
}

interface FeedbackCarouselProps {
    feedbacks: Feedback[]
    speed?: number
    pauseOnHover?: boolean
}

export default function FeedbackCarousel({
    feedbacks,
    speed = 40,
    pauseOnHover = true,
}: FeedbackCarouselProps) {
    const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null)
    const duplicatedFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks]

    return (
        <>
            <div className="relative w-full overflow-hidden py-12">
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-[#0a0a1f] via-[#0a0a1f]/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-[#0a0a1f] via-[#0a0a1f]/80 to-transparent pointer-events-none z-10"></div>

                <div
                    className={`flex gap-6 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
                    style={{
                        animation: `scroll-left ${speed}s linear infinite`,
                    }}
                >
                    {duplicatedFeedbacks.map((feedback, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[350px] md:w-[400px]"
                        >

                            <FeedbackCard
                                profileImage={feedback.photoUrl}
                                name={feedback.name}
                                feedback={feedback.text}
                                role={feedback.role}
                                company={feedback.company}
                                rating={feedback.rating}
                                onClick={() => setSelectedFeedback(feedback)}
                            />

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
          `}</style>
            </div>

            <FeedbackModal
                isOpen={!!selectedFeedback}
                onClose={() => setSelectedFeedback(null)}
                profileImage={selectedFeedback?.photoUrl || ""}
                name={selectedFeedback?.name || ""}
                role={selectedFeedback?.role || ""}
                company={selectedFeedback?.company}
                feedback={selectedFeedback?.text || ""}
                rating={selectedFeedback?.rating}
            />
        </>
    )
}
