"use client"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"

interface FeedbackModalProps {
    isOpen: boolean
    onClose: () => void
    profileImage: string
    name: string
    role: string
    company?: string
    feedback: string
    rating?: number
}

export default function FeedbackModal({
    isOpen,
    onClose,
    profileImage,
    name,
    role,
    company = "",
    feedback,
    rating = 5,
}: FeedbackModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            {/* Header com Close Button */}
                            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex items-center justify-between rounded-t-2xl">
                                <h2 className="text-2xl font-bold text-white">Recomendação</h2>
                                <motion.button
                                    onClick={onClose}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {/* Profile Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="flex items-center gap-6 mb-8"
                                >
                                    <motion.img
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                        src={profileImage}
                                        alt={name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                                    />
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                            {name}
                                        </h3>
                                        <p className="text-lg text-blue-600 font-semibold mb-1">
                                            {role}
                                        </p>
                                        {company && (
                                            <p className="text-gray-600">{company}</p>
                                        )}
                                    </div>
                                </motion.div>

                                {/* Rating */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: 0.2 + i * 0.1,
                                                    type: "spring",
                                                    stiffness: 300,
                                                }}
                                                className={`w-6 h-6 rounded-full ${
                                                    i < rating
                                                        ? "bg-yellow-400"
                                                        : "bg-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Feedback Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                                >
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        "{feedback}"
                                    </p>
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8 flex gap-4"
                                >
                                    <motion.a
                                        href={`https://www.linkedin.com/in/guilherme-souza-/details/recommendations/?detailScreenTabIndex=0`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
                                    >
                                        Ver no LinkedIn
                                    </motion.a>
                                    <motion.button
                                        onClick={onClose}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Fechar
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
